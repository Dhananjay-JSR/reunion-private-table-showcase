import { createRemoteFileNode } from "gatsby-source-filesystem";
import axios from "axios";
import axiosRetry from "axios-retry";
const IMAGE_NODE_TYPE = `reunionimage`;
const SVG_NODE_TYPE = `reunionSVG`;
export async function sourceNodes({
  reporter,
  actions: { createNode },
  createContentDigest,
  createNodeId,
}) {
  async function indexing() {
    let SvgData = [];
    let JPGData = [];
    let res = await (
      await axios.get("https://strapi.web3p.in/api/upload/files")
    ).data;
    res.forEach((element) => {
      if (element.ext === ".svg") {
        SvgData.push(element.url);
      } else {
        if(element.ext !== ".json"||element.ext !== ".css"||element.ext !== ".scss")
        JPGData.push(element.url);
      }
    });
    return [SvgData, JPGData];
  }
  async function SVGExtractor(SVG) {
    axiosRetry(axios, {
      retries: 7,
      retryDelay: (retryCount) => {
        console.log(`Attempting to reconnect strapi server ${retryCount}`);
        return retryCount * 2000;
      },
      retryCondition: (error) => {
        reporter.panicOnBuild(
          `Fetching Failed`,
          new Error(
            "Connection Dropped after Multiple Retries , Please Start Data Fetching Once Again"
          )
        );
        return error.response.status === 503;
      },
    });

    let SVGContent = [];


    
    // await Promise.all([
    //   ...SVG.map(async (i) => {
    //     let content = await (
    //       await axios
    //         .get(`https://strapi.web3p.in${i}`, {
    //           timeout: 40000,
    //         })
    //         .catch((err) => {
    //           if (err.response.status !== 200) {
    //             throw new Error(
    //               `API call failed with status code: ${err.response.status} after 3 retry attempts`
    //             );
    //           }
    //         })
    //     ).data;
    //     SVGContent.push({
    //       url: i,
    //       content,
    //     });
    //   }),
    // ]);
    // return SVGContent;
    const FRAGMENT = 100

    for (let i = 0; i < SVG.length; i += FRAGMENT) {
      const batch = SVG.slice(i, i + FRAGMENT);
      const promises = batch.map(async (url, index) => {
        const response = await axios.get(`https://strapi.web3p.in${url}`, {
          timeout: 40000,
        }).catch((err) => {
          if (err.response.status !== 200) {
            throw new Error(`API call failed with status code: ${err.response.status} after 3 retry attempts`);
          }
        });
        return {
          url: url,
          content: response.data
        };
      });
      const batchResults = await Promise.all(promises);
      SVGContent.push(...batchResults);
      const percentComplete = Math.floor((i + FRAGMENT) / SVG.length * 100);
      reporter.info(`Strapi SVG Processing ${Math.floor(i / FRAGMENT) + 1} - ${percentComplete}% complete`)
    }
    return SVGContent;
  }
  await indexing()
    .then(async (d) => {
      reporter.success("Strapi Meta Fetching Successful");
      const promiserWorker = [];
      const [SVG, JPG] = d;
      const svgCont = await SVGExtractor(SVG);
      promiserWorker.push(
        Promise.all([
          ...svgCont.map((e) => {
            createNode({
              media: e.content,
              imgUrl: e.url,
              id: createNodeId(`${SVG_NODE_TYPE}-${e.url}`),
              parent: null,
              children: [],
              internal: {
                type: SVG_NODE_TYPE,
                contentDigest: createContentDigest(e.url),
              },
            });
          }),
        ])
      );
      promiserWorker.push(
        Promise.all([
          ...JPG.map((f) => {
            createNode({
              imgUrl: f,
              id: createNodeId(`${IMAGE_NODE_TYPE}-${f}`),
              parent: null,
              children: [],
              internal: {
                type: IMAGE_NODE_TYPE,
                contentDigest: createContentDigest(f),
              },
            });
          }),
        ])
      );
      return Promise.all(promiserWorker);
    })
    .then(() => {
      reporter.success(`Strapi Media Transformation Successful`);
    });
}

export function onPreInit({ reporter }) {
  return reporter.info(`Reunion Image Plugin Loaded`);
}

export async function onCreateNode({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) {
  if (node.internal.type === IMAGE_NODE_TYPE) {
    const fileNode = await createRemoteFileNode({
      url: `https://strapi.web3p.in${node.imgUrl}`,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    });
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id });
    }
  }
}

export function createSchemaCustomization({ actions }) {
  const { createTypes } = actions;

  createTypes(`
      type reunionimage implements Node {
        localFile: File @link(from: "fields.localFile")
      }
    `);
}

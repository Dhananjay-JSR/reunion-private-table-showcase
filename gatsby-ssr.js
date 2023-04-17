const React = require('react')

exports.onRenderBody = ({pathname ,
    setPostBodyComponents,setBodyAttributes
  }, pluginOptions) => {

// TODO: Polyfill for Gatsby Portal  
    const Portal = [
        <div key={"modal"} id="modal"></div>
      ]
    setPostBodyComponents(Portal)
  }
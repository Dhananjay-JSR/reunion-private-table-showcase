import React from 'react'
enum RenderType{
  RANGE,TEXT,CALENDER
}
export const AdvancedFilter:{
    label:string,
    data:{
      label:string,
      rendered:JSX.Element
    }[]
  }[] = [
    {
      label: "Cause List",
      data:[
        {
          label:"Date of hearing",
          rendered: <></>
        },{
          label:"Last Date of hearing",
          rendered: <></>
  
        },{
          label:"Date of cause list publication",
          rendered: <></>
        },{
          label:"Stage",
          rendered: <></>
        },{
          label:"Court",
          rendered:<></>
        },{
          label:"Advocate Name",
          rendered:<></>
        },{
          label:"Promoter Name",
          rendered:<></>
        },{
          label:"RERA ID",
          rendered:<></>
        },{
          label:"Project Name",
          rendered:<></>
        }
      ]
    },{
      label: "Customer Complaints",
      data:[
        {
          label:"Date of Filing",
          rendered: <></>
        },{
          label:"Forum",
          rendered:<></>
        },{
          label:"Stage",
          rendered:<></>
        },{
          label:"Complaint Type",
          rendered:<></>
        },{
          label:"Promoter Name",
          rendered:<></>
        },{
          label:"RERA ID",
          rendered:<></>
        },{
          label:"Project Name",
          rendered:<></>
        }
      ]
    },{
      label:"Litigations",
      data:[
        {
          label:"Date of Order",
          rendered:<></>
        },{
          label:"Case Type",
          rendered:<></>
        },{
          label:"Forum",
          rendered:<></>
        },{
          label:"Status",
          rendered:<></>
        },{
          label:"Promoter Name",
          rendered:<></>
        },{
          label:"RERA ID",
          rendered:<></>
        },{
          label:"Project Name",
          rendered:<></>
        }
      ]
    },{
      label:"Buildings",
      data:[
        {
          label:"Sanctioned floors",
          rendered:<></>
        },{
          label:"Number of Basements",
          rendered:<></>
        },{
          label:"parking",
          rendered:<></>
        },{
          label:"stilts ",
          rendered:<></>
        },{
          label:"date of completion",
          rendered:<></>
        },{
          label:"Unit type",
          rendered:<></>
        },{
          label:"Unit Size",
          rendered:<></>
        },{
          label:"Total carpet Area",
          rendered:<></>
        },{
          label:"Sold Carpet Area",
          rendered:<></>
        },{
          label:"UnSold Carpet Area",
          rendered:<></>
        },{
          label:"Total Unit Count",
          rendered:<></>
        },{
          label:"Unsold Unit Count",
          rendered:<></>
        },{
          label:"sold Unit Count",
          rendered:<></>
        },{
          label:"Percentage of work done",
          rendered:<></>
        },{
          label:"Project Name",
          rendered:<></>
        },{
          label:"Promoter Name",
          rendered:<></>
        },{
          label:"RERA ID",
          rendered:<></>
        }
      ]
    },{
      label:"Promoters",
      data:[
        {
          label:"Type",
          rendered:<></>
        },{
          label:"Count of Current projects as promoter",
          rendered:<></>
        },{
          label:"Count of current projects as copromoter",
          rendered:<></>
        },{
          label:"count of past project as promoter",
          rendered:<></>
        },{
          label:"Total CA of Current projects as promoter",
          rendered:<></>
        },{
          label:"Total CA of current projects as copromoter",
          rendered:<></>
        },{
          label:"Total CA of past project as promoter",
          rendered:<></>
        }
      ]
    },{
      label:"Approvals",
      data:[
        {
          label:"Project",
          rendered:<></>
        },{
          label:"RERA ID",
          rendered:<></>
        },{
          label:"Promoter",
          rendered:<></>
        }
      ]
    },{
      label:"Technical Details",
      data:[
      ]
    },{
      label:"Project",
      data:[
        {
          label:"Land Area",
          rendered:<></>
        },{
          label:"Total FSI",
          rendered:<></>
        },{
          label:"Carpet Area",
          rendered:<></>
        },{
          label:"Buildings Count",
          rendered:<></>
        },{
          label:"Unit Count",
          rendered:<></>
        },{
          label:"Parking Count",
          rendered:<></>
        },{
          label:"RERA approval Date",
          rendered:<></>
        },{
          label:"Proposed Date of completion",
          rendered:<></>
        },{
          label:"Percentage of Completion",
          rendered:<></>
        },{
          label:"Street Name",
          rendered:<></>
        },{
          label:"Locality",
          rendered:<></>
        },{
          label:"Village",
          rendered:<></>
        },{
          label:"taluka",
          rendered:<></>
        },{
          label:"District",
          rendered:<></>
        },{
          label:"Division",
          rendered:<></>
        },{
          label:"State",
          rendered:<></>
        },{
          label:"Pin code",
          rendered:<></>
        },{
          label:"Open Parking",
          rendered:<></>
        },{
          label:"Closed Parking",
          rendered:<></>
        },{
          label:"Total Parking",
          rendered:<></>
        },{
          label:"Project Land Area",
          rendered:<></>
        },{
          label:"Litigation case type",
          rendered:<></>
        },{
          label:"Litigation Status",
          rendered:<></>
        },{
          label:"Litigation Year",
          rendered:<></>
        },{
          label:"Customer complaints date of filing",
          rendered:<></>
        },{
          label:"Customer complaints Forum",
          rendered:<></>
        },{
          label:"Customer complaints Stage",
          rendered:<></>
        },{
          label:"Customer complaints Type",
          rendered:<></>
        }
      ]
    }
  ]
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProgressBar = ({id}) => {
  const data = useStaticQuery(graphql`
    query {
      allDataJson {
        totalCount
        nodes {
          id
        }
      }
    }
  `)
  
  let value;
  const length = Number(data.allDataJson.totalCount);
  data.allDataJson.nodes.forEach((node, inx) => {
    if (node.id === id) {
      value = inx;
    }
  });
  return <div className="relative">
    <label htmlFor="progress" className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/3 text-xs md:text-sm sm:translate-y-1/2">{`${value+1} of ${length}`}</label>
    <progress id="progress" className="progress-bar w-full h-0.5  border-none" value={value+1} max={length-1}></progress>
  </div>
}

export default ProgressBar
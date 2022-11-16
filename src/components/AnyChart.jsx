import React from "react";
import Plot from "react-plotly.js";

const AnyChart = ({ style, layout, data, config }) => {
  return (
    <>
      <Plot
        style={style}
        layout={layout}
        data={data}
        config={
          config /* {
          responsive: true,
        } */
        }
      />
    </>
  );
};

export default AnyChart;

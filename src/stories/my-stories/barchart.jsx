import React from 'react';
import "./barchart.css";
const Barchart = ({ children }) => {
  return (
    <h2 className="barchart">
      {
        children
      }
    </h2>
  )
}

export default Barchart;
import React from "react"
import "./VisibleGrid.scss"

const VisibleGrid = () => (
  <div className="grid">
    <div className="container">
      <div className="row">
        <div className="grid-col grid-col-1 col-6 col-md-3"></div>
        <div className="grid-col grid-col-2 col-6 col-md-3"></div>
        <div className="grid-col grid-col-3 col-md-3"></div>
        <div className="grid-col grid-col-4 col-md-3"></div>
      </div>
    </div>
  </div>
)

export default VisibleGrid

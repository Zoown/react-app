import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function SidePanel() {
  return (
    <div
      className="bg-light border"
      style={{ width: "250px", minHeight: "100vh", padding: "10px" }}
    >
      <h5 className="text-center">Side Panel</h5>
      <ul className="list-unstyled">
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 2</a>
        </li>
        <li>
          <a href="#">Link 3</a>
        </li>
      </ul>
    </div>
  );
}
export default SidePanel;

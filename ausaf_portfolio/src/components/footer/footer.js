import React from "react";
import "./index.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Ausaf Ahmad &nbsp; {new Date().getFullYear()}</div>
    </div>
  );
};

export default FooterPanel;
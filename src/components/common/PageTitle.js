import React from "react";

function PageTitle(props) {
  const { title, subtitle } = props;
  return (
    <div>
      <h1
        style={{
          color: "#000000",
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: "38.4px",
          marginBottom: '11px'
        }}
      >
        {title}
      </h1>
      <p
        style={{
          color: "#969BA0",
          fontWeight: 500,
          fontSize: "18px",
          lineHeight: "21.6px",
        }}
      >
        {subtitle}
      </p>
    </div>
  );
}

export default PageTitle;

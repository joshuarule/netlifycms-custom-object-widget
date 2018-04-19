import PropTypes from "prop-types";
import React from "react";

export default function Preview(props) {
  console.log(props);
  return (
    <div>
      <p>{props.fieldsMetaData.get("title")}</p>
      <p>{props.fieldsMetaData.get("alt")}</p>
    </div>
  );
}

Preview.propTypes = {
  value: PropTypes.node
};

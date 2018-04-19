import PropTypes from "prop-types";
import React, { Fragment } from "react";

export default class Control extends React.Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired
  };

  static defaultProps = {
    value: new Map()
  };

  onChangeObject(field, val) {
    console.log(field);
    console.log(val);
  }

  render() {
    const {
      forID,
      field,
      value,
      onChange,
      onChangeObject,
      classNameWrapper,
      metadata
    } = this.props;

    console.log("value", value);
    // console.log("props", this.props);

    return (
      <div className={"test"}>
        <input
          type="text"
          id="title"
          field="title"
          className={classNameWrapper}
          value={value.get("title") || ""}
          onChange={val =>
            onChangeObject("title", val.target.value, {
              title: val.target.value
            })
          }
        />

        <input
          type="text"
          id="alt"
          field="alt"
          className={classNameWrapper}
          value={value.get("alt") || ""}
          onChange={val =>
            onChangeObject("alt", val.target.value, {
              alt: val.target.value
            })
          }
        />
      </div>
    );
  }
}

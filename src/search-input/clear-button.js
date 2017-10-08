import * as React from "react";
import PropTypes from "prop-types";
import "font-awesome/css/font-awesome.min.css";
import { styles, BUTTON_WIDTH } from "src/search-input/styles/styles";

export const ClearButton = ({ visible, onClick, hovered }) => (
  <button
    onClick={onClick}
    style={{
      width: BUTTON_WIDTH,
      border: 0,
      verticalAlign: "middle",
      opacity: visible ? 1 : 0
    }}
  >
    <span
      style={hovered ? styles.clearButtonIconHover : styles.clearButtonIcon}
      className="clear-button-icon fa-stack fa-lg"
    >
      <i
        style={{ opacity: hovered ? 0 : 1 }}
        className="fa fa-circle-o fa-stack-2x"
      />
      <i className="fa fa-times fa-stack-1x" />
    </span>
  </button>
);

ClearButton.propTypes = {
  hovered: PropTypes.bool,
  onClick: PropTypes.func,
  visible: PropTypes.bool
};

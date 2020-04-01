import React from 'react'
import PropTypes from 'prop-types';

const Panel = (props) => {
  return (
    <div className={"panel panel__" + props.panelName}>
      {props.children}
    </div>
  );
};

Panel.propTypes = {
  panelName: PropTypes.string.isRequired,
  children: PropTypes.element
}

export default Panel;

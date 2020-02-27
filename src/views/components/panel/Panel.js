import React from 'react'

const Panel = (props) => {
  return (
    <div className={"panel panel__" + props.panelName}>
      {props.children}
    </div>
  );
};

export default Panel;

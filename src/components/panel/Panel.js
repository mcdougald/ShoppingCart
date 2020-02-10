import React from 'react'

const Panel = (props) => {
  return (
    <div className={"panel panel--" + props.panelName}>
      {props.children}
    </div>
  );
};

export default Panel;

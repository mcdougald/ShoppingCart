import React from 'react'
import Panel from '../../components/panel/Panel';

const NotFound = () => {
  return (
    <Panel className={'is-center is-shadowless'} panelName={'notFound'}>
      <div className={'not-found-content'}>
        <h2 className={'title'}>[404] page not found</h2>
        <p>We are sorry but the page you are looking for does not exist.</p>
      </div>
    </Panel>
  );
};
export default NotFound

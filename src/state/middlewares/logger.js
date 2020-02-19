const createLogger = store => next => action => {
  const prevState = store.getState( );
  const result = next( action );
  const nextState = store.getState( );
  logInfo( `%c ${ action.type } `);
  logInfo( "%c PREVIOUS STATE", "color: darkorange", prevState );
  logInfo( "%c ACTION PAYLOAD", "color: blue", action );
  logInfo( "%c NEXT STATE", "color: darkgreen", nextState );
  console.groupEnd();
  return result
};

function logInfo( ...args ) {
  console.info( ...args );
}

export default createLogger

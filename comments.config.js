const data = Object.freeze({
  jsDoc: Object.freeze({
    consts: Object.freeze({
      wss: "The WebSocket server to be accessed across the codebase." /* $COMMENT#JSDOC#CONSTS#WSS */,
      webSocketClients:
        "The list of all WebSocket clients created in order to broadcast the new messages to all of them." /* $COMMENT#JSDOC#CONSTS#WEBSOCKETCLIENTS */,
    }),
    utils: Object.freeze({
      defs: Object.freeze({
        broadcastFlow:
          "The flow that broadcasts the new messages to all WebSocket clients." /* $COMMENT#JSDOC#UTILS#DEFS#BROADCASTFLOW */,
      }),
      params: Object.freeze({
        message: "For now, the current latest message." /* $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE */,
      }),
      returns: Object.freeze({}),
    }),
  }),
});

const ignores = [];

const lintConfigImports = false; // can be omitted
const myIgnoresOnly = false; // can be omitted

// NEW
const composedVariablesExclusives = []; // can be omitted

const config = {
  data,
  ignores,
  lintConfigImports,
  myIgnoresOnly,
  composedVariablesExclusives,
};

export default config;

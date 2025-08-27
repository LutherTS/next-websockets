const data = Object.freeze({
  jsDoc: Object.freeze({
    consts: Object.freeze({
      webSocketClients:
        "The list of all WebSocket clients created in order to broadcast the new messages to all of them from the server." /* $COMMENT#JSDOC#CONSTS#WEBSOCKETCLIENTS */,
      webSocketEndpoint:
        "The WebSocket API endpoint shared between the server (via the WebSocket server) and the client (via the WebSocket client instances)." /* $COMMENT#JSDOC#CONSTS#WEBSOCKETENDPOINT */,
    }),
    utils: Object.freeze({
      defs: Object.freeze({
        broadcastFlow:
          "The flow that broadcasts the new messages to all WebSocket clients. (Saved as a flow so that it can be used across Server Functions at will, be them standalone in their own files or inline within Server Components.)" /* $COMMENT#JSDOC#UTILS#DEFS#BROADCASTFLOW */,
      }),
      params: Object.freeze({
        message:
          "The current latest message sent from the client." /* $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE */,
        displayUsername:
          "The username to be displayed sent from the current session. If it exists, this lets the action know which existing user sent the current message. If it doesn't, this lets the action know the current message was sent from a guest (unauthenticated)." /* $COMMENT#JSDOC#UTILS#PARAMS#DISPLAYUSERNAME */,
      }),
      returns: Object.freeze({}),
    }),
    writes: Object.freeze({
      defs: Object.freeze({
        createNewMessage:
          "Creates a new message in the Prisma database." /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGE */,
        createNewMessageWithUserId:
          "Creates a new message in the Prisma database, assigned to the current user who sent the message." /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGEWITHUSERID */,
        deleteExtraMessages:
          "Deletes older messages from the database to cap the amount of messages it can effectively store." /* $COMMENT#JSDOC#WRITES#DEFS#DELETEEXTRAMESSAGES */,
      }),
      params: Object.freeze({
        userId:
          "The ID of the current user as found from their unique username." /* $COMMENT#JSDOC#WRITES#PARAMS#USERID */,
      }),
    }),
    reads: Object.freeze({
      defs: Object.freeze({
        findLatestMessages:
          "Finds the latest messages from the Prisma database. At this time, transforms them directly in an array of usable strings." /* $COMMENT#JSDOC#READS#DEFS#FINDLATESTMESSAGES */,
        countAllMessages:
          "Counts all the messages saved in the database, in order to ascertain its persistence between reboots and deployments." /* $COMMENT#JSDOC#READS#DEFS#COUNTALLMESSAGES */,
      }),
    }),
    actions: Object.freeze({
      defs: Object.freeze({
        broadcastAction:
          "The Server Function that triggers broadcasts directly from the client, by passing the new message to the server." /* $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION */,
      }),
    }),
    pages: Object.freeze({
      WebSockets: Object.freeze({
        defs: Object.freeze({
          ServerPage:
            'The "outer", Server part of the page. A Server Component, it accesses the server directly to retrieve the latest messages, instantiating any load of the page with the freshest data directly from the server, before it renders the page.' /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#SERVERPAGE */,
          ClientPage:
            'The "inner", Client part of the page. A Client Component, it retrieves the initial messages from its parent Server Component, before storing them in React state. It then creates a WebSocket to listen to fresh new data broadcasted from the server, in real-time on the client.' /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#CLIENTPAGE */,
          broadcast:
            "The handler that triggers the broadcast. This is where the magic happens. This handler operates both on the client and on the server. Via the `broadcastAction` server action (Server Function), it sends the new message from the client to the server, where `broadcastAction` triggers the broadcast for all WebSocket clients directly from the server, in real-time." /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#BROADCAST */,
        }),
      }),
    }),
  }),
  remarks: Object.freeze({
    useClient:
      "$COMMENT#FORCOMPOSEDVARIABLES#REQUIREDAMONGREASONS $COMMENT#FORCOMPOSEDVARIABLES#CLIENT $COMMENT#FORCOMPOSEDVARIABLES#PARENSASITDOESFOR $COMMENT#FORCOMPOSEDVARIABLES#WSCLIENTPAGEPARENS $COMMENT#FORCOMPOSEDVARIABLES#NEEDSASREFERENCE" /* $COMMENT#REMARKS#USECLIENT */,
    useServer:
      "$COMMENT#FORCOMPOSEDVARIABLES#REQUIREDAMONGREASONS $COMMENT#FORCOMPOSEDVARIABLES#SERVER $COMMENT#FORCOMPOSEDVARIABLES#PARENSASITDOESFOR $COMMENT#FORCOMPOSEDVARIABLES#WSSERVERPAGEPARENS $COMMENT#FORCOMPOSEDVARIABLES#NEEDSASREFERENCE" /* $COMMENT#REMARKS#USESERVER */,
  }),
  forComposedVariables: Object.freeze({
    requiredAmongReasons:
      "required, among other reasons, to inform React that if this module is to imported on the" /* $COMMENT#FORCOMPOSEDVARIABLES#REQUIREDAMONGREASONS */,
    parensAsItDoesFor:
      "(as it does for" /* $COMMENT#FORCOMPOSEDVARIABLES#PARENSASITDOESFOR */,
    needsAsReference:
      "it needs to be imported as reference" /* $COMMENT#FORCOMPOSEDVARIABLES#NEEDSASREFERENCE */,
    client: "client" /* $COMMENT#FORCOMPOSEDVARIABLES#CLIENT */,
    wsClientPageParens:
      "WebSocketsClientPage)," /* $COMMENT#FORCOMPOSEDVARIABLES#WSCLIENTPAGEPARENS */,
    server: "server" /* $COMMENT#FORCOMPOSEDVARIABLES#SERVER */,
    wsServerPageParens:
      "WebSocketsServerPage)," /* $COMMENT#FORCOMPOSEDVARIABLES#WSSERVERPAGEPARENS */,
  }),
});

const ignores = [];

const lintConfigImports = false; // can be omitted
const myIgnoresOnly = false; // can be omitted

// NEW
const composedVariablesExclusives = [
  "FORCOMPOSEDVARIABLES#REQUIREDAMONGREASONS",
  "FORCOMPOSEDVARIABLES#PARENSASITDOESFOR",
  "FORCOMPOSEDVARIABLES#NEEDSASREFERENCE",
  "FORCOMPOSEDVARIABLES#CLIENT",
  "FORCOMPOSEDVARIABLES#WSCLIENTPAGEPARENS",
  "FORCOMPOSEDVARIABLES#SERVER",
  "FORCOMPOSEDVARIABLES#WSSERVERPAGEPARENS",
]; // can be omitted

const config = {
  data,
  ignores,
  lintConfigImports,
  myIgnoresOnly,
  composedVariablesExclusives,
};

export default config;

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
    pages: Object.freeze({
      WebSockets: Object.freeze({
        defs: Object.freeze({
          ServerPage:
            'The "outer", Server part of the page. A Server Component, it accesses the server directly to retrieve the latest messages, instantiating any load of the page with the freshest data directly from the server, before it renders the page.' /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#SERVERPAGE */,
          ClientPage:
            'The "inner", Client part of the page. A Client Component, it retrieves the initial messages from its parent Server Component, before storing them in React state. It then creates a WebSocket to listen to fresh new data broadcasted from the server, in real-time on the client.' /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#CLIENTPAGE */,
          broadcast:
            "The handler that triggers the broadcast. This is where the magic happens. This handler operates both on the client and on the server. Via the `broadcastAction` server action (Server Function), it sends the new message from the client to the server, where `broadcastAction` triggers the broadcast for all WebSocket clients directly from the server, in real-time." /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#BROADCAST */,
          getExistingUserAction:
            "$COMMENT#FORCOMPOSEDVARIABLES#GETSORDOESNT $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USER $COMMENT#FORCOMPOSEDVARIABLES#FROMTODECIDE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USER $COMMENT#FORCOMPOSEDVARIABLES#EXISTSOR" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#GETEXISTINGUSERACTION */,
          createNewUserAction:
            "$COMMENT#FORCOMPOSEDVARIABLES#CREATESCORRESPONDING $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USER $COMMENT#FORCOMPOSEDVARIABLES#TONEWLYCREATED $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#ONSUCCESSSIGNUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#CREATENEWUSERACTION */,
        }),
        params: Object.freeze({
          displayUsernameA:
            "$COMMENT#FORCOMPOSEDVARIABLES#THEUSERNAMETOFIND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#NEEDEDTOSIGNINUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#DISPLAYUSERNAMEA */,
          username:
            "$COMMENT#FORCOMPOSEDVARIABLES#THEUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERNAME $COMMENT#FORCOMPOSEDVARIABLES#OFTHENEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERCOMMA $COMMENT#FORCOMPOSEDVARIABLES#MADEOUTOF $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#DISPLAYUSERNAME $COMMENT#FORCOMPOSEDVARIABLES#INITIALLYTOCREATE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#INSTANCESIGNUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#USERNAME */,
        }),
      }),
    }),
    actions: Object.freeze({
      defs: Object.freeze({
        broadcastAction:
          "The Server Function that triggers broadcasts directly from the client, by passing the new message to the server." /* $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION */,
      }),
    }),
    writes: Object.freeze({
      defs: Object.freeze({
        createNewMessage:
          "$COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#MESSAGE $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#ATTRIBUTEDASGUEST" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGE */,
        createNewMessageWithUserId:
          "$COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#MESSAGE $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#ASSIGNEDASUSER" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGEWITHUSERID */,
        deleteExtraMessages:
          "Deletes older messages from the database to cap the amount of messages it can effectively store." /* $COMMENT#JSDOC#WRITES#DEFS#DELETEEXTRAMESSAGES */,
        createNewUserByUsername:
          "$COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USER $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#THROUGHUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERNAMEPERIOD" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWUSERBYUSERNAME */,
      }),
      params: Object.freeze({
        userId:
          "The ID of the current user as found from their unique username." /* $COMMENT#JSDOC#WRITES#PARAMS#USERID */,
      }),
    }),
    reads: Object.freeze({
      defs: Object.freeze({
        findLatestMessages:
          "Finds the latest messages from the Prisma database. At this time, transforms them directly into an array of objects containing their message, the message's ID, and the username of the user who sent it (with `null` instead if no such user is authenticated). The array is then reversed to display the messages in the correct visual order." /* $COMMENT#JSDOC#READS#DEFS#FINDLATESTMESSAGES */,
        countAllMessages:
          "Counts all the messages saved in the database, in order to ascertain its persistence between reboots and deployments." /* $COMMENT#JSDOC#READS#DEFS#COUNTALLMESSAGES */,
      }),
      params: Object.freeze({
        displayUsernameB:
          "$COMMENT#FORCOMPOSEDVARIABLES#THEUSERNAMETOFIND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USER $COMMENT#FORCOMPOSEDVARIABLES#TOBEATTACHED" /* $COMMENT#JSDOC#READS#PARAMS#DISPLAYUSERNAMEB */,
      }),
    }),
  }),
  remarks: Object.freeze({
    useClient:
      "$COMMENT#FORCOMPOSEDVARIABLES#REQUIREDAMONGREASONS $COMMENT#FORCOMPOSEDVARIABLES#CLIENT $COMMENT#FORCOMPOSEDVARIABLES#PARENSASITDOESFOR $COMMENT#FORCOMPOSEDVARIABLES#WSCLIENTPAGEPARENS $COMMENT#FORCOMPOSEDVARIABLES#NEEDSASREFERENCE" /* $COMMENT#REMARKS#USECLIENT */,
    useServer:
      "$COMMENT#FORCOMPOSEDVARIABLES#REQUIREDAMONGREASONS $COMMENT#FORCOMPOSEDVARIABLES#SERVER $COMMENT#FORCOMPOSEDVARIABLES#PARENSASITDOESFOR $COMMENT#FORCOMPOSEDVARIABLES#WSSERVERPAGEPARENS $COMMENT#FORCOMPOSEDVARIABLES#NEEDSASREFERENCE" /* $COMMENT#REMARKS#USESERVER */,
    inlineServerActions:
      "passing inline server actions is impractical in that their JSDoc definitions do not carry over and have to be rewritten manually" /* $COMMENT#REMARKS#INLINESERVERACTIONS */,
    boundServerActions:
      "but to be fair, the same would need to be done to bound server actions, so the limitation is across both standalone server actions and inline server actions alike" /* $COMMENT#REMARKS#BOUNDSERVERACTIONS */,
  }),
  forComposedVariables: Object.freeze({
    // general
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
    createsNew: "Creates a new" /* $COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW */,
    inPrisma:
      "in the Prisma database," /* $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA */,
    attributedAsGuest:
      "attributed to no one since published as a guest." /* $COMMENT#FORCOMPOSEDVARIABLES#ATTRIBUTEDASGUEST */,
    assignedAsUser:
      "assigned to the current user who sent the message." /* $COMMENT#FORCOMPOSEDVARIABLES#ASSIGNEDASUSER */,
    throughUnique:
      "through its provided unique" /* $COMMENT#FORCOMPOSEDVARIABLES#THROUGHUNIQUE */,
    getsOrDoesnt:
      "Gets or doesn't get an existing" /* $COMMENT#FORCOMPOSEDVARIABLES#GETSORDOESNT */,
    fromToDecide:
      "from the database in order to decide whether to sign in if a" /* $COMMENT#FORCOMPOSEDVARIABLES#FROMTODECIDE */,
    existsOr:
      "exists or sign up otherwise." /* $COMMENT#FORCOMPOSEDVARIABLES#EXISTSOR */,
    createsCorresponding:
      "Creates the corresponding" /* $COMMENT#FORCOMPOSEDVARIABLES#CREATESCORRESPONDING */,
    toNewlyCreated:
      "to the newly-created" /* $COMMENT#FORCOMPOSEDVARIABLES#TONEWLYCREATED */,
    onSuccessSignUp:
      "on success of its signing up." /* $COMMENT#FORCOMPOSEDVARIABLES#ONSUCCESSSIGNUP */,
    // here
    theUsernameToFind:
      "The username to be displayed sent from the current session. Here used to find the" /* $COMMENT#FORCOMPOSEDVARIABLES#THEUSERNAMETOFIND */,
    neededToSignInUp:
      "needed to sign in if found or to acknowledge its absence for sign up if nonexistent." /* $COMMENT#FORCOMPOSEDVARIABLES#NEEDEDTOSIGNINUP */,
    toBeAttached:
      "to be attached to the message being sent." /* $COMMENT#FORCOMPOSEDVARIABLES#TOBEATTACHED */,
    theUnique: "The unique" /* $COMMENT#FORCOMPOSEDVARIABLES#THEUNIQUE */,
    oftheNew: "of the new" /* $COMMENT#FORCOMPOSEDVARIABLES#OFTHENEW */,
    madeOutOf: "made out of the" /* $COMMENT#FORCOMPOSEDVARIABLES#MADEOUTOF */,
    initiallyToCreate:
      "initially provided to create a" /* $COMMENT#FORCOMPOSEDVARIABLES#INITIALLYTOCREATE */,
    instanceSignUp:
      "instance at sign up." /* $COMMENT#FORCOMPOSEDVARIABLES#INSTANCESIGNUP */,
    prisma: Object.freeze({
      message: "`Message`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#MESSAGE */,
      user: "`User`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USER */,
      userComma: "`User`," /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERCOMMA */,
      users: "`Users`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERS */,
      betterAuthUser:
        "`BetterAuthUser`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#BETTERAUTHUSER */,
      betterAuthUsers:
        "`BetterAuthUsers`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#BETTERAUTHUSERS */,
      username:
        "`username`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERNAME */,
      usernameComma:
        "`username`," /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERNAMECOMMA */,
      usernamePeriod:
        "`username`." /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#USERNAMEPERIOD */,
      displayUsername:
        "`displayUsername`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#DISPLAYUSERNAME */,
      displayUsernameComma:
        "`displayUsername`," /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#DISPLAYUSERNAMECOMMA */,
      id: "`id`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#ID */,
    }),
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
  "FORCOMPOSEDVARIABLES#CREATESNEW",
  "FORCOMPOSEDVARIABLES#INPRISMA",
  "FORCOMPOSEDVARIABLES#ATTRIBUTEDASGUEST",
  "FORCOMPOSEDVARIABLES#ASSIGNEDASUSER",
  "FORCOMPOSEDVARIABLES#THROUGHUNIQUE",
  "FORCOMPOSEDVARIABLES#GETSORDOESNT",
  "FORCOMPOSEDVARIABLES#FROMTODECIDE",
  "FORCOMPOSEDVARIABLES#EXISTSOR",
  "FORCOMPOSEDVARIABLES#CREATESCORRESPONDING",
  "FORCOMPOSEDVARIABLES#TONEWLYCREATED",
  "FORCOMPOSEDVARIABLES#ONSUCCESSSIGNUP",
  "FORCOMPOSEDVARIABLES#THEUSERNAMETOFIND",
  "FORCOMPOSEDVARIABLES#NEEDEDTOSIGNINUP",
  "FORCOMPOSEDVARIABLES#TOBEATTACHED",
  "FORCOMPOSEDVARIABLES#THEUNIQUE",
  "FORCOMPOSEDVARIABLES#OFTHENEW",
  "FORCOMPOSEDVARIABLES#MADEOUTOF",
  "FORCOMPOSEDVARIABLES#INITIALLYTOCREATE",
  "FORCOMPOSEDVARIABLES#INSTANCESIGNUP",
  "FORCOMPOSEDVARIABLES#PRISMA#MESSAGE",
  "FORCOMPOSEDVARIABLES#PRISMA#USER",
  "FORCOMPOSEDVARIABLES#PRISMA#USERCOMMA",
  "FORCOMPOSEDVARIABLES#PRISMA#USERS",
  "FORCOMPOSEDVARIABLES#PRISMA#BETTERAUTHUSER",
  "FORCOMPOSEDVARIABLES#PRISMA#BETTERAUTHUSERS",
  "FORCOMPOSEDVARIABLES#PRISMA#USERNAME",
  "FORCOMPOSEDVARIABLES#PRISMA#USERNAMECOMMA",
  "FORCOMPOSEDVARIABLES#PRISMA#USERNAMEPERIOD",
  "FORCOMPOSEDVARIABLES#PRISMA#DISPLAYUSERNAME",
  "FORCOMPOSEDVARIABLES#PRISMA#DISPLAYUSERNAMECOMMA",
  "FORCOMPOSEDVARIABLES#PRISMA#ID",
]; // can be omitted

const config = {
  data,
  ignores,
  lintConfigImports,
  myIgnoresOnly,
  composedVariablesExclusives,
};

export default config;

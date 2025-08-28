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
          // getExistingUserAction:
          //   "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#GETSORDOESNT $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#FROMTODECIDE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#EXISTSOR" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#GETEXISTINGUSERACTION */,
          // createNewUserAction:
          //   "$COMMENT#FORCOMPOSEDVARIABLES#CREATESCORRESPONDING $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#TONEWLYCREATED $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#ONSUCCESSSIGNUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#CREATENEWUSERACTION */,
        }),
        params: Object.freeze({
          // displayUsernameA:
          //   "$COMMENT#FORCOMPOSEDVARIABLES#THEUSERNAMETOFIND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#NEEDEDTOSIGNINUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#DISPLAYUSERNAMEA */,
          // username:
          //   "$COMMENT#FORCOMPOSEDVARIABLES#THEUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAME $COMMENT#FORCOMPOSEDVARIABLES#OFTHENEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERCOMMA $COMMENT#FORCOMPOSEDVARIABLES#MADEOUTOF $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAME $COMMENT#FORCOMPOSEDVARIABLES#INITIALLYTOCREATE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#INSTANCESIGNUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#USERNAME */,
        }),
        returns: Object.freeze({
          // getExistingUserAction:
          //   "$COMMENT#FORCOMPOSEDVARIABLES#EITHERTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAME $COMMENT#FORCOMPOSEDVARIABLES#OFTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#INOBJECTORNULL" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#RETURNS#GETEXISTINGUSERACTION */,
        }),
      }),
    }),
    actions: Object.freeze({
      defs: Object.freeze({
        broadcastAction:
          "The Server Function that triggers broadcasts directly from the client, by passing the new message to the server." /* $COMMENT#JSDOC#ACTIONS#DEFS#BROADCASTACTION */,
      }),
    }),
    reads: Object.freeze({
      defs: Object.freeze({
        findLatestMessages:
          "Finds the latest messages from the Prisma database. At this time, transforms them directly into an array of objects containing their message, the message's ID, and the username of the user who sent it (with `null` instead if no such user is authenticated). The array is then reversed to display the messages in the correct visual order." /* $COMMENT#JSDOC#READS#DEFS#FINDLATESTMESSAGES */,
        countAllMessages:
          "Counts all the messages saved in the database, in order to ascertain its persistence between reboots and deployments." /* $COMMENT#JSDOC#READS#DEFS#COUNTALLMESSAGES */,
        //   findExistingUsernameByDisplayUsername:
        //     "$COMMENT#FORCOMPOSEDVARIABLES#FINDSAN $COMMENT#FORCOMPOSEDVARIABLES#EXISTING $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#VIAITSUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMECOMMA $COMMENT#FORCOMPOSEDVARIABLES#IFSUCHA $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#EXISTSPERIOD" /* $COMMENT#JSDOC#READS#DEFS#FINDEXISTINGUSERNAMEBYDISPLAYUSERNAME */,
        //   findUserByUsername:
        //     "$COMMENT#FORCOMPOSEDVARIABLES#FINDSTHE $COMMENT#FORCOMPOSEDVARIABLES#EXISTING $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#VIAITSUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMECOMMA $COMMENT#FORCOMPOSEDVARIABLES#ITSEXISTENCEGUARANTEED $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMES $COMMENT#FORCOMPOSEDVARIABLES#WORDS#OF $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERS $COMMENT#FORCOMPOSEDVARIABLES#WORDS#AND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMES $COMMENT#FORCOMPOSEDVARIABLES#WORDS#OF $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSERS $COMMENT#FORCOMPOSEDVARIABLES#ARESAMESIMULTANEOUSLY" /* $COMMENT#JSDOC#READS#DEFS#FINDUSERBYUSERNAME */,
        // }),
        // params: Object.freeze({
        //   displayUsernameB:
        //     "$COMMENT#FORCOMPOSEDVARIABLES#THEUSERNAMETOFIND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#TOBEATTACHED" /* $COMMENT#JSDOC#READS#PARAMS#DISPLAYUSERNAMEB */,
        // }),
        // returns: Object.freeze({
        //   findUserByUsername:
        //     "$COMMENT#FORCOMPOSEDVARIABLES#EITHERTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#ID $COMMENT#FORCOMPOSEDVARIABLES#OFTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#INOBJECTORNULL" /* $COMMENT#JSDOC#READS#RETURNS#FINDUSERBYUSERNAME */,
      }),
    }),
    writes: Object.freeze({
      defs: Object.freeze({
        // createNewMessage:
        //   "$COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#MESSAGE $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#ATTRIBUTEDASGUEST" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGE */,
        // createNewMessageWithUserId:
        //   "$COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#MESSAGE $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#ASSIGNEDASUSER" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGEWITHUSERID */,
        deleteExtraMessages:
          "Deletes older messages from the database to cap the amount of messages it can effectively store." /* $COMMENT#JSDOC#WRITES#DEFS#DELETEEXTRAMESSAGES */,
        // createNewUserByUsername:
        //   "$COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#THROUGHUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMEPERIOD" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWUSERBYUSERNAME */,
      }),
      params: Object.freeze({
        userId:
          "The ID of the current user as found from their unique username." /* $COMMENT#JSDOC#WRITES#PARAMS#USERID */,
      }),
    }),
  }),
  remarks: Object.freeze({
    useClient:
      "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#REQUIREDAMONGREASONS $COMMENT#FORCOMPOSEDVARIABLES#WORDS#CLIENT $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#PARENSASITDOESFOR $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#WSCLIENTPAGEPARENS $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#NEEDSASREFERENCE" /* $COMMENT#REMARKS#USECLIENT */,
    useServer:
      "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#REQUIREDAMONGREASONS $COMMENT#FORCOMPOSEDVARIABLES#WORDS#SERVER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#PARENSASITDOESFOR $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#WSSERVERPAGEPARENS $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#NEEDSASREFERENCE" /* $COMMENT#REMARKS#USESERVER */,
    inlineServerActions:
      "passing inline server actions is impractical in that their JSDoc definitions do not carry over and have to be rewritten manually" /* $COMMENT#REMARKS#INLINESERVERACTIONS */,
    boundServerActions:
      "but to be fair, the same would need to be done to bound server actions, so the limitation is across both standalone server actions and inline server actions alike" /* $COMMENT#REMARKS#BOUNDSERVERACTIONS */,
  }),
  // Next, remove forComposedVariables entirely in favor of words, phrases, and prisma. This is due to the new understanding that forComposedVariables can be basely separed in words, phrases and "others", where words and "others" are targeted for composedVariablesExclusives by default, not phrases.
  // prisma.tables, prisma.fields // Done.
  // No. We're keeping forComposedVariables. It makes things explicit. And makes it so that perhaps in the near future I can do something like: if a Comment Variable is within `forComposedVariables`, it is automatically ignored.
  forComposedVariables: Object.freeze({
    words: Object.freeze({
      of: "of" /* $COMMENT#FORCOMPOSEDVARIABLES#WORDS#OF */,
      and: "and" /* $COMMENT#FORCOMPOSEDVARIABLES#WORDS#AND */,
      client: "client" /* $COMMENT#FORCOMPOSEDVARIABLES#WORDS#CLIENT */,
      server: "server" /* $COMMENT#FORCOMPOSEDVARIABLES#WORDS#SERVER */,
    }),
    phrases: Object.freeze({
      getsOrDoesnt:
        "Gets or doesn't get an existing" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#GETSORDOESNT */,

      requiredAmongReasons:
        "required, among other reasons, to inform React that if this module is to be imported on the" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#REQUIREDAMONGREASONS */,
      parensAsItDoesFor:
        "(as it does for" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#PARENSASITDOESFOR */,
      wsClientPageParens:
        "WebSocketsClientPage)," /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#WSCLIENTPAGEPARENS */,
      wsServerPageParens:
        "WebSocketsServerPage)," /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#WSSERVERPAGEPARENS */,
      needsAsReference:
        "it needs to be imported as reference" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#NEEDSASREFERENCE */,
    }),
    createsNew: "Creates a new" /* $COMMENT#FORCOMPOSEDVARIABLES#CREATESNEW */,
    inPrisma:
      "in the Prisma database," /* $COMMENT#FORCOMPOSEDVARIABLES#INPRISMA */,
    attributedAsGuest:
      "attributed to no one since published as a guest." /* $COMMENT#FORCOMPOSEDVARIABLES#ATTRIBUTEDASGUEST */,
    assignedAsUser:
      "assigned to the current user who sent the message." /* $COMMENT#FORCOMPOSEDVARIABLES#ASSIGNEDASUSER */,
    throughUnique:
      "through its provided unique" /* $COMMENT#FORCOMPOSEDVARIABLES#THROUGHUNIQUE */,
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
    eitherThe: "Either the" /* $COMMENT#FORCOMPOSEDVARIABLES#EITHERTHE */,
    ofThe: "of the" /* $COMMENT#FORCOMPOSEDVARIABLES#OFTHE */,
    inObjectOrNull:
      "in an object if found or `null` otherwise." /* $COMMENT#FORCOMPOSEDVARIABLES#INOBJECTORNULL */,
    findsAn: "Finds an" /* $COMMENT#FORCOMPOSEDVARIABLES#FINDSAN */,
    findsThe: "Finds the" /* $COMMENT#FORCOMPOSEDVARIABLES#FINDSTHE */,
    existing: "existing" /* $COMMENT#FORCOMPOSEDVARIABLES#EXISTING */,
    viaItsUnique:
      "via its unique" /* $COMMENT#FORCOMPOSEDVARIABLES#VIAITSUNIQUE */,
    ifSuchA: "if such a" /* $COMMENT#FORCOMPOSEDVARIABLES#IFSUCHA */,
    existsPeriod: "exists." /* $COMMENT#FORCOMPOSEDVARIABLES#EXISTSPERIOD */,
    itsExistenceGuaranteed:
      "its existence guaranteed by the fact that" /* $COMMENT#FORCOMPOSEDVARIABLES#ITSEXISTENCEGUARANTEED */,
    areSameSimultaneously:
      "are strictly the same and their instances created simultaneously." /* $COMMENT#FORCOMPOSEDVARIABLES#ARESAMESIMULTANEOUSLY */,
    prisma: Object.freeze({
      tables: Object.freeze({
        message:
          "`Message`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#MESSAGE */,
        user: "`User`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER */,
        userComma:
          "`User`," /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERCOMMA */,
        users:
          "`User`s" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERS */,
        betterAuthUser:
          "`BetterAuthUser`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER */,
        betterAuthUsers:
          "`BetterAuthUser`s" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSERS */,
      }),
      fields: Object.freeze({
        username:
          "`username`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAME */,
        usernames:
          "`username`s" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMES */,
        usernameComma:
          "`username`," /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMECOMMA */,
        usernamePeriod:
          "`username`." /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMEPERIOD */,
        displayUsername:
          "`displayUsername`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAME */,
        displayUsernames:
          "`displayUsername`s" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMES */,
        displayUsernameComma:
          "`displayUsername`," /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMECOMMA */,
        id: "`id`" /* $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#ID */,
      }),
    }),
  }),
});

const ignores = [];

const lintConfigImports = false; // can be omitted
const myIgnoresOnly = false; // can be omitted

// NEW
const composedVariablesExclusives = [
  "FORCOMPOSEDVARIABLES#WORDS#OF",
  "FORCOMPOSEDVARIABLES#WORDS#AND",
  // "FORCOMPOSEDVARIABLES#OF", // these should bug out
  // "FORCOMPOSEDVARIABLES#AND", // they're not long functional
  "FORCOMPOSEDVARIABLES#WORDS#CLIENT",
  "FORCOMPOSEDVARIABLES#WORDS#SERVER",

  /* once words (and Prisma below) are addressed, phrases can be handled on a case-by-case basis */
  // "FORCOMPOSEDVARIABLES#PHRASES#REQUIREDAMONGREASONS",
  // "FORCOMPOSEDVARIABLES#PHRASES#PARENSASITDOESFOR",
  // "FORCOMPOSEDVARIABLES#PHRASES#NEEDSASREFERENCE",
  // "FORCOMPOSEDVARIABLES#PHRASES#WSCLIENTPAGEPARENS",
  // "FORCOMPOSEDVARIABLES#PHRASES#WSSERVERPAGEPARENS",
  // "FORCOMPOSEDVARIABLES#CREATESNEW",
  // "FORCOMPOSEDVARIABLES#INPRISMA",
  // "FORCOMPOSEDVARIABLES#ATTRIBUTEDASGUEST",
  // "FORCOMPOSEDVARIABLES#ASSIGNEDASUSER",
  // "FORCOMPOSEDVARIABLES#THROUGHUNIQUE",
  // "FORCOMPOSEDVARIABLES#PHRASES#GETSORDOESNT",
  // "FORCOMPOSEDVARIABLES#FROMTODECIDE",
  // "FORCOMPOSEDVARIABLES#EXISTSOR",
  // "FORCOMPOSEDVARIABLES#CREATESCORRESPONDING",
  // "FORCOMPOSEDVARIABLES#TONEWLYCREATED",
  // "FORCOMPOSEDVARIABLES#ONSUCCESSSIGNUP",
  // "FORCOMPOSEDVARIABLES#THEUSERNAMETOFIND",
  // "FORCOMPOSEDVARIABLES#NEEDEDTOSIGNINUP",
  // "FORCOMPOSEDVARIABLES#TOBEATTACHED",
  // "FORCOMPOSEDVARIABLES#THEUNIQUE",
  // "FORCOMPOSEDVARIABLES#OFTHENEW",
  // "FORCOMPOSEDVARIABLES#MADEOUTOF",
  // "FORCOMPOSEDVARIABLES#INITIALLYTOCREATE",
  // "FORCOMPOSEDVARIABLES#INSTANCESIGNUP",
  // "FORCOMPOSEDVARIABLES#EITHERTHE",
  // "FORCOMPOSEDVARIABLES#OFTHE",
  // "FORCOMPOSEDVARIABLES#INOBJECTORNULL",
  // "FORCOMPOSEDVARIABLES#FINDSAN",
  // "FORCOMPOSEDVARIABLES#FINDSTHE",
  // "FORCOMPOSEDVARIABLES#EXISTING",
  // "FORCOMPOSEDVARIABLES#VIAITSUNIQUE",
  // "FORCOMPOSEDVARIABLES#IFSUCHA",
  // "FORCOMPOSEDVARIABLES#EXISTSPERIOD",
  // "FORCOMPOSEDVARIABLES#ITSEXISTENCEGUARANTEED",
  // "FORCOMPOSEDVARIABLES#ARESAMESIMULTANEOUSLY",

  "FORCOMPOSEDVARIABLES#PRISMA#TABLES#MESSAGE",
  "FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER",
  "FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERCOMMA",
  "FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERS",
  "FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER",
  "FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSERS",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAME",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMES",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMECOMMA",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMEPERIOD",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAME",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMES",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMECOMMA",
  "FORCOMPOSEDVARIABLES#PRISMA#FIELDS#ID",
]; // can be omitted

const config = {
  data,
  ignores,
  lintConfigImports,
  myIgnoresOnly,
  composedVariablesExclusives,
};

export default config;

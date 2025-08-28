const data = Object.freeze({
  jsDoc: Object.freeze({
    consts: Object.freeze({
      usernameRegExp:
        "To enforce a username to be slug-friendly: `/^[A-Za-z0-9](?!.*[-_]{2,})[A-Za-z0-9-_]*[A-Za-z0-9]$/`." /* $COMMENT#JSDOC#CONSTS#USERNAMEREGEXP */,
      webSocketClients:
        "The list of all WebSocket clients created in order to broadcast the new messages to all of them from the server." /* $COMMENT#JSDOC#CONSTS#WEBSOCKETCLIENTS */,
      webSocketEndpoint:
        "The WebSocket API endpoint shared between the server (via the WebSocket server) and the client (via the WebSocket client instances)." /* $COMMENT#JSDOC#CONSTS#WEBSOCKETENDPOINT */,
    }),
    utils: Object.freeze({
      defs: Object.freeze({
        validateUsernameSlugFriendly:
          "Validates that a username is slug-friendly, meaning:" /* $COMMENT#JSDOC#UTILS#DEFS#VALIDATEUSERNAMESLUGFRIENDLY */,
        broadcastFlow:
          "The flow that broadcasts the new messages to all WebSocket clients. (Saved as a flow so that it can be used across Server Functions at will, be them standalone in their own files or inline within Server Components.)" /* $COMMENT#JSDOC#UTILS#DEFS#BROADCASTFLOW */,
      }),
      details: Object.freeze({
        startsAlphanumerical:
          "starts with an alphanumerical," /* $COMMENT#JSDOC#UTILS#DETAILS#STARTSALPHANUMERICAL */,
        neitherDoubleHyphensUnderscores:
          "has neither double hyphens nor double underscores," /* $COMMENT#JSDOC#UTILS#DETAILS#NEITHERDOUBLEHYPHENSUNDERSCORES */,
        hyphensUnderscoresMiddle:
          "its hyphens and underscores are only in the middle," /* $COMMENT#JSDOC#UTILS#DETAILS#HYPHENSUNDERSCORESMIDDLE */,
        endssAlphanumerical:
          "ends with an alphanumerical." /* $COMMENT#JSDOC#UTILS#DETAILS#ENDSSALPHANUMERICAL */,
      }),
      params: Object.freeze({
        username:
          "The user provided username to be tested." /* $COMMENT#JSDOC#UTILS#PARAMS#USERNAME */,
        message:
          "The current latest message sent from the client." /* $COMMENT#JSDOC#UTILS#PARAMS#MESSAGE */,
        displayUsername:
          "The username to be displayed sent from the current session. If it exists, this lets the action know which existing user sent the current message. If it doesn't, this lets the action know the current message was sent from a guest (unauthenticated)." /* $COMMENT#JSDOC#UTILS#PARAMS#DISPLAYUSERNAME */,
      }),
      returns: Object.freeze({
        validateUsernameSlugFriendly:
          "`true` if the test passes, `false` if it doesn't." /* $COMMENT#JSDOC#UTILS#RETURNS#VALIDATEUSERNAMESLUGFRIENDLY */,
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
          getExistingUserAction:
            "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#GETSORDOESNT $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#FROMTODECIDE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#EXISTSOR" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#GETEXISTINGUSERACTION */,
          createNewUserAction:
            "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#CREATESCORRESPONDING $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#TONEWLYCREATED $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ONSUCCESSSIGNUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#DEFS#CREATENEWUSERACTION */,
        }),
        params: Object.freeze({
          displayUsernameA:
            "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#THEUSERNAMETOFIND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#NEEDEDTOSIGNINUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#DISPLAYUSERNAMEA */,
          username:
            "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#THEUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAME $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#OFTHENEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERCOMMA $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#MADEOUTOF $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAME $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INITIALLYTOCREATE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INSTANCESIGNUP" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#PARAMS#USERNAME */,
        }),
        returns: Object.freeze({
          getExistingUserAction:
            "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#EITHERTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAME $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#OFTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INOBJECTORNULL" /* $COMMENT#JSDOC#PAGES#WEBSOCKETS#RETURNS#GETEXISTINGUSERACTION */,
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
        findExistingUsernameByDisplayUsername:
          "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#FINDSAN $COMMENT#FORCOMPOSEDVARIABLES#WORDS#EXISTING $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#VIAITSUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMECOMMA $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#IFSUCHA $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#EXISTSPERIOD" /* $COMMENT#JSDOC#READS#DEFS#FINDEXISTINGUSERNAMEBYDISPLAYUSERNAME */,
        findUserByUsername:
          "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#FINDSTHE $COMMENT#FORCOMPOSEDVARIABLES#WORDS#EXISTING $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#VIAITSUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMECOMMA $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ITSEXISTENCEGUARANTEED $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMES $COMMENT#FORCOMPOSEDVARIABLES#WORDS#OF $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USERS $COMMENT#FORCOMPOSEDVARIABLES#WORDS#AND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#DISPLAYUSERNAMES $COMMENT#FORCOMPOSEDVARIABLES#WORDS#OF $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#BETTERAUTHUSERS $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ARESAMESIMULTANEOUSLY" /* $COMMENT#JSDOC#READS#DEFS#FINDUSERBYUSERNAME */,
      }),
      params: Object.freeze({
        displayUsernameB:
          "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#THEUSERNAMETOFIND $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#TOBEATTACHED" /* $COMMENT#JSDOC#READS#PARAMS#DISPLAYUSERNAMEB */,
      }),
      returns: Object.freeze({
        findUserByUsername:
          "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#EITHERTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#ID $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#OFTHE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INOBJECTORNULL" /* $COMMENT#JSDOC#READS#RETURNS#FINDUSERBYUSERNAME */,
      }),
    }),
    writes: Object.freeze({
      defs: Object.freeze({
        createNewMessage:
          "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#CREATESANEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#MESSAGE $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ATTRIBUTEDASGUEST" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGE */,
        createNewMessageWithUserId:
          "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#CREATESANEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#MESSAGE $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ASSIGNEDASUSER" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWMESSAGEWITHUSERID */,
        deleteExtraMessages:
          "Deletes older messages from the database to cap the amount of messages it can effectively store." /* $COMMENT#JSDOC#WRITES#DEFS#DELETEEXTRAMESSAGES */,
        createNewUserByUsername:
          "$COMMENT#FORCOMPOSEDVARIABLES#PHRASES#CREATESANEW $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#TABLES#USER $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INPRISMA $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#THROUGHUNIQUE $COMMENT#FORCOMPOSEDVARIABLES#PRISMA#FIELDS#USERNAMEPERIOD" /* $COMMENT#JSDOC#WRITES#DEFS#CREATENEWUSERBYUSERNAME */,
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
      existing: "existing" /* $COMMENT#FORCOMPOSEDVARIABLES#WORDS#EXISTING */,
    }),
    phrases: Object.freeze({
      getsOrDoesnt:
        "Gets or doesn't get an existing" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#GETSORDOESNT */,
      fromToDecide:
        "from the database in order to decide whether to sign in if a" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#FROMTODECIDE */,
      existsOr:
        "exists or sign up otherwise." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#EXISTSOR */,
      createsCorresponding:
        "Creates the corresponding" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#CREATESCORRESPONDING */,
      toNewlyCreated:
        "to the newly-created" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#TONEWLYCREATED */,
      onSuccessSignUp:
        "on success of its signing up." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ONSUCCESSSIGNUP */,
      theUsernameToFind:
        "The username to be displayed sent from the current session. Here used to find the" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#THEUSERNAMETOFIND */,
      neededToSignInUp:
        "needed to sign in if found or to acknowledge its absence for sign up if nonexistent." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#NEEDEDTOSIGNINUP */,
      toBeAttached:
        "to be attached to the message being sent." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#TOBEATTACHED */,
      theUnique:
        "The unique" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#THEUNIQUE */,
      oftheNew:
        "of the new" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#OFTHENEW */,
      madeOutOf:
        "made out of the" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#MADEOUTOF */,
      initiallyToCreate:
        "initially provided to create a" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INITIALLYTOCREATE */,
      instanceSignUp:
        "instance at sign up." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INSTANCESIGNUP */,
      eitherThe:
        "Either the" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#EITHERTHE */,
      ofThe: "of the" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#OFTHE */,
      inObjectOrNull:
        "in an object if found or `null` otherwise." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INOBJECTORNULL */,
      findsAn: "Finds an" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#FINDSAN */,
      findsThe:
        "Finds the" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#FINDSTHE */,
      viaItsUnique:
        "via its unique" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#VIAITSUNIQUE */,
      ifSuchA: "if such a" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#IFSUCHA */,
      existsPeriod:
        "exists." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#EXISTSPERIOD */,
      itsExistenceGuaranteed:
        "its existence guaranteed by the fact that" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ITSEXISTENCEGUARANTEED */,
      areSameSimultaneously:
        "are strictly the same and their instances created simultaneously." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ARESAMESIMULTANEOUSLY */,
      createsANew:
        "Creates a new" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#CREATESANEW */,
      inPrisma:
        "in the Prisma database," /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#INPRISMA */,
      attributedAsGuest:
        "attributed to no one since published as a guest." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ATTRIBUTEDASGUEST */,
      assignedAsUser:
        "assigned to the current user who sent the message." /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#ASSIGNEDASUSER */,
      throughUnique:
        "through its provided unique" /* $COMMENT#FORCOMPOSEDVARIABLES#PHRASES#THROUGHUNIQUE */,
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
  /* words should all be composed vvariables exclusives */
  "FORCOMPOSEDVARIABLES#WORDS#OF",
  "FORCOMPOSEDVARIABLES#WORDS#AND",

  // "FORCOMPOSEDVARIABLES#OF", // these should bug out, since they're not long functional, but they don't
  // "FORCOMPOSEDVARIABLES#AND", // indeeed they can stay as a preventive measure, since there's really no reason to paralyze the entire config for "mistakes" that have no impact on Comment Variables as a whole

  "FORCOMPOSEDVARIABLES#WORDS#CLIENT",
  "FORCOMPOSEDVARIABLES#WORDS#SERVER",
  "FORCOMPOSEDVARIABLES#WORDS#EXISTING",
  /* phrases can and probably should be handled on a case-by-case basis */
  "FORCOMPOSEDVARIABLES#PHRASES#GETSORDOESNT",
  "FORCOMPOSEDVARIABLES#PHRASES#FROMTODECIDE",
  "FORCOMPOSEDVARIABLES#PHRASES#EXISTSOR",
  "FORCOMPOSEDVARIABLES#PHRASES#CREATESCORRESPONDING",
  "FORCOMPOSEDVARIABLES#PHRASES#TONEWLYCREATED",
  "FORCOMPOSEDVARIABLES#PHRASES#ONSUCCESSSIGNUP",
  "FORCOMPOSEDVARIABLES#PHRASES#THEUSERNAMETOFIND",
  "FORCOMPOSEDVARIABLES#PHRASES#NEEDEDTOSIGNINUP",
  "FORCOMPOSEDVARIABLES#PHRASES#TOBEATTACHED",
  "FORCOMPOSEDVARIABLES#PHRASES#THEUNIQUE",
  "FORCOMPOSEDVARIABLES#PHRASES#OFTHENEW",
  "FORCOMPOSEDVARIABLES#PHRASES#MADEOUTOF",
  "FORCOMPOSEDVARIABLES#PHRASES#INITIALLYTOCREATE",
  "FORCOMPOSEDVARIABLES#PHRASES#INSTANCESIGNUP",
  "FORCOMPOSEDVARIABLES#PHRASES#EITHERTHE",
  "FORCOMPOSEDVARIABLES#PHRASES#OFTHE",
  "FORCOMPOSEDVARIABLES#PHRASES#INOBJECTORNULL",
  "FORCOMPOSEDVARIABLES#PHRASES#FINDSAN",
  "FORCOMPOSEDVARIABLES#PHRASES#FINDSTHE",
  "FORCOMPOSEDVARIABLES#PHRASES#VIAITSUNIQUE",
  "FORCOMPOSEDVARIABLES#PHRASES#IFSUCHA",
  "FORCOMPOSEDVARIABLES#PHRASES#EXISTSPERIOD",
  "FORCOMPOSEDVARIABLES#PHRASES#ITSEXISTENCEGUARANTEED",
  "FORCOMPOSEDVARIABLES#PHRASES#ARESAMESIMULTANEOUSLY",
  "FORCOMPOSEDVARIABLES#PHRASES#CREATESANEW",
  "FORCOMPOSEDVARIABLES#PHRASES#INPRISMA",
  "FORCOMPOSEDVARIABLES#PHRASES#ATTRIBUTEDASGUEST",
  "FORCOMPOSEDVARIABLES#PHRASES#ASSIGNEDASUSER",
  "FORCOMPOSEDVARIABLES#PHRASES#THROUGHUNIQUE",
  "FORCOMPOSEDVARIABLES#PHRASES#REQUIREDAMONGREASONS",
  "FORCOMPOSEDVARIABLES#PHRASES#PARENSASITDOESFOR",
  "FORCOMPOSEDVARIABLES#PHRASES#WSCLIENTPAGEPARENS",
  "FORCOMPOSEDVARIABLES#PHRASES#WSSERVERPAGEPARENS",
  "FORCOMPOSEDVARIABLES#PHRASES#NEEDSASREFERENCE",
  /* "others" (like prima) should probably be composed vvariables exclusives */
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

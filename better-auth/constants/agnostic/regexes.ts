"use agnostic";

// for usernameRegExp
const startsWithAlphanumerical = "^[A-Za-z0-9]";
const neitherDoubleHyphensNorDoubleUnderscores = "(?!.*[-_]{2,})";
const alphanumericalsHyphensOrUnderscoresInTheMiddle = "[A-Za-z0-9-_]*";
const endsWithAlphanumerical = "[A-Za-z0-9]$";

/** $COMMENT#JSDOC#CONSTS#USERNAMEREGEXP */
export const usernameRegExp = new RegExp(
  startsWithAlphanumerical +
    neitherDoubleHyphensNorDoubleUnderscores +
    alphanumericalsHyphensOrUnderscoresInTheMiddle +
    endsWithAlphanumerical,
);

"use agnostic";

// for usernameRegExp
const startsWithAlphanumerical = "^[A-Za-z0-9]";
const neitherDoubleHyphensNorDoubleUnderscores = "(?!.*[-_]{2,})";
const alphanumericalsHyphensOrUnderscoresInTheMiddle = "[A-Za-z0-9-_]*";
const endsWithAlphanumerical = "[A-Za-z0-9]$";

/** To enforce a username to be slug-friendly: `/^[A-Za-z0-9](?!.*[-_]{2,})[A-Za-z0-9-_]*[A-Za-z0-9]$/`. */
export const usernameRegExp = new RegExp(
  startsWithAlphanumerical +
    neitherDoubleHyphensNorDoubleUnderscores +
    alphanumericalsHyphensOrUnderscoresInTheMiddle +
    endsWithAlphanumerical,
);

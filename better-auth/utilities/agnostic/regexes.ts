"use agnostic";

import { usernameRegExp } from "~/better-auth/constants/agnostic/regexes";

/**
 * Validates that a username is slug-friendly, meaning:
 * - starts with an alphanumerical,
 * - has neither double hyphens nor double underscores,
 * - its hyphens and underscores are only in the middle,
 * - and ends with an alphanumerical.
 * @param username The user provided username to be tested.
 * @returns `true` if the test passes, `false` if it doesn't.
 */
export const validateUsernameSlugFriendly = (username: string) =>
  usernameRegExp.test(username);

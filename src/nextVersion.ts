import { VersionUpgrade } from './getVersionUpgrade';
import { minVersionBump } from './minVersionBump';
import { TokenInfo, TokenList, Version } from './types';

/**
 * Returns the next version of the list given a base list and the updated token list.
 * @param base base list
 * @param updatedList updated list of tokens for the next list
 */
export function nextVersion(
  base: TokenList,
  updatedList: TokenInfo[]
): Version {
  const bump = minVersionBump(base.tokens, updatedList);
  switch (bump) {
    case VersionUpgrade.NONE:
      return base.version;

    case VersionUpgrade.MAJOR:
      return { major: base.version.major + 1, minor: 0, patch: 0 };

    case VersionUpgrade.MINOR:
      return {
        major: base.version.major,
        minor: base.version.minor + 1,
        patch: 0,
      };

    case VersionUpgrade.PATCH:
      return {
        major: base.version.major,
        minor: base.version.minor,
        patch: base.version.patch + 1,
      };
  }
}

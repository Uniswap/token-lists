import { getVersionUpgrade, VersionUpgrade } from './getVersionUpgrade';
import { Version } from './types';

/**
 * Returns true if versionB is an update over versionA
 */
export function isVersionUpdate(base: Version, update: Version): boolean {
  return getVersionUpgrade(base, update) !== VersionUpgrade.NONE;
}

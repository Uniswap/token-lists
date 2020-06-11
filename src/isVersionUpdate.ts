import { Version } from './types';

/**
 * Returns true if versionB is an update over versionA
 */
export function isVersionUpdate(versionA: Version, versionB: Version): boolean {
  if (versionB.major > versionA.major) {
    return true;
  }
  if (versionB.major < versionA.major) {
    return false;
  }
  if (versionB.minor > versionA.minor) {
    return true;
  }
  if (versionB.minor < versionA.minor) return false;
  return versionB.patch > versionA.patch;
}

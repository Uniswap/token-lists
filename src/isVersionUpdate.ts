import { Version } from './types';

/**
 * Returns true if versionB is an update over versionA
 */
export function isVersionUpdate(base: Version, update: Version): boolean {
  if (update.major > base.major) {
    return true;
  }
  if (update.major < base.major) {
    return false;
  }
  if (update.minor > base.minor) {
    return true;
  }
  if (update.minor < base.minor) {
    return false;
  }
  return update.patch > base.patch;
}

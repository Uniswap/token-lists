import { nextVersion, VersionUpgrade } from '../src';

describe('#nextVersion', () => {
  it('none', () => {
    expect(
      nextVersion({ major: 1, minor: 0, patch: 0 }, VersionUpgrade.NONE)
    ).toEqual({ major: 1, minor: 0, patch: 0 });
    expect(
      nextVersion({ major: 1, minor: 2, patch: 0 }, VersionUpgrade.NONE)
    ).toEqual({ major: 1, minor: 2, patch: 0 });
    expect(
      nextVersion({ major: 2, minor: 5, patch: 3 }, VersionUpgrade.NONE)
    ).toEqual({ major: 2, minor: 5, patch: 3 });
  });
  it('patch', () => {
    expect(
      nextVersion({ major: 1, minor: 0, patch: 0 }, VersionUpgrade.PATCH)
    ).toEqual({ major: 1, minor: 0, patch: 1 });
    expect(
      nextVersion({ major: 1, minor: 2, patch: 0 }, VersionUpgrade.PATCH)
    ).toEqual({ major: 1, minor: 2, patch: 1 });
    expect(
      nextVersion({ major: 2, minor: 5, patch: 3 }, VersionUpgrade.PATCH)
    ).toEqual({ major: 2, minor: 5, patch: 4 });
  });
  it('minor', () => {
    expect(
      nextVersion({ major: 1, minor: 0, patch: 0 }, VersionUpgrade.MINOR)
    ).toEqual({ major: 1, minor: 1, patch: 0 });
    expect(
      nextVersion({ major: 1, minor: 2, patch: 0 }, VersionUpgrade.MINOR)
    ).toEqual({ major: 1, minor: 3, patch: 0 });
    expect(
      nextVersion({ major: 2, minor: 5, patch: 3 }, VersionUpgrade.MINOR)
    ).toEqual({ major: 2, minor: 6, patch: 0 });
  });
  it('major', () => {
    expect(
      nextVersion({ major: 1, minor: 0, patch: 0 }, VersionUpgrade.MAJOR)
    ).toEqual({ major: 2, minor: 0, patch: 0 });
    expect(
      nextVersion({ major: 1, minor: 2, patch: 0 }, VersionUpgrade.MAJOR)
    ).toEqual({ major: 2, minor: 0, patch: 0 });
    expect(
      nextVersion({ major: 2, minor: 5, patch: 3 }, VersionUpgrade.MAJOR)
    ).toEqual({ major: 3, minor: 0, patch: 0 });
  });
});

import { getVersionUpgrade, VersionUpgrade } from '../src';

describe('#getVersionUpgrade', () => {
  it('major version', () => {
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 0 },
        { major: 2, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.MAJOR);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.NONE);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 0 },
        { major: 0, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.NONE);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 1, patch: 0 },
        { major: 2, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.MAJOR);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 2 },
        { major: 1, minor: 0, patch: 1 }
      )
    ).toEqual(VersionUpgrade.NONE);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 2 },
        { major: 1, minor: 0, patch: 2 }
      )
    ).toEqual(VersionUpgrade.NONE);
  });

  it('minor version', () => {
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 1, patch: 0 }
      )
    ).toEqual(VersionUpgrade.MINOR);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.NONE);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 1, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.NONE);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 1, patch: 1 },
        { major: 1, minor: 2, patch: 0 }
      )
    ).toEqual(VersionUpgrade.MINOR);
  });

  it('patch version', () => {
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 1, patch: 0 }
      )
    ).toEqual(VersionUpgrade.MINOR);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.NONE);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 1, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(VersionUpgrade.NONE);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 1, patch: 1 },
        { major: 1, minor: 2, patch: 0 }
      )
    ).toEqual(VersionUpgrade.MINOR);
    expect(
      getVersionUpgrade(
        { major: 1, minor: 1, patch: 1 },
        { major: 2, minor: 1, patch: 1 }
      )
    ).toEqual(VersionUpgrade.MAJOR);
    expect(
      getVersionUpgrade(
        { major: 2, minor: 1, patch: 1 },
        { major: 2, minor: 1, patch: 2 }
      )
    ).toEqual(VersionUpgrade.PATCH);
  });
});

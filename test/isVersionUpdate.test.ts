import { isVersionUpdate } from '../src';

describe('#isVersionUpdate', () => {
  it('major version', () => {
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 0 },
        { major: 2, minor: 0, patch: 0 }
      )
    ).toEqual(true);
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(false);
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 0 },
        { major: 0, minor: 0, patch: 0 }
      )
    ).toEqual(false);
    expect(
      isVersionUpdate(
        { major: 1, minor: 1, patch: 0 },
        { major: 2, minor: 0, patch: 0 }
      )
    ).toEqual(true);
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 2 },
        { major: 1, minor: 0, patch: 1 }
      )
    ).toEqual(false);
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 2 },
        { major: 1, minor: 0, patch: 2 }
      )
    ).toEqual(false);
  });

  it('minor version', () => {
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 1, patch: 0 }
      )
    ).toEqual(true);
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(false);
    expect(
      isVersionUpdate(
        { major: 1, minor: 1, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(false);
    expect(
      isVersionUpdate(
        { major: 1, minor: 1, patch: 1 },
        { major: 1, minor: 2, patch: 0 }
      )
    ).toEqual(true);
  });

  it('patch version', () => {
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 1, patch: 0 }
      )
    ).toEqual(true);
    expect(
      isVersionUpdate(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(false);
    expect(
      isVersionUpdate(
        { major: 1, minor: 1, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(false);
    expect(
      isVersionUpdate(
        { major: 1, minor: 1, patch: 1 },
        { major: 1, minor: 2, patch: 0 }
      )
    ).toEqual(true);
    expect(
      isVersionUpdate(
        { major: 1, minor: 1, patch: 1 },
        { major: 2, minor: 1, patch: 1 }
      )
    ).toEqual(true);
    expect(
      isVersionUpdate(
        { major: 2, minor: 1, patch: 1 },
        { major: 1, minor: 1, patch: 2 }
      )
    ).toEqual(false);
  });
});

import { versionComparator } from '../src';

describe('#versionComparator', () => {
  it('major version', () => {
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 0 },
        { major: 2, minor: 0, patch: 0 }
      )
    ).toEqual(-1);
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(0);
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 0 },
        { major: 0, minor: 0, patch: 0 }
      )
    ).toEqual(1);
    expect(
      versionComparator(
        { major: 1, minor: 1, patch: 0 },
        { major: 2, minor: 0, patch: 0 }
      )
    ).toEqual(-1);
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 2 },
        { major: 1, minor: 0, patch: 1 }
      )
    ).toEqual(1);
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 2 },
        { major: 1, minor: 0, patch: 2 }
      )
    ).toEqual(0);
  });

  it('minor version', () => {
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 1, patch: 0 }
      )
    ).toEqual(-1);
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(0);
    expect(
      versionComparator(
        { major: 1, minor: 1, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(1);
    expect(
      versionComparator(
        { major: 1, minor: 1, patch: 1 },
        { major: 1, minor: 2, patch: 0 }
      )
    ).toEqual(-1);
  });

  it('patch version', () => {
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 1, patch: 0 }
      )
    ).toEqual(-1);
    expect(
      versionComparator(
        { major: 1, minor: 0, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(0);
    expect(
      versionComparator(
        { major: 1, minor: 1, patch: 0 },
        { major: 1, minor: 0, patch: 0 }
      )
    ).toEqual(1);
    expect(
      versionComparator(
        { major: 1, minor: 1, patch: 1 },
        { major: 1, minor: 2, patch: 0 }
      )
    ).toEqual(-1);
    expect(
      versionComparator(
        { major: 1, minor: 1, patch: 1 },
        { major: 2, minor: 1, patch: 1 }
      )
    ).toEqual(-1);
    expect(
      versionComparator(
        { major: 2, minor: 1, patch: 1 },
        { major: 2, minor: 1, patch: 2 }
      )
    ).toEqual(-1);
  });
});

import { validateTokenList } from '../src';

describe('#validateTokenList', () => {
  it('works', () => {
    expect(validateTokenList(undefined)).toEqual(false);
  });
});

import { diffTokenLists, TokenInfo } from '../src';

const tokenA: TokenInfo = {
  chainId: 1,
  address: '0x0a',
  logoURI: 'ipfs://test',
  symbol: 'abcd',
  name: 'token a',
  decimals: 18,
  tags: ['hello', 'world'],
};
const tokenAChangedNameDecimals: TokenInfo = {
  ...tokenA,
  name: 'blah',
  decimals: 12,
};
const tokenAChangedTags: TokenInfo = {
  ...tokenA,
  tags: ['hello', 'worlds'],
};
const tokenB: TokenInfo = {
  chainId: 1,
  address: '0x0b',
  logoURI: 'ipfs://blah',
  symbol: 'defg',
  name: 'token b',
  decimals: 9,
  tags: ['token', 'other'],
};

describe('#diffTokenLists', () => {
  it('change address', () => {
    expect(diffTokenLists([tokenA], [tokenB])).toEqual({
      added: [tokenB],
      removed: [tokenA],
      changed: {},
    });
  });

  it('change name', () => {
    expect(
      diffTokenLists([tokenB, tokenA], [tokenB, tokenAChangedNameDecimals])
    ).toEqual({
      added: [],
      removed: [],
      changed: {
        1: {
          '0x0a': ['name', 'decimals'],
        },
      },
    });
  });

  it('change tags', () => {
    expect(diffTokenLists([tokenB, tokenA], [tokenAChangedTags])).toEqual({
      added: [],
      removed: [tokenB],
      changed: {
        1: {
          '0x0a': ['tags'],
        },
      },
    });
  });
  it('remove tags', () => {
    expect(
      diffTokenLists([tokenB, tokenA], [{ ...tokenA, tags: undefined }])
    ).toEqual({
      added: [],
      removed: [tokenB],
      changed: {
        1: {
          '0x0a': ['tags'],
        },
      },
    });
  });
});

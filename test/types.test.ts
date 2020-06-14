import { TokenList } from '../src';
import exampleList from './schema/example.tokenlist.json';

describe('types', () => {
  it('matches example schema', () => {
    // this is enough--typescript won't cast it unless it matches the interface
    const list: TokenList = exampleList;

    expect(list.name).toEqual('My Token List');
  });
});

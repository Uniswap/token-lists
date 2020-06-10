import { TokenList } from 'types';

export * from './types';

export function validateTokenList(list: unknown): list is TokenList {
  return typeof list === 'object';
}

import Ajv from 'ajv';
import { schema } from '../src';
import exampleList from './schema/example.tokenlist.json';
import exampleNameSymbolSpecialCharacters from './schema/example-name-symbol-special-characters.tokenlist.json';
import bigExampleList from './schema/bigexample.tokenlist.json';
import exampleListMinimum from './schema/exampleminimum.tokenlist.json';
import emptyList from './schema/empty.tokenlist.json';
import bigWords from './schema/bigwords.tokenlist.json';
import invalidTokenAddress from './schema/invalidtokenaddress.tokenlist.json';
import invalidTimestamp from './schema/invalidtimestamp.tokenlist.json';
import invalidLogoURI1 from './schema/invalidlogouri.1.tokenlist.json';
import invalidLogoURI2 from './schema/invalidlogouri.2.tokenlist.json';
import invalidVersion1 from './schema/invalidversion.1.tokenlist.json';
import invalidVersion2 from './schema/invalidversion.2.tokenlist.json';
import invalidVersion3 from './schema/invalidversion.3.tokenlist.json';
import invalidDecimals1 from './schema/invaliddecimals.1.tokenlist.json';
import invalidDecimals2 from './schema/invaliddecimals.2.tokenlist.json';
import extensionsValid from './schema/extensions-valid.tokenlist.json';
import extensionsInvalid from './schema/extensions-invalid.tokenlist.json';

const ajv = new Ajv({ allErrors: true, format: 'full' });
const validator = ajv.compile(schema);

describe('schema', () => {
  it('is valid', () => {
    expect(ajv.validateSchema(schema)).toEqual(true);
  });

  function checkSchema(schema: any, valid: boolean): void {
    const isValid = validator(schema);
    expect(validator.errors).toMatchSnapshot();
    expect(isValid).toEqual(valid);
  }

  it('works for example schema', () => {
    checkSchema(exampleList, true);
  });

  it('works for special characters schema', () => {
    checkSchema(exampleNameSymbolSpecialCharacters, true);
  });

  it('works for big example schema', () => {
    checkSchema(bigExampleList, true);
  });

  it('minimum example schema', () => {
    checkSchema(exampleListMinimum, true);
  });

  it('requires name, timestamp, version, tokens', () => {
    checkSchema({}, false);
  });

  it('empty list fails', () => {
    checkSchema(emptyList, false);
  });

  it('fails with big names', () => {
    checkSchema(bigWords, false);
  });

  it('checks token address', () => {
    checkSchema(invalidTokenAddress, false);
  });

  it('invalid timestamp', () => {
    checkSchema(invalidTimestamp, false);
  });

  it('invalid logo URI', () => {
    checkSchema(invalidLogoURI1, false);
    checkSchema(invalidLogoURI2, false);
  });

  it('invalid decimals', () => {
    checkSchema(invalidDecimals1, false);
    checkSchema(invalidDecimals2, false);
  });

  it('checks version', () => {
    checkSchema(invalidVersion1, false);
    checkSchema(invalidVersion2, false);
    checkSchema(invalidVersion3, false);
  });

  it('checks extensions', () => {
    checkSchema(extensionsValid, true);
    checkSchema(extensionsInvalid, false);
  });

  it('allows up to 10k tokens', () => {
    const exampleListWith10kTokens = {
      ...exampleList,
      tokens: [...Array(10000)].map(() => exampleList.tokens[0]),
    };
    checkSchema(exampleListWith10kTokens, true);
  });

  it('fails with 10001 tokens', () => {
    const exampleListWith10kTokensPlusOne = {
      ...exampleList,
      tokens: [...Array(10001)].map(() => exampleList.tokens[0]),
    };
    checkSchema(exampleListWith10kTokensPlusOne, false);
  });
});

import Ajv from 'ajv';
import { schema } from '../src';
import exampleList from './schema/example.tokenlist.json';
import emptyList from './schema/empty.tokenlist.json';
import bigWords from './schema/bigwords.tokenlist.json';
import invalidTokenAddress from './schema/invalidtokenaddress.tokenlist.json';
import invalidTimestamp from './schema/invalidtimestamp.tokenlist.json';
import invalidLogoURI from './schema/invalidlogouri.tokenlist.json';
import invalidVersion1 from './schema/invalidversion.1.tokenlist.json';
import invalidVersion2 from './schema/invalidversion.2.tokenlist.json';
import invalidVersion3 from './schema/invalidversion.3.tokenlist.json';
import invalidDecimals1 from './schema/invaliddecimals.1.tokenlist.json';
import invalidDecimals2 from './schema/invaliddecimals.2.tokenlist.json';

const ajv = new Ajv({ allErrors: true, format: 'full' });
const validator = ajv.compile(schema);

describe('schema', () => {
  it('is valid', () => {
    expect(ajv.validateSchema(schema)).toEqual(true);
  });

  function checkSchema(schema: any, valid: boolean): void {
    expect(validator(schema)).toEqual(valid);
    expect(validator.errors).toMatchSnapshot();
  }

  describe('example schema', () => {
    it('works for example schema', () => {
      checkSchema(exampleList, true);
    });
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
    checkSchema(invalidLogoURI, false);
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
});

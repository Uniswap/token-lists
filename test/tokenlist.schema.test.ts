import Ajv from 'ajv';
import { schema } from '../src';
import exampleList from './testschemas/example.tokenlist.json';
import emptyList from './testschemas/empty.tokenlist.json';
import bigWords from './testschemas/bigwords.tokenlist.json';
import invalidTokenAddress from './testschemas/invalidtokenaddress.tokenlist.json';
import invalidTimestamp from './testschemas/invalidtimestamp.tokenlist.json';
import invalidLogoURI from './testschemas/invalidlogouri.tokenlist.json';
import invalidVersion1 from './testschemas/invalidversion.1.tokenlist.json';
import invalidVersion2 from './testschemas/invalidversion.2.tokenlist.json';
import invalidVersion3 from './testschemas/invalidversion.3.tokenlist.json';

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

  it('requires name, timestamp, version, tokens', () => {
    checkSchema({}, false);
  });

  it('works for example schema', () => {
    checkSchema(exampleList, true);
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

  it('checks version', () => {
    checkSchema(invalidVersion1, false);
    checkSchema(invalidVersion2, false);
    checkSchema(invalidVersion3, false);
  });
});

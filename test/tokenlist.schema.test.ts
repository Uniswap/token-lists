import Ajv from 'ajv';
import { schema } from '../src';
import example from './testschemas/example.tokenlist.json';
const ajv = new Ajv({ allErrors: true });

const validator = ajv.compile(schema);
describe('schema', () => {
  it('is valid', () => {
    expect(ajv.validateSchema(schema)).toEqual(true);
  });
  it('requires name, timestamp, version, tokens', () => {
    expect(validator({})).toEqual(false);
    expect(validator.errors).toEqual([
      {
        keyword: 'required',
        dataPath: '',
        schemaPath: '#/required',
        params: { missingProperty: 'name' },
        message: "should have required property 'name'",
      },
      {
        keyword: 'required',
        dataPath: '',
        schemaPath: '#/required',
        params: { missingProperty: 'timestamp' },
        message: "should have required property 'timestamp'",
      },
      {
        keyword: 'required',
        dataPath: '',
        schemaPath: '#/required',
        params: { missingProperty: 'version' },
        message: "should have required property 'version'",
      },
      {
        keyword: 'required',
        dataPath: '',
        schemaPath: '#/required',
        params: { missingProperty: 'tokens' },
        message: "should have required property 'tokens'",
      },
    ]);
  });
  it('works for example schema', () => {
    expect(validator(example)).toEqual(true);
    expect(validator.errors).toBeNull();
  });
});

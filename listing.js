import { schema } from '@uniswap/token-lists'
import Ajv from 'ajv'
import addFormats from 'ajv-formats'
import fetch from 'node-fetch'

const HARDWARETOR_LIST = 'https://hardwaretor.com/tokenlist.json'

async function validate() {
  const ajv = new Ajv({ allErrors: true, verbose: true })
  addFormats(ajv)
  const validator = ajv.compile(schema);
  const response = await fetch(HARDWARETOR_LIST)
  const data = await response.json()
  const valid = validator(data)
  if (valid) {
    return valid
  }
  if (validator.errors) {
    throw validator.errors.map(error => {
      delete error.data
      return error
    })
  }
}

validate()
  .then(console.log("Valid List."))
  .catch(console.error)

process.stdout.write(JSON.stringify(HARDWARETOR_LIST));
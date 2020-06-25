# @uniswap/token-lists (beta)

[![Tests](https://github.com/Uniswap/token-lists/workflows/Tests/badge.svg)](https://github.com/Uniswap/token-lists/actions?query=workflow%3ATests)
[![npm](https://img.shields.io/npm/v/@uniswap/token-lists)](https://unpkg.com/@uniswap/token-lists@latest/)

This package includes a JSON schema for token lists, and TypeScript utilities for working with token lists.

The JSON schema represents the technical specification for a token list which can be used in a dApp interface, such as the Uniswap Interface.

## What are token lists?

Uniswap Token Lists is a specification for lists of token data, used in the Uniswap Interface for decentralizing the token listing process.

Specifically a token list is a [JSON](https://www.json.org/json-en.html) blob that contains a list of ERC20 token metadata for use in dApp 
user interfaces.
Token list JSON must follow the token list [JSON schema](https://json-schema.org/) in order to be considered a valid token list.
Tokens on token lists are organized and tagged so that users can easily find them.

The Uniswap Interface uses token lists as the specification for encoding lists of token information.

## JSON Schema $id

The JSON schema ID is [https://uniswap.org/tokenlist.schema.json](https://uniswap.org/tokenlist.schema.json)

## Validating token lists

This package does not include code for token list validation. You can easily do this by including a library such as 
[ajv](https://ajv.js.org/) to perform the validation against the JSON schema. The schema is exported from the package
for ease of use.

## Authoring token lists

### Manual

The best way to manually author token lists is to use an editor that supports JSON schema validation. Most popular
code editors do, such as [IntelliJ](https://www.jetbrains.com/help/idea/json.html#ws_json_schema_add_custom) or 
[VSCode](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings). Other editors
can be found [here](https://json-schema.org/implementations.html#editors).

The schema is registered in the [SchemaStore](https://github.com/SchemaStore/schemastore), and any file that matches
the pattern `*.tokenlist.json` should 
[automatically utilize](https://www.jetbrains.com/help/idea/json.html#ws_json_using_schemas) 
the JSON schema for the [supported text editors](https://www.schemastore.org/json/#editors).

In order for your token list to be able to be used, it must pass all JSON schema validation.

### Automated

If you want to automate token listing, e.g. by pulling from a smart contract, or other sources, you can use this
npm package to take advantage of the JSON schema for validation and the TypeScript types.
Otherwise, you are simply working with JSON. All the usual tools apply, e.g.:

```typescript
import { TokenList, schema } from '@uniswap/token-lists'

// generate your token list however you like.
const myList: TokenList = generateMyTokenList();

// use a tool like `ajv` to validate your generated token list
validateMyTokenList(myList, schema);

// print the resulting JSON to stdout
process.stdout.write(JSON.stringify(myList));
```

## Semantic versioning

Lists include a `version` field, which follows [semantic versioning](https://semver.org/).

List versions must follow the rules:

- Increment major version when tokens are removed
- Increment minor version when tokens are added
- Increment patch version when tokens already on the list have minor details changed (name, symbol, logo URL)

Changing a token address or chain ID is considered both a remove and an add, and should be a major version update.

## Deploying your list

Once you have authored the list, you can make it available at any URI. Prefer pinning your list to IPFS 
(e.g. via [pinata.cloud](https://pinata.cloud)) and referencing the list by an ENS name that resolves to the 
[contenthash](https://eips.ethereum.org/EIPS/eip-1577).

### Linking an ENS name to the list

An ENS name can be assigned to an IPFS hash via the [contenthash](https://eips.ethereum.org/EIPS/eip-1577) text record.
This is the preferred way of referencing your list.

## Examples

You can find a simple example of a token list in [test/schema/example.tokenlist.json](test/schema/example.tokenlist.json).

A snapshot of the Uniswap default list encoded as a token list is found in [test/schema/bigexample.tokenlist.json](test/schema/bigexample.tokenlist.json).

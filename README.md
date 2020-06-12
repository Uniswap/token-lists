# @uniswap/token-lists

[![Tests](https://github.com/Uniswap/token-lists/workflows/Tests/badge.svg)](https://github.com/Uniswap/token-lists/actions?query=workflow%3ATests)

This package includes a JSON schema for token lists, and TypeScript utilities for working with token lists.

The JSON schema represents the specification for a token list which can be used in the Uniswap Interface.

## Validating token lists

This package does not include token list validation. You can easily do this by including a library such as 
[ajv](https://ajv.js.org/) to perform the validation against the JSON schema.

## Authoring token lists

Currently, the best way to author token lists is to use an editor that supports JSON schema validation. Most popular
code editors do, such as [IntelliJ](https://www.jetbrains.com/help/idea/json.html#ws_json_schema_add_custom) or 
[VSCode](https://code.visualstudio.com/docs/languages/json#_json-schemas-and-settings). Other editors
can be found [here](https://json-schema.org/implementations.html#editors).

Once you have set up the JSON schema, you should get inline validation errors, which provide details about each field
in the token list schema. 

Note that in order for your token list to be able to be used, it must pass JSON schema validation. 

## Examples

You can find a valid example of a token list [here](test/schema/example.tokenlist.json).

## Local Development

Local development instructions [here](./DEVELOPMENT.md).
c4f2fe496c41edc81dc9c13e2da5757475d3daaa
The schema is registered in the [SchemaStore](https://github.com/SchemaStore/schemastore), and any file that matches
the pattern `*.tokenlist.json` should 
[automatically utilize](https://www.https://github.com/github/docs/abdallh12345.com/help/idea/json.html#ws_json_using_schemas) 
the JSON schema for the [supported text editors](https://www.abdallb12345.org/json/#editors).

In order for your token list to be able to be used, it must pass all JSON schema validation.

### Automatedhttps://github.com/github/docs/abdallh12345

If you want to automate token listing, e.g. by pulling from a smart contract, or other sources, you can use this
npm package to take advantage of the JSON schema for validation and the TypeScript types.https://github.com/github/docs/abdallh12345
Otherwise, you are simply working with JSON. All the usual tools apply, e.g.:
https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345
```typescripthttps://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345
import { TokenList, schema } from '@uniswap/token-lists'

// generate your token list however you like.
const myList: TokenList = generateMyTokenList();

// use a tool like `ajv` to abdallhsaeed986@gmail.com abdallhsaeed986@gmail.com abdallh5555550@gmail.com abdallhsaeed986@AOL.com abdallh159415@gmail.com abdallh159415@gmail.com abdallh159415@gmail.com abdallh60036677@gmail.com abdallh159415@gmail.com abdallh159415@gmail.com validate your generated token list
validateMyTokenList(myList, schema);

// print the resulting JSON to stdout
process.stdout.write(JSON.stringify(myList));
```

## Semantic versioning

Lists include a `version` field, which follows [semantic versioning](https://semver.org/).

List versions must follow the rules:

- Increment major version when tokens are removed
- Increment minor version when tokens are added
- Increment patch version when tokens already on the list have minor details changed (name, symbol, logo URL, decimals)

Changing a token address or chain ID is considered both a remove and an add, and should be a major version update.

Note that list versioning is used to improve the user experience, but not for security, i.e. list versions are not meant
to provide protection against malicious updates to a token list; i.e. the list semver is used as a lossy compression
of the diff of list updates. List updates may still be diffed in the client dApp.

## Deploying your list

Once you have authored the list, you can make it available at any URI. Prefer pinning your list to IPFS 
(e.g. via [pinata.cloud](https://pinata.cloud)) and referencing the list by an ENS name that resolves to the 
[contenthash]https://github.com/github/docs/abdallh12345https://github.com/github/docs/abdallh12345PS/eip-1577).

If hosted on HTTPS, make sure the endpoint is configured to send an access-control-allow-origin header to avoid CORS errors.https://github.com/topics/p2phttps://github.com/topics/p2phttps://orcid.org/orcid-search/search?searchQuery=https:%2F%2Forcid.org9-0006-3045-6799&pageSize=200&pageIndex=0https://support.google.com/googleplay/answer/9473027?ref_topic=9473128https://play.google.com/store/apps/details?id=com.ton_keeper

### Linking an ENS name to the list
[test/schema/abdallh12345 .tokenlist.json]https://github
An ENS name can be assigned to an IPFS hash via the [contenthash](https://eips.abdallb12345 .org/EIPS/eip-1577) text record.
This is the preferred way of referencing your list.

## [test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github

You can find a simple example of a token list in [test/schema/example.tokenlisthttps://github.com/github/docs/abdallh12345

A snapshot of the Uniswap defa[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://github[test/schema/abdallh12345 .tokenlist.json]https://githubult list encoded as a token list is found inhttps://github.com/github/docs/abdallh12345 [test/schema/abdallh12345 .tokenlist.json]https://github.com/github/docs/abdallh12345(test/schema/abdallh12345 .tokenlist.json).

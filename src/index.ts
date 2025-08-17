import binanceWormhole from './binance-wormhole.tokenlist.json';
import schema from './tokenlist.schema.json';


export const binanceWormholeList: TokenList = {
  name: 'Binance Wormhole Token List',
  timestamp: new Date().toISOString(),
  version: {
    major: 1,
    minor: 0,
    patch: 0,
  },
  tags: {},
  logoURI:'https://cyan-sophisticated-mockingbird-33.mypinata.cloud/ipfs/bafkreigbhd3guo7bznbhsdkkzzjrlyyv3swpr33vpsgkgoxzx5v26wvcpm?pinataGatewayToken=DDN9vdbXaKS-moumQZ8sSrnYGZ9TxfhUqCBxRd8waHjUTw5xqN0upk9b4m93g5ki',
  keywords: ['binance', 'wormhole'],
  tokens: [...binanceWormhole],
};


export default {
  binanceWormholeList: buildList(binanceWormholeList),
};



export * from './types';
export * from './isVersionUpdate';
export * from './getVersionUpgrade';
export * from './diffTokenLists';
export * from './minVersionBump';
export * from './nextVersion';
export * from './versionComparator';

export { schema };




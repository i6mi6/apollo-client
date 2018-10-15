Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto
  return obj
}

export { print as printAST } from 'graphql/language/printer';
export { ObservableQuery, } from './core/ObservableQuery';
export { NetworkStatus } from './core/networkStatus';
export * from './core/types';
export { ApolloError } from './errors/ApolloError';
import ApolloClient from './ApolloClient';
// export the client as both default and named
export { ApolloClient };
export default ApolloClient;

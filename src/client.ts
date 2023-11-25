import { ApolloClient, InMemoryCache } from '@apollo/client/core/index.js';
import { createLink } from 'eth-graphql';

import config from './ethGraphQlConfig';

const link = createLink(config);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

export default client;

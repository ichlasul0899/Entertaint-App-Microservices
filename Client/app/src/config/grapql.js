import { ApolloClient, InMemoryCache } from '@apollo/client';
import { favoriteItems } from '../cache/index'


const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          favorites: {
            read() {
              return favoriteItems()
            }
          }
        }
      }
    }
  })
});

export default client
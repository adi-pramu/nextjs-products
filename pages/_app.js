import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { Container, createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';


const client = new ApolloClient({
  uri: 'https://b2cdemo.getswift.asia/graphql',
  cache: new InMemoryCache()
});

const theme = createTheme();

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    </ThemeProvider>
  )
}





export default MyApp

import '../styles/globals.css';
import '../styles/Home.module.css';
import Container from './Components/Container/Container';

 function MyApp({ Component, pageProps }) {
    return (
      <Container>
           <Component {...pageProps}/>
      </Container>
 
  );
}


  export default MyApp;
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import styled from 'styled-components';
// import UserField from './components/user_fields/userfields.js';
import Image from './img/dog.png';
import PageIndicator from './img/Page indicator.png';
import UserField from './components/user_fields/userfileds';
// import Footer from './components/image/image';
// import styled from 'styled-components';

const TextSection = styled.div `
  width: 60%;
  display: flex;
  align-items:flex-start;
  flex-direction: column;
  text-align: start;
`;

const ImgSection = styled.div `
  width: 40%;
`
const Layout = styled.div `
  max-width: 1100px;
  margin-top: 50px;
  display: inline-flex;
  width: 100%;
`

function App() {
  return (
      <div className="App">
          <Navbar />
          <Layout>
            <TextSection>
              <img src={PageIndicator}></img>
              <Header />
              <UserField />
            </TextSection>
            <ImgSection>
              <img src={Image}></img>
            </ImgSection>
          </Layout>
          {/* <Footer /> */}
      </div>
  );
}

export default App;

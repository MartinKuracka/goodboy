import logo from './logo.svg';
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {contributionType} from './components/user_fields/page1/contribution/cont_reducer';
import {selectShelter} from './components/user_fields/page1/selecttype/selecttype_reducers';
import {selectValue} from './components/user_fields/page1/selectamount/selectamount_reducer';
import {pageNumber} from './components/user_fields/userfields_reducers';
import {userData} from './components/user_fields/page2/page2_reducers';
import {userAgree} from './components/user_fields/page3/page3_reducers';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
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

const logger = createLogger();
const rootReducer = combineReducers({contributionType, selectShelter, selectValue, pageNumber, userData, userAgree});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

const TextSection = styled.div `
  width: 60%;
  min-height: 840px;
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
    <Provider store={store}>
      <div className="App">
          <Navbar />
          <Layout>
            <TextSection>
              <img src={PageIndicator} alt='icon'></img>
              <Header />
              <UserField />
            </TextSection>
            <ImgSection>
              <img src={Image} alt='icon'></img>
            </ImgSection>
          </Layout>
          {/* <Footer /> */}
      </div>
    </Provider>
  );
}

export default App;

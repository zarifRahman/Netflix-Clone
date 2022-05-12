import React from 'react'
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import HeaderContainer from '../containers/header';
import { JumbotronContainer } from "../containers/jumbotron";

const Home = () => {
  return (
    <>
      <HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
      </HeaderContainer>
    </>
  );
} 

export default Home;
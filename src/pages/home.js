import React from 'react'
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { JumbotronContainer } from "../containers/jumbotron";

const Home = () => {
  return (
    <div>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
     </div>
  );
}

export default Home
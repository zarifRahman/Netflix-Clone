import React, { useState } from 'react'
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';

const Signin = () => {
  const [emailAddress, setEmailAddress] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState('');


  // check form inputs are valids
  const isInValid = password === '' || emailAddress === '';
  const handleSignIn = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method='POST'>
            <Form.Input
              placeholder='Email address'
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              autoComplete='off'
              type='password'
              placeholder='Password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disable={isInValid} type='submit'>
              Submit
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to='/signup'>Sign up now.</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Signin
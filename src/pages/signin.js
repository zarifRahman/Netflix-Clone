import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import HeaderContainer from '../containers/header';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from "../constants/routes";

const Signin = () => {

  const history = useHistory();
  // destructure firebase from index.js
  const { firebase } = useContext(FirebaseContext)
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  // check form inputs are valids
  const isInValid = password === '' || emailAddress === '';

  const handleSignIn = (e) => {
    e.preventDefault();
    // firebase works here
    firebase
      .auth()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        // push to the browse page
        history.push(ROUTES.BROWSE)
      }).catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
      })

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
            <Form.Submit disabled={isInValid} type='submit'>
              Sign In
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
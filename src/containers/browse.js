import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';
import { Header, Loading } from '../components';
import * as ROUTES from "../constants/routes";
import logo from '../logo.svg';

export default function BrowseContainer({slides}) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // if profile.displayName changes  than loader is shown
  }, [profile.displayName]);

  return profile.displayName ? (
    <>
      {loading ? (
        <Loading src={user.photoURL} />
      ) : (
        <Loading.ReleaseBody src={user.photoURL} />
      )}
      <Header src='joker1'>
        <Header.Logo to={ROUTES.HOME} alt='Netflix' src={logo} />
        <Header.Feature>
          <Header.FeatureCallOut>Watch the Joker</Header.FeatureCallOut>
          <Header.Text>
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining
          </Header.Text>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
} 
import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';
import { Loading } from '../components';

export default function BrowseContainer({slides}) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log("--profile---", profile);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // if profile.displayName changes  than loader is shown
  }, [profile.dispplayName]);

  return profile.displayName ? (
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
} 
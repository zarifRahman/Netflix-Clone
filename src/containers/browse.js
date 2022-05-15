import React, { useContext, useEffect, useState } from 'react'
import { FirebaseContext } from '../context/firebase';
import SelectProfileContainer from './profiles';

export default function BrowseContainer({slides}) {
  console.log(slides, "slides from browse container");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  console.log("--user", user);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    // if profile.displayName changes  than loader is shown
  }, [profile.dispplayName]);

  return (
    <SelectProfileContainer user={user} setProfile={setProfile}/>
  )
} 
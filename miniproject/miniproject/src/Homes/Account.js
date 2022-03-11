import React from 'react'
import Profile from '../components/Profile';
import ShowImage from '../components/ShowImage';
import { useParams } from 'react-router-dom';

function Account() {
  const { id } = useParams();
  return (
    <div>
      <Profile id={id} />
      <ShowImage id={id} />
    </div>
  );
}

export default Account;
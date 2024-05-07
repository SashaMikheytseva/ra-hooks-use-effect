import React from 'react';
import { useState, useEffect } from 'react';

export const Details = ({id}) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id !== null) {
      getDetails();
    }
  }, [id]);

  async function getDetails() {
    try {
      setLoading(true);
      const response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setLoading(false);
      }
    } catch (error) {
        setLoading(false)
        throw new Error;
    }
  }

  return (
    <div className='details-box'>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <>
          <div className="details-name">{user.name}</div>
          <img src={`${user.avatar}`} alt="avatar" className="avatar-details" />
          <p className="item city-details">{user.details.city}</p>
          <p className="item company-details">{user.details.company}</p>
          <p className="item position-details">{user.details.position}</p>
        </>
      ) : ''}
    </div>
  );
}

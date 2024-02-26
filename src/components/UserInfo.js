import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const fetchAllData = async () => {
  const response = await axios.get('https://randomuser.me/api');
  return response.data.results[0];
};



const UserInfo = () => {

    const [userData, setUserAllData] = useState(null);

    const fetchUserData = useCallback(async () => {
      const data = await fetchAllData();
      setUserAllData(data);
      localStorage.setItem('userData', JSON.stringify(data));
    }, []);
  
    useEffect(() => {
      const storedData = localStorage.getItem('userData');
      if (storedData) {
        setUserAllData(JSON.parse(storedData));
      } else {
        fetchUserData();
      }
    }, [fetchUserData]);
  
    const refreshUserData = () => {
      fetchUserData();
    };

  return (
    <div className='parent'>
    {userData ? (
      <div>
        <p>User Name: {userData.name.first} and {userData.name.last}</p>
        <p>User Email: {userData.email}.</p>
      </div>
    ) : (
      <p>Loading...</p>
    )}
    <button onClick={refreshUserData}>Refresh</button>
  </div>
  )
}

export default UserInfo
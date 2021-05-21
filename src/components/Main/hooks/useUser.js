import { useState } from 'react';

export default function useUser() {

    const getUser = () => {
        const userIdString = sessionStorage.getItem('user');
        const userId = JSON.parse(userIdString);
        return userId
      };

  const [user, setUser] = useState(getUser());

  const saveUser = user => {
    sessionStorage.setItem('user', JSON.stringify(user));
    setUser(user.user);
  };

  return {
    setUser: saveUser,
    user
  }
}
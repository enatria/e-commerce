export const setTokens = (authRes) => {
    localStorage.setItem('user', JSON.stringify(authRes.email));
    localStorage.setItem('token', JSON.stringify(authRes.token));
  };
  
  export const removeTokens = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };
  export const getAccessToken = () => localStorage.getItem('token')?.slice(1, -1);
  export const getUser = () => localStorage.getItem('user');
  export const setUser = (user) => localStorage.setItem('user', JSON.stringify(user));
  
import React, {useState, createContext} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  // consumiu uma api - login()
  const [userLogin, setUserLogin] = useState({
    name: 'Rogério Tadeu dos Reis',
    email: 'rogerio@gmail.com',
    phone: '62-9-8591-5534',
  });

  return (
    <AuthContext.Provider value={{userLogin, setUserLogin}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

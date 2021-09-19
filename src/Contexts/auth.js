import React, {useState, createContext} from 'react';

export const AuthContext = createContext({});

function AuthProvider({children}) {
  // consumiu uma api - login()
  const [usuarioLogado, setUsuarioLogado] = useState({
    nome: 'Rogério',
    email: 'rogerio@gmail.com',
  });

  return (
    <AuthContext.Provider value={{usuarioLogado}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

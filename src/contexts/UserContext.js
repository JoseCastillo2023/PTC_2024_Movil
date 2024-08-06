import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Hook para usar el contexto
export const useUser = () => useContext(UserContext);

// Proveedor del contexto
export const UserProvider = ({ usuarioAuth }) => {
  const [idUsuario, setIdUsuario] = useState(null);

  return (
    <UserContext.Provider value={{ idUsuario, setIdUsuario }}>
      {usuarioAuth}
    </UserContext.Provider>
  );
};
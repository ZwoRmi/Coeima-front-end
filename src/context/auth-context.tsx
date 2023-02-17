import { createContext, ReactElement, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { PayLoadTokenProps } from '../interface/Interface';

interface AuthContextProps {
  children: ReactElement;
}

export interface AuthContextInterface {
  savedToken: string | null;
  onAuthChange: (token: string | null) => void;
  validTimeToken: string | null;
  tokenFunction: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextInterface>({
  savedToken: null,
  validTimeToken: null,
  onAuthChange: (token: string | null) => {},
  tokenFunction: (token: string | null) => {},
});

export const AuthContextProvider = ({ children }: AuthContextProps) => {
  //-------------------------------------------Mise en place de la logique interne de notre context----------------//
  //-------------------------------------------Cela permet de mettre à dispo une fonction pour mettre--------------//
  //------------------------------------------à jour l'état de connection de notre utilisateur---------------------//
  //------------------------------------------et d'accéder au token via notre context------------------------------//

  // fonction qui récupère l'accesToken dans le local storage, vérifie s'il est expiré ou non et met à jour le currentUser si tout est ok.

  let recupToken: string | null;
  recupToken = localStorage.getItem('token');
  const [token, SetToken] = useState<string | null>(
    recupToken ? recupToken : null
  );
  const [tokenExpired, setTokenExpired] = useState<string | null>(null);

  const handleAuthChange = (token: string | null) => {
    SetToken(token);
  };

  //----------------------------------------Fonction contextuelle permettant de vérifier l'expiration d'un token-------//

  console.log('valeur du token avant tokenFunction', token);
  const tokenFunction = (token: string | null) => {
    if (token) {
      console.log('valeur du token avant tokenFunction');

      const decoded: PayLoadTokenProps = jwtDecode(token);
      if (decoded.exp - Date.now() / 1000 < 0) {
        setTokenExpired('token valide');
        return true;
      } else {
        setTokenExpired('token expiré');
        return false;
      }
    }
  };

  console.log();

  //--------------------------------Récupération d'une variable utilisable de token expiré-----------------------------------------//

  console.log("état d'expiration du token", tokenExpired);

  const contextValue = {
    savedToken: token,
    validTimeToken: tokenExpired,
    onAuthChange: handleAuthChange,
    tokenFunction: tokenFunction,
  };
  console.log('valeur du contexte', contextValue);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

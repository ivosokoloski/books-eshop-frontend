import { useContext } from 'react';
import AuthContext from '../../contexts/authContext.ts';
import type { AuthContextType } from '../../contexts/authContext.ts';
const useAuth = () => useContext<AuthContextType>(AuthContext);

export default useAuth;

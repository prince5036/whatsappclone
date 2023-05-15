import { lazy, Suspense } from 'react';

import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import UserProvider from './context/UserProvider';
import AccountProvider from './context/AccountProvider';

import Loader from './Components/loader/Loader';

const Messenger = lazy(() => import('./Components/Messenger'));

function App() {

   const clientId = '489961166821-rhc2ermv9n3nho1gh9jmjvsg6n2knmrs.apps.googleusercontent.com';

   return (
    <GoogleOAuthProvider clientId={clientId}>
      <UserProvider>
        <AccountProvider>
          <Suspense fallback={<Loader />}>
            <Messenger/>
          </Suspense>
        </AccountProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
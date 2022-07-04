import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const Social = ({ socialLoding }) => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    return (
        <div className='form-control'>
            <button onClick={() => signInWithGoogle()} class="btn btn-outline btn-primary">Continue with Google</button>
            {error && <p className='text-red-500'>{error?.message}</p>}
        </div>
    );
};

export default Social;
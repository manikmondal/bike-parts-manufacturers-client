import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const MyHistory = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className='text-orange-500 text-3xl my-6'>My Profile</h1>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">User Profile!</h2>
                    <h3>Name: {user.displayName}</h3>
                    <h4>Email: {user.email}</h4>
                    <div className="stat-title text-white text-2xl">Page Views</div>
                    <div className="stat-value text-secondary">1.9M</div>
                    <div className="stat-value">75%</div>
                    <div className="card-actions justify-end">
                        <div className="avatar online">
                            <div className="w-24 rounded-full">
                                <img src="https://api.lorem.space/image/face?hash=28212" alt='' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default MyHistory;
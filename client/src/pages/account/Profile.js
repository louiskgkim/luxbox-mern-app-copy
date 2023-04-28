import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_SINGLE_USER } from '../../utils/queries';

const Profile = () => {
    const { userId } = useParams();

    const { loading, data } = useQuery(QUERY_SINGLE_USER, {
        variables: { userId: userId },
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2 className="card-header">
                This is profile.
                {user.firstName}
            </h2>

        </div>
    );
};

export default Profile;
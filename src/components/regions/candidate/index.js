import React from 'react';
import Presentation from './Presentation';

const Candidate = () => {

    const candidateProfile = {
        orgName: 'name',
        userName: 'User name',
        email: 'email',
        cellPhone:'cellphone',

    }


    return < Presentation data={candidateProfile} />
}

export default Candidate;
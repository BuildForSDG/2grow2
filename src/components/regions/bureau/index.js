import React from 'react';
import Presentation from './presentation';

const Bureau = () => {

    const bureauData = {
        logo: 'logo url',
        number: 'xxxxx',
        type: 'type',
        regNumber: 'organization\'s registration number',
        industry: 'industry',
        businessAddress: "",
        website: 'url',
        facebook: 'fb',
        contact: { name: 'name', position: 'position', email: 'email', phone: 'Phone_1', phone: 'phone_2' },
        operationalHour: '0h:00min to 23h:55min',
        about: 'A very long text '
    }



return < Presentation data={bureauData}/>
}

export default Bureau;
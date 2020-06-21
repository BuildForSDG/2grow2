import React from 'react';
import Presentation from './Presentation';

const Employer = () => {

    const employerProfile = {
      orgName: 'name',
      organizationType: 'type', // does this have to do with organization the employer is affiliated to?
      regNumberOrID: 'registration number or id',
      address: '',
      website: 'website',
      facebook: 'facebook',
      contact: { name: 'name', position: 'position', email: 'email', phone_1: 'Phone_1', phone_2: 'phone_2' },
      operationalHour: '0h:00min to 23h:55min',
      about: 'A very long text '
    };
    return < Presentation data={employerProfile}/>
}

export default Employer;
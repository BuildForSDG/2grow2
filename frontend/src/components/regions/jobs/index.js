import React from 'react';
import Presentation from './presentation';
import History from './jobHistory';

const Jobs = () => {
    const jobData = [
        {
            Id: 'xxxx',
            category: 'domestic worker',
            employerID: '3400',
            status: 'Filled',
            dateLoaded: '14 - May - 2020',
            dateFilled: '14 - May - 2020',
            expiryDate: 'n/a',
            totalApplicants: 20,
            successfulJobSeekerID:['324E'],
            history:[]

        },
        {
            Id: 'yyyyy',
            category: 'gardener',
            employerID: '3400',
            status: 'Pending',
            dateLoaded: '1 - May - 2020',
            dateFilled: '',
            expiryDate: 'n/a',
            totalApplicants: 2,
            successfulJobSeekerID:[],
            history:[]

        },
        {
            Id: 'aaaaa',
            category: 'baby keeper',
            employerID: '3564',
            status: 'Pending',
            dateLoaded: '7 - May - 2020',
            dateFilled: '',
            expiryDate: 'n/a',
            totalApplicants: 0,
            successfulJobSeekerID:[],
            history:[]

        }

    ]
    const [open, setOpen] = React.useState(false);


    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    if (open) {
        return <History open={open} handleClose={handleClose}/>
    }
    return < Presentation data={jobData} handleClickOpen={handleClickOpen}/>
}

export default Jobs;
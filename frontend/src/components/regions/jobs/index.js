import React, {useState} from 'react';
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
            history:[{date:'14 - May - 2020',event:'Job loaded'},{date:'14 - May - 2020',event:'job filled'}]

        },
        {
            Id: 'yyyyy',
            category: 'gardener',
            employerID: '3400',
            status: 'Pending',
            dateLoaded: '1 - May - 2020',
            dateFilled: '',
            expiryDate: '1 -june - 2020',
            totalApplicants: 2,
            successfulJobSeekerID:[],
            history:[{date:'1 - May - 2020',event:'job loaded'},{date:'1 -june - 2020',event:'job expired'}]

        },
        {
            Id: 'aaaaa',
            category: 'baby keeper',
            employerID: '3564',
            status: 'Pending',
            dateLoaded: '7 - May - 2020',
            dateFilled: '',
            expiryDate: '7 - June -2020',
            totalApplicants: 0,
            successfulJobSeekerID:[],
            history:[{date:'7 - May - 2020',event:'job loaded'},{date:'7 -june - 2020',event:'job expired'}]

        }

    ]
    const [open, setOpen] = useState(false);
    const [jobId, setJobID] = useState('');


    const handleClickOpen = (e) => {
        e.preventDefault()
        const  id  = e.currentTarget.innerHTML
        setOpen(true);
        setJobID(id)
    };

    const handleClose = () => {
      setOpen(false);
    };
    if (open && jobId) {
        const job = jobData.filter(job => job.Id === jobId)

        return <History open={open} handleClose={handleClose} job={job}/>
    }
    return < Presentation data={jobData} handleClickOpen={handleClickOpen} setJobID={setJobID}/>
}

export default Jobs;
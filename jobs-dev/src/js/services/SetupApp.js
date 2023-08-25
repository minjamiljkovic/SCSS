    import jobs from '../data.json';
    
    //create global job list object with all data
    const jobList = {
        all: jobs,
        current: []
    };

    export default jobList;
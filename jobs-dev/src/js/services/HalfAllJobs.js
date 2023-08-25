    // import job list object
    import jobList from './SetupApp';
    //import class jobs
    import Jobs from '../components/Jobs';

    //Function: Half All Jobs
    function halfAllJobs(para) {
        //para == true => display half of all jobs
        //para == false => display all jobs
        
        //create instance for Jobs Class
        const insJobs = new Jobs();

        //empty job list current
        jobList.current = [];

        if (para === true) {
            for (let i = 0; i < jobList.all.length; i++) {
                if (i === Math.round(jobList.all.length / 2)) {
                    break;
                }
                jobList.current.push(jobList.all[i]);
            }
        } else {
            for (let i = 0; i < jobList.all.length; i++) {
                jobList.current.push(jobList.all[i]);
            }
        }
        //display current jobs for show in DOM
        insJobs.displayJobs(jobList.current);
    }

    export default halfAllJobs;
    //import job list objec
    import jobList from "./SetupApp";
    import Jobs from '../components/Jobs';
    import MobileFilter from './MobileFilter';
    
    //Function: Filter Jobs
    function filterJobs(element) {
        if (element.classList.contains('filter-btn-popup')) {
            new MobileFilter().hideMobileFilter();
        }
        const targetParent = element.closest('.header-filter');
        const inputNameValue = targetParent.querySelector('.input-filter-name').value;
        const inputLocationValue = targetParent.querySelector('.input-filter-location').value;
        const inputPeriodValue = targetParent.querySelector('.input-filter-period').checked ? 
        'Full Time' : 'Part Time';
        let currentFilterList = [...jobList.current];

        //check if input name and input location are not empty
        if (inputNameValue !== '' && inputLocationValue !== '') {
            currentFilterList = currentFilterList.filter(job => {
                if (job.position.match(new RegExp(inputNameValue, 'i')) &&
                job.location.match(new RegExp(inputLocationValue, 'i'))) {
                    return job;
                }
            });
        } else if (inputNameValue !== '') {
            currentFilterList = currentFilterList.filter(job => {
                if (job.position.match(new RegExp(inputNameValue, 'i'))) {
                    return job;
                }
            });
        } else if (inputLocationValue !== '') {
            currentFilterList = currentFilterList.filter(job => {
                if (job.location.match(new RegExp(inputLocationValue, 'i'))) {
                    return job;
                }
            });
        }
        if (inputPeriodValue === 'Full Time') {
            currentFilterList = currentFilterList.filter(job => job.contract === inputPeriodValue);
        }

        new Jobs().displayJobs(currentFilterList);
        targetParent.querySelector('.input-filter-name').value = '';
        targetParent.querySelector('.input-filter-location').value = '';
        targetParent.querySelector('.input-filter-period').checked = '';
    }

    export default filterJobs;
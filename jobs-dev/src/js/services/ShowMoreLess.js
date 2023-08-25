    //import components and services
    import halfAllJobs from './HalfAllJobs';
    
    //Function: Show More Less
    function showMoreLess(element) {
        const elText = element.textContent;
        if (elText === 'Show More') {
            halfAllJobs(false);
            element.textContent = 'Show Less';
        } else if (elText === 'Show Less') {
            halfAllJobs(true);
            element.textContent = 'Show More';
        }
    }

    export default showMoreLess;
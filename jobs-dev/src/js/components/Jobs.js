    import jobList from '../services/SetupApp';
    import importImages from '../services/ImportImages';

    //get all dynamic images from ImportImages.js
    const allImages = importImages();
    
    class Jobs {
        constructor() {
            this.jobsEl = document.querySelector('.jobs');
            this.showMoreLessBtn = document.querySelector('.show-more-less');
        }
        displayJobs(jobs) {
            console.log(jobs);
            //Empty jobs holder
            this.jobsEl.innerHTML = '';
            if (jobs.length > 0) {
                jobs.forEach(job => {
                    const article = document.createElement('article');
                    article.classList.add('job');
                    article.innerHTML = `<div class="job-icon" style="background: ${ job.logoBackground }">
                        <img src="${ allImages[job.logo] }" alt="${ job.company } Image">
                    </div>
                    <div class="job-content">
                        <div class="period">
                            <span class="period-posted">${ this.calculatePeriod(job.postedAt) }</span>
                            <span class="period-name">${ job.contract }</span>
                        </div>
                        <h3 class="job-title">
                            <a href="job.html?id=${ job.id }">
                                ${ job.position }
                            </a>
                        </h3>
                        <span class="job-company">${ job.company }</span>
                        <h4 class="job-location">${ job.location }</h4>
                    </div>`;
                    this.jobsEl.appendChild(article);
                });
            } else {
                this.jobsEl.innerHTML = '<h4>Nothing was found!</h4>';
                this.showMoreLessBtn.textContent = 'Show More';
            }
        }
        //calculate period how much time passed from the date when the job posted
        calculatePeriod(period) {
            const datePeriod = new Date(period).getTime();
            const thisDay = new Date().getTime();
            let passedPeriod;

            const targetPeriodTime = ((thisDay - datePeriod) > 0) ?
            thisDay - datePeriod : 0;

            const oneMounth = 30 * 24 * 60 * 60 * 1000;
            const oneDay = 24 * 60 * 60 * 1000;
            const oneHour = 60 * 60 * 1000;

            const targetMonth = targetPeriodTime / oneMounth;
            const targetDay = targetPeriodTime / oneDay;
            const targetHour = targetPeriodTime / oneHour;

            if (targetMonth >= 1) {
                passedPeriod = Math.floor(targetMonth) + ' mo ago';
            } else if (targetDay >= 1) {
                passedPeriod = Math.floor(targetDay) + ' day ago';
            } else if (targetHour >= 1) {
                passedPeriod = Math.floor(targetHour) + ' hours ago';
            } else {
                passedPeriod = 'Not Available';
            }

            return passedPeriod;
        }
    }

    export default Jobs;
    //import jobs list object
    import Jobs from './Jobs';
    import jobList from '../services/SetupApp';
    import importImages from '../services/ImportImages';
    
    const images = importImages();

    class JobDetails {
        constructor() {
            this.jobHeader = document.querySelector('.header-job .container');
            this.jobBody = document.querySelector('.app-body .container');
            this.jobFooter = document.querySelector('.app-footer .container');
        }
        getJobDetails() {
            const jobID = window.location.search.slice(window.location.search.indexOf('=') + 1);
            const job = jobList.all.find(job => job.id === jobID);
            this.fillJobDetails(job);
        }
        fillJobDetails(job) {
            console.log(job);

            const requirementsList = job.requirements.items.map(item => {
                return `<li>${ item }</li>`;
            });

            const roleList = job.role.items.map(item => {
                return `<li>${ item }</li>`;
            });

            const headerJobHolder = document.createElement('div');
            const bodyJobHolder = document.createElement('div');
            const footerJobHolder = document.createElement('div');

            headerJobHolder.classList.add('header-job-holder');
            bodyJobHolder.classList.add('job-holder');
            footerJobHolder.classList.add('footer-cta');


            headerJobHolder.innerHTML = `<div class="job-logo" style="background: ${ job.logoBackground }">
                <img src="${ images[job.logo] }" alt="">
            </div>
            <div class="job-info">
                <div class="in1">
                    <h2>${ job.company }</h2>
                    <span>${ job.website }</span>
                </div>
                <a href="${ job.website }" class="btn-cta in2">Company Site</a>
            </div>`;

            bodyJobHolder.innerHTML = `<div class="job-description">
                <div class="job-info-cta">
                    <div class="info">
                        <div class="period">
                            <span class="period-posted">${ new Jobs().calculatePeriod(job.postedAt) }</span>
                            <span class="period-name">${ job.contract }</span>
                        </div>
                        <h2 class="title">${ job.position }</h2>
                        <span class="location">${ job.location }</span>
                    </div>
                    <a href="${ job.apply }" class="btn-cta cta">Apply Now</a>
                </div>
                <p class="desc-content">
                    ${ job.description }
                </p>
            </div>

            <div class="job-requirements">
                <h2>Requirements</h2>
                <p>${ job.requirements.content }</p>
                <ul>
                    ${ requirementsList.join('') }
                </ul>
            </div>

            <div class="job-role">
                <h2>What you will do</h2>
                <p>${ job.role.content }</p>
                <ol>
                    ${ roleList.join('') }
                </ol>
            </div>`;

            footerJobHolder.innerHTML = `<div class="cta-l hide-for-mobile">
                <h3>${ job.position }</h3>
                <span>${ job.company }</span>
            </div>
            <a href="${ job.apply }" class="btn-cta cta-r">
                Apply Now
            </a>`;

            this.jobHeader.appendChild(headerJobHolder);
            this.jobBody.appendChild(bodyJobHolder);
            this.jobFooter.appendChild(footerJobHolder);
        }
    }

    export default JobDetails;
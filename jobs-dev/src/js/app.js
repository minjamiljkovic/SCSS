    //import style.scss
    import '../scss/style.scss';
    //import components and services
    import halfAllJobs from './services/HalfAllJobs';
    import changeTheme from './services/ChangeTheme';
    import showMoreLess from './services/ShowMoreLess';
    import MobileFilter from './services/MobileFilter';
    import filterJobs from './services/FilterJobs';

    //Event: Change Theme
    document.querySelector('.theme-toggle-input').addEventListener('change', e => {
        const element = e.currentTarget;
        changeTheme(element);
    });

    //Event: Show More / Less Jobs
    document.querySelector('.show-more-less').addEventListener('click', e => {
        const element = e.currentTarget;
        showMoreLess(element);
    });

    //Event: Show Mobile Filter Popup
    document.querySelector('.filter-more-btn').addEventListener('click', () => {
        new MobileFilter().showMobileFilter();
    });
    //Event: Hide Mobile Filter Popup
    window.addEventListener('click', e => {
        if (e.target == document.querySelector('.filter-mobile-popup')) {
            new MobileFilter().hideMobileFilter();
        }
    });

    //Event: Filter Jobs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const element = e.currentTarget;
            filterJobs(element);
        });
    });

    //Event: DOM Content Loaded
    document.addEventListener('DOMContentLoaded', () => {

        //dispaly current jobs for show
        halfAllJobs(true);
    });
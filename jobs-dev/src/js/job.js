    //import style.css
    import '../scss/style.scss';
import JobDetails from './components/JobDetails';
    //import components and services
    import jobDetails from './components/JobDetails';
    import changeTheme from './services/ChangeTheme';
    
    
    //Event: Change Theme
    document.querySelector('.theme-toggle-input').addEventListener('change', e => {
        const element = e.currentTarget;
        changeTheme(element);
    });

    //Event: DOM Content Loaded
    document.addEventListener('DOMContentLoaded', () => {
        new JobDetails().getJobDetails();
    });
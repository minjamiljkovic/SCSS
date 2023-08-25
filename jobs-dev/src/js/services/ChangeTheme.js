    //Function: Change Theme
    function changeTheme(element) {
        const elementChacked = element.checked;
        if (elementChacked === true) {
            document.querySelector('html').className = 'dark';
        } else {
            document.querySelector('html').className = 'light';
        }
    }

    export default changeTheme;
    class MobileFilter {
        constructor() {
            this.filterMobilePopup = document.querySelector('.filter-mobile-popup');
        }
        showMobileFilter() {
            this.filterMobilePopup.style.display = 'flex';
        }
        hideMobileFilter() {
            this.filterMobilePopup.style.display = 'none';
        }
    }

    export default MobileFilter;
    //Function: Import Images
    function importImages() {
        const allImages = {};
        const imagesContext = require.context('/src/img/logos', false, /\.(png|jpe?g|svg)$/);
        imagesContext.keys().forEach(item => {
            allImages[item.replace('./', '')] = imagesContext(item);
        });

        return allImages;
    }
    export default importImages;
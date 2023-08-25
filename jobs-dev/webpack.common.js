const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/js/app.js',
        job: './src/js/job.js' 
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            chunks: ['app']
        }),
        new HtmlWebpackPlugin({
            filename: 'job.html',
            template: './src/job.html',
            chunks: ['job']
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    }
};
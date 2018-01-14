var path = require('path');

module.exports = (env) => {
    return {
        entry: {
            app: "./src/index.js",
        },
        output: {
            path: path.resolve(__dirname, './public/js'),
            publicPath: 'public/js',
            filename: "[name].js",
            //library: '[name]'
        },

        module: {
            rules: [
                { test: /\.vue$/, use: 'vue-loader' },
                { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
                { test: /\.html$/, use: 'html-loader' },
                { test: /\.css$/, use: 'style-loader!css-loader' },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    use: [{
                        loader: "file",
                        options: {
                            name: '[path][name].[ext]',
                        },
                    }],
                },
            ]
        },
        devServer: {
            contentBase: path.join(__dirname, "./public"),
            inline: true,
            hot: true,
            compress: true,
            port: 8000
        },
    }
}
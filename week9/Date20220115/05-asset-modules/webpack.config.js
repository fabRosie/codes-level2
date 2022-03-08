const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
        clean: true,
        assetModuleFilename:'images/test[contenthash][ext]'
    },

    mode: 'development',

    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'app.html',
            inject: 'body'
        })
    ],

    devServer: {
        static: './dist'
    },

    module: {
        rules: [
            {
                test: /\.jpg$/,
                type: 'asset/resource',
                generator:{
                    filename:'images/[contenthash][ext]'
                }
            },

            {
                test:/\.svg$/,
                type:'asset/inline'
            },

            {
                test:/\.txt$/,
                type:'asset/source'
            },

            {
                test:/\.jpeg$/,
                type:'asset',
                parser:{
                    dataUrlCondition:{
                        maxSize:1024
                    }
                }
            }

        ]
    }
}
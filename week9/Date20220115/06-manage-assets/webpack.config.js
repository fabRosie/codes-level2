const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin=require('css-minimizer-webpack-plugin')

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
        }),

        new MiniCssExtractPlugin({
            filename:'styles/[contenthash].css'
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
            },
            {
                test:/.(css|less)$/,
                use:[MiniCssExtractPlugin.loader,'css-loader','less-loader']
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/,
                type:'asset/resource'
            }


        ]
    },

    optimization:{
        minimizer:[
            new CssMinimizerPlugin()
        ]
    }

}
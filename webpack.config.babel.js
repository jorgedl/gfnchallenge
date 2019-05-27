import webpack from 'webpack';
import path from 'path';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

const configs = {
    entry: {
        main: path.resolve(__dirname, 'src/index.js'),
        performance: path.resolve(
            __dirname,
            'src/app/storePerformance/StorePerformance.js'
        )
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js'
    },

    resolve: {
        extensions: ['.js']
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|jsx)$/,
                exclude: [/(node_modules)/, /(lib)/],
                use: {
                    loader: 'eslint-loader',
                    options: {
                        configFile: '.eslintrc',
                        emitError: true,
                        emitWarning: true
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-transform-async-to-generator',
                            [
                                '@babel/plugin-proposal-decorators',
                                { legacy: true }
                            ],
                            '@babel/plugin-transform-runtime'
                        ]
                    }
                }
            },
            {
                test: /\.(tiff|woff|woff2|eot|svg|ttf)(\?v=(.*))?$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'fonts/',
                    publicPath: '/fonts/'
                }
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)(\?v=(.*))?$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images/',
                    publicPath: '/images/'
                }
            }
        ]
    },

    optimization: {
        minimizer: [],
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            hash: true,
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([
            { from: path.resolve(__dirname, 'src/images'), to: 'images' },
            { from: path.resolve(__dirname, 'src/fonts'), to: 'fonts' }
        ]),
        new webpack.ProvidePlugin({
            Promise: 'es6-promise'
        })
    ],

    devServer: {
        hot: true,
        historyApiFallback: true,
        inline: true,
        host: '0.0.0.0',
        contentBase: './dist',
        port: 8005,
        disableHostCheck: true
    }
};

if (process.env.NODE_ENV === 'development') {
    configs.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                API_URL: JSON.stringify(
                    'http://localhost:8000/performance/api/'
                )
            }
        })
    );
}

if (process.env.NODE_ENV === 'production') {
    configs.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    );
    configs.optimization.minimizer.push(new UglifyJSPlugin());

    configs.mode = 'production';
} else {
    configs.devtool = 'inline-source-map';
    configs.mode = 'development';
}

export default configs;

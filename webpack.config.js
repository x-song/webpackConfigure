var webpack = require("webpack"),
    path = require('path'),
    jquery = require('jquery'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    htmlName = 'index',
    CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin"),
    _dirname = __dirname + '/test'; //这里指定要打包的项目目录//F:/webpack/webpack1/test(测试用)
    // var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: {
        //可配置多个入口js
        index: path.resolve(_dirname, './src/js/index.js'),
        list: path.resolve(_dirname, './src/js/list.js'),
        test: path.resolve(_dirname, './src/js/test.js')
    },
    output: {
        path: path.resolve(_dirname, './dist/'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        // avoid webpack trying to shim process
        noParse: /es6-promise\.js$/,
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            }, {
                test: /\.js$/,
                // excluding some local linked packages.
                // for normal use cases only node_modules is needed.
                exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
                loader: 'babel-loader'
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    publicPath: "../" //这里配置下可以处理css中背景图片路径出错问题
                })
            },

            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader?sourceMap' },

            //图片文件使用 url-loader 来处理，小于1kb的直接转为base64
            { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader', query: { limit: 1024, name: 'images/[name].[ext]?[hash:7]' } }
        ]
    },
    //实时更新配置
    devServer: {
        //当设置为true时，访问所有服务器上不存在的文件，都会被重定向到/，也就是index.html文件
        // historyApiFallback: true,
        //热启动（根据文件变化进行编译）
        hot: true,
        //启动服务器
        open: true,
        //设为true时可以在文件发生变化时，更新页面
        inline: true,
        //设置页面访问端口号
        port: 8099
    },
    plugins: [
        //不需要打包html将此处注释便可
        // new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
        new HtmlWebpackPlugin({
            //webpack 处理html中img的src引入的图片
            template: 'html-withimg-loader!' + path.resolve(_dirname, './' + htmlName + '.html'),
            filename: '' + htmlName + '.html',
            chunks: ['index', 'common'], // 这个模板对应上面那个节点（如果用了CommonsChunkPlugin，记得将公用js引进来）
            hash: true,
            minify: false
        }),
        //支持多个html模板文件访问
        // new HtmlWebpackPlugin({
        //     template: 'html-withimg-loader!' + path.resolve(_dirname, './list.html'),
        //     filename: 'list.html',
        //     chunks: ['list', 'common'], // 这个模板对应上面那个节点（如果用了CommonsChunkPlugin，记得将公用js引进来）,
        //     minify: false
        // }),
        // //支持多个html模板文件访问
        // new HtmlWebpackPlugin({
        //     template: 'html-withimg-loader!' + path.resolve(_dirname, './test.html'),
        //     filename: 'test.html',
        //     chunks: ['test'], // 这个模板对应上面那个节点（如果用了CommonsChunkPlugin，记得将公用js引进来，没有被选中抽取公用部分，可以不写）
        //     minify: false
        // }),
        new webpack.HotModuleReplacementPlugin(),
        //webpack定义全局变量
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //webpack压缩js代码
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        //抽取css代码
        new ExtractTextPlugin({
            filename: "css/[name].css?[hash]-[chunkhash]-[contenthash]-[name]",
            disable: false,
            allChunks: true
        }),
        // 提供公共代码
        new CommonsChunkPlugin({
            name: "common",
            filename: "js/common.bundle.js", //忽略则以name为输出文件的名字，否则以此为输出文件名字
            chunks: ['index', 'list'] //有选择从模块中提取公用部分
        })
    ]
}

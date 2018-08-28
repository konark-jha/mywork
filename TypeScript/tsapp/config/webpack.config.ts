import * as path from "path";
import * as webpack from "webpack";

const projectRootPath = path.resolve(__dirname, "../");
const assetsPath = path.resolve(projectRootPath, "./dist/static");

const config: webpack.Configuration={
    context: path.resolve(__dirname,".."),
entry:{
    output:{
        path: assetsPath,
        publicPath:"/static/",
        filename:"bundle.js",
    },
    module:{
        loaders[
            {
                test /\.tsx?$/,
                loader:"ts",
            },
        ],
    },
},
};
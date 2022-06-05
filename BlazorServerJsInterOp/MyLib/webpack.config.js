const path = require("path");

const fileName = "my_lib.js";
const libraryName = "MyLib";

module.exports = {
    experiments: {
        outputModule: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '../wwwroot/js'),
        filename: fileName,
        library: {
            type: "module",
        },
    }
};

const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const GoogleFontsPlugin = require("google-fonts-webpack-plugin");

module.exports = {
    chainWebpack: config => {
        config.plugin('monaco-editor').use(MonacoWebpackPlugin, [
            {
                // Languages are loaded on demand at runtime
                languages: ['json', 'javascript', 'html', 'xml']
            }
        ],
            new GoogleFontsPlugin({
                fonts: [
                    { family: "Montserrat", variants: [ "light300",  "regular400",  "regular400italic",
                            "medium500", "semi-bold600", "bold700" ] },
                    { family: "Raleway", variants: [ "light300",  "regular400",  "regular400italic",
                            "medium500", "semi-bold600", "bold700" ] }
                ]
            })
        )
    }
}
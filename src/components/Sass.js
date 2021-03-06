let Preprocessor = require('./Preprocessor');

class Sass extends Preprocessor {
    /**
     * Required dependencies for the component.
     */
    dependencies() {
        let dependencies = ['node-sass@4.*', 'sass-loader@7.*'];

        if (Config.processCssUrls) {
            dependencies.push('resolve-url-loader@2.3.1');
        }

        return dependencies;
    }

    /**
     * Register the component.
     *
     * @param {*} src
     * @param {string} output
     * @param {Object} pluginOptions
     */
    register(src, output, pluginOptions = {}) {
        return this.preprocess(
            'sass',
            src,
            output,
            this.pluginOptions(pluginOptions)
        );
    }

    /**
     * Build the plugin options for sass-loader.
     *
     * @param {Object} pluginOptions
     * @returns {Object}
     */
    pluginOptions(pluginOptions) {
        return Object.assign(
            {
                precision: 8,
                outputStyle: 'expanded'
            },
            pluginOptions,
            { sourceMap: true }
        );
    }
}

module.exports = Sass;

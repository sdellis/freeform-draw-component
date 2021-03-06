var metadata = require('./package');

var GulpConfig = (function () {
    function GulpConfig() {
        this.name = metadata.name;
        // libs that MUST be included in a consuming app for this component to work
        this.deps = [
            'node_modules/freeform-draw-component/dist/freeform-draw-component.bundle.js'
        ];
        // libs that MAY be included in a consuming app but are used here for examples purposes
        this.examplesDeps = [
        ];
        this.examplesDir = './examples';
        this.examplesDepsDir = './examples/js';
        // ts definitions to copy to the typings dir
        this.typings = [
            'node_modules/freeform-draw-component/dist/freeform-draw-component.d.ts'
        ];
        this.typingsDir = './typings';
        this.dist = './dist';
        this.header = '// ' + this.name + ' v' + metadata.version + ' ' + metadata.homepage + '\n';
        this.jsOut = this.name + '.js';
        this.jsMinOut = this.name + '.min.js';
        this.jsBundleOut = this.name + '.bundle.js';
        this.dtsOut = this.name + '.d.ts';
        this.dtsBundleOut = this.name + '.bundle.d.ts';
        this.tsSrc = [
            'src/_references.ts',
            'src/*.ts',
            'typings/*.ts',
            'typings/**/*.ts'];
        this.tsConfig = {
            declarationFiles: true,
            noExternalResolve: true,
            noLib: false,
            module: 'commonjs',
            sortOutput: true
        };
        this.browserifyConfig = {
            standalone: this.name,
            debug: false
        };
        this.browserifySrc = this.dist;
        this.browserifyTarget = this.dist;
    }
    return GulpConfig;
})();

module.exports = GulpConfig;

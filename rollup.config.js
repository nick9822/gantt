import sass from 'rollup-plugin-sass';
import uglify from 'rollup-plugin-uglify';
import merge from 'deepmerge';

const dev = {
    input: 'src/index.js',
    output: {
        name: 'Gantt',
        file: '../../../../www/js/frappe-gantt.js',
        format: 'iife'
    },
    plugins: [
        sass({
            output: '../../../../www/css/frappe-gantt.css'
        })
    ]
};
const prod = merge(dev, {
    output: {
        file: '../../../../www/js/frappe-gantt.min.js'
    },
    plugins: [
        uglify(),
        sass({
            output: '../../../../www/css/frappe-gantt.css'
        })
    ]
});

export default [dev, prod];

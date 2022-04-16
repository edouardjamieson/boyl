const os = require('os');

/*
 *  Fichier de configuration
 */

// Paths (ne pas toucher)
export const paths = {
    src: './assets',
    dest: './theme/',
    styles: {
        src: './assets/css/main.scss',
        watch: './assets/css/**/*.scss',
        dest: './theme/assets/css',
    },
    scripts: {
        src: './assets/js/main.js',
        watch: './assets/js/**/*.js',
        dest: './theme/assets/js',
    },
};

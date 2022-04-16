/***
 *
 *     #       ####   ####    ##   #         #####  ###### #####  #       ####  #   #
 *     #      #    # #    #  #  #  #         #    # #      #    # #      #    #  # #
 *     #      #    # #      #    # #         #    # #####  #    # #      #    #   #
 *     #      #    # #      ###### #         #    # #      #####  #      #    #   #
 *     #      #    # #    # #    # #         #    # #      #      #      #    #   #
 *     ######  ####   ####  #    # ######    #####  ###### #      ######  ####    #
 *
 */
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const { say, walk } = require('./utils.boyl');
const config = require('./config.boyl');

if (config.local.path == null) {
    say(
        'error',
        'Le paramètre PATH est null dans la configuration de BoyL. (./boyl/config.boyl.js)'
    );
} else {
    console.clear();
    console.log(`Duplication des fichiers dans ${config.local.path} ...`);

    // On prends tous les fichiers dans le dossier theme
    const theme_url = path.join(__dirname, '..', 'theme');
    const files = walk(theme_url);

    // On envoit tout à la destination
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const file_name = file.split('/theme')[1];
        const url = `${config.local.path}${file_name}`;

        // Si le fichier mesure 0 on cancel
        const size = fs.statSync(file).size;
        if (size === 0) continue;

        // On envoit
        fse.copySync(file, url);
        say('alert', 'Envoyé : ' + file_name);
    }

    say('alert', 'Opération terminée!');
}

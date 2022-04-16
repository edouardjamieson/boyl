/***
 *
 *       ##   #    # #####  ####  #####  ###### #####  #       ####  #   #
 *      #  #  #    #   #   #    # #    # #      #    # #      #    #  # #
 *     #    # #    #   #   #    # #    # #####  #    # #      #    #   #
 *     ###### #    #   #   #    # #    # #      #####  #      #    #   #
 *     #    # #    #   #   #    # #    # #      #      #      #    #   #
 *     #    #  ####    #    ####  #####  ###### #      ######  ####    #
 *
 */

const ftp = require('ftp');
const fs = require('fs');
const config = require('./config.boyl').default;
const client = new ftp();
const { say, walk } = require('./utils.boyl');

// ====================================================================
// Connexion
// ====================================================================
client.connect({
    host: config.deploy.host,
    user: config.deploy.user,
    password: config.deploy.password,
    secure: config.deploy.options.secure,
    secureOptions: {
        rejectUnauthorized: config.deploy.options.rejectUnsecure,
    },
});

// ====================================================================
// Appelé lorsqu'on se connecte
// ====================================================================
client.on('ready', () => {
    console.clear();
    say('alert', `Connecté à ${config.deploy.host}`);

    // On prends tous les fichiers dans le dossier theme
    const files = walk(__dirname + '/theme');

    // On send tous les fichiers sur le serveur
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const file_name = file.split('/theme')[1];
        const url = `${theme_url}${file_name}`;

        // Si le fichier mesure 0 on cancel
        const size = fs.statSync(file).size;
        if (size === 0) continue;

        // On regarde si on a des arguments
        if (process.argv[2]) {
            const arg = process.argv[2];

            // JUSTE POUR LES COMPONENTS
            if (arg === 'components') {
                if (!file_name.includes('/components')) continue;
            }
            // JUSTE POUR LE PHP
            else if (arg === 'php') {
                if (!file_name.includes('.php')) continue;
            }
            // JUSTE POUR LES ASSETS
            else if (arg === 'assets') {
                if (!file_name.includes('/assets')) continue;
            }

            // POUR UN SEUL FICHIER
            else if (arg === 'single') {
                const single_file = process.argv[3];
                if (!single_file) {
                    client.destroy();
                    say(
                        'error',
                        'Argument manquant, commande : npm run deploy single <nom-du-fichier.extension>'
                    );
                    break;
                }

                if (!file_name.includes(single_file)) continue;
            } else {
                client.destroy();
                say('error', 'Argument invalide : ' + arg);
                break;
            }
        }

        // On upload
        client.put(file, url, false, (err) => {
            if (err) {
                say('error', 'Erreur avec le fichier : ' + file);
                console.log(err.code);
                console.log(err.message);
            } else {
                say('alert', 'Téléversé : ' + file_name);
                client.end();
            }
        });
    }
});

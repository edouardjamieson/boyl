export default {
    // ====================================================================
    // CONFIGURATION DES PARAMÈTRES DU SITE
    // ====================================================================

    // Nom de la config
    name: 'Configuration initale',
    // Version de la config
    version: '1.0.0',

    // CONFIGURATION DE L'AUTODEPLOY
    deploy: {
        // Connexion FTP
        host: 'localhost',
        user: 'root',
        password: 'pass',
        port: 21,

        // Chemin vers le theme dans votre hosting & wordpress
        theme_url: 'public_html/wp-content/themes/mon_theme',

        // Ces options permettent de configurer le comportement de la sécurité
        // Ne changer que si la connexion de s'établie pas
        options: {
            secure: true,
            rejectUnsecure: false,
        },
    },
};

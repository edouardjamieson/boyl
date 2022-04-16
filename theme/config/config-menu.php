<?php

/***
 *                                        
 *     #    # ###### #    # #    #  ####  
 *     ##  ## #      ##   # #    # #      
 *     # ## # #####  # #  # #    #  ####  
 *     #    # #      #  # # #    #      # 
 *     #    # #      #   ## #    # #    # 
 *     #    # ###### #    #  ####   ####  
 *                                        
 */

 /***
 *                                                                  
 *       ##   #####  #    # # #    #    #    # ###### #    # #    # 
 *      #  #  #    # ##  ## # ##   #    ##  ## #      ##   # #    # 
 *     #    # #    # # ## # # # #  #    # ## # #####  # #  # #    # 
 *     ###### #    # #    # # #  # #    #    # #      #  # # #    # 
 *     #    # #    # #    # # #   ##    #    # #      #   ## #    # 
 *     #    # #####  #    # # #    #    #    # ###### #    #  ####  
 *                                                                  
 */
add_filter('custom_menu_order', 'admin_menu');
add_filter('menu_order', 'admin_menu');

function admin_menu($menu_ord) {

    if (!$menu_ord) return true;

    remove_menu_page( 'edit-comments.php' );
    remove_menu_page( 'edit.php' );

    // Permet d'ajuster l'ordre du menu WordPress
    // -> Vous pouvez ajouter des séparateurs avec 'wp-menu-separator'
    // -> Vous pouvez ajouter vos CPT avec edit.php?post_type=mon_cpt

    // Spécifie les liens de menu dans l'ordre désiré
    $menu_ord = array(
        'index.php',                            // Tableau de bord
        'edit.php?post_type=page',              // Pages
        'wp-menu-separator',                    // ----------------
        'edit.php?post_type=exemple',           // Exemple de CPT
        'upload.php',                           // Média
        'nav-menus.php',                        // Menus
        'users.php',                            // Utilisateurs
        'plugins.php',                          // Extensions
        'options-general.php',                  // Réglages
    );

    return $menu_ord;

}



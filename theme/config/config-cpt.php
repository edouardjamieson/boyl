<?php

/***
 *                                                                                                                
 *      ####  #    #  ####  #####  ####  #    #    #####   ####   ####  #####    ##### #   # #####  ######  ####  
 *     #    # #    # #        #   #    # ##  ##    #    # #    # #        #        #    # #  #    # #      #      
 *     #      #    #  ####    #   #    # # ## #    #    # #    #  ####    #        #     #   #    # #####   ####  
 *     #      #    #      #   #   #    # #    #    #####  #    #      #   #        #     #   #####  #           # 
 *     #    # #    # #    #   #   #    # #    #    #      #    # #    #   #        #     #   #      #      #    # 
 *      ####   ####   ####    #    ####  #    #    #       ####   ####    #        #     #   #      ######  ####  
 *                                                                                                                
 */

 // ====================================================================
 // Tous les CPT vont à l'intérieur de cette fonction.
 // ====================================================================
add_action( 'init', function(){

	register_post_type('exemple',
    array(
      'labels' => array(
        'name'                => __('Exemple','boyl'),
        'singular_name'       => __('Exemple','boyl'),
        'add_new'             => __('Ajouter un exemple','boyl'),
        'add_new_item'        => __('Ajouter un exemple', 'boyl'),
        'edit_item'           => __('Modifier le exemple', 'boyl'),
        'new_item'            => __('Équipe','boyl'),
        'hide_item'           => __('Cacher ce exemple', 'boyl'),
        'show_item'           => __('Montrer ce exemple', 'boyl'),
        'view_item'           => __('Voir ce exemple', 'boyl'),
        'view_items'          => __('Voir ces exemples', 'boyl'),
        'search_items'        => __('Chercher un exemple', 'boyl'),
        'not_found'           => __('Aucun exemple', 'boyl'),
        'not_found_in_trash'  => __('Aucun exemple dans la corbeille', 'boyl'),   
      ),
      'public' => true,
      'has_archive' => false,
      'menu_icon' => 'dashicons-groups'
    )
  );



}, 1);
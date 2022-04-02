<?php

function navigate($to = "reload") {

    global $wp;

    // Si $to est un array
    if(is_array($to)) {

        // Si on a une url précise on y va directement
        if(isset($to['url'])) {
            boyl_handle_redirect($to['url']);
        }else{

            $redirect_url = "";

            if(isset($to['template'])) {
                $wp_pages = get_pages(array(
                    'meta_key' => '_wp_page_template',
                    'meta_value' => $to['template']
                ))
                if(isset($wp_pages[0])) {
                    $redirect_url = get_page_link($wp_pages[0]->ID);
                }
            }

            if(isset($to['single'])) {
                $wp_post = get_post($to['single']);
                if(isset($wp_post)) {
                    $redirect_url = $wp_post->guid;
                }
            }
            
            if(isset($to['current'])) {
                $redirect_url = home_url($wp->request);
            }

            if(isset($to['params'])) {
                if(is_array($to['params'])) {
                    $params = "?";
                    foreach ($to['params'] as $key => $value) {
                        $params .= $key."=".$value;
                    }
                    $redirect_url .= $params;
                }
            }

            if(isset($to['anchor'])) {
                if(is_string($to['anchor'])) {
                    $redirect_url .= "#".$to['anchor'];
                }
            }

            boyl_handle_redirect($redirect_url);
        }

    }

    // Si $to est un string
    else if(is_string($to) && $to !== "reload") {
        boyl_handle_redirect($to);
    }

    // Sinon on fait juste reload
    else {
        boyl_handle_redirect(home_url($wp->request));
    }

}

function boyl_handle_redirect($url) {

    $url = urlencode($url);

    if(!headers_sent()){
        header("Location:".$url);
    }else{
        echo "<script>window.location.href = '".$url."'</script>";
    }
}
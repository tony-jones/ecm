// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .
//= require bootstrap
//= require turbolinks

$(document).ready(function(){
    var my_posts = $("[rel=tooltip]");

    var size = $(window).width();
    for(i=0;i<my_posts.length;i++){
        the_post = $(my_posts[i]);

        if(the_post.hasClass('invert') && size >=767 ){
            the_post.tooltip({ placement: 'left'});
            the_post.css("cursor","pointer");
        }else{
            the_post.tooltip({ placement: 'rigth'});
            the_post.css("cursor","pointer");
        }
    }
});
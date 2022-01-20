"use strict";
$(document).ready(function() {

    // alert($("h1").html());
    //
    // $(".codeup").css("border", "solid 1px #FF0000");
    //
    // $(".li").css("font-size", "20px");
    //
    // $("h1, p, li").css("background-color", "#FFFF00");

    $(".codeup").click(function() {
        $(".codeup").css("background-color", "#FF0000");
    });

    $("p").dblclick(function (){
       $("p").css("font-size", "18px");
    });

    $(".li").hover(function(){
       $(this).css("color", "#FF0000");
    },
        function (){
        $(this).css("color", "#000000");
        }

    );
});
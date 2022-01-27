"use strict";


$("#change-bg-color").click(function () {
   $("body").css("background-color", "blue");
});

$(".btn").click(function () {
   $(this).css("background-color", "#93f2e5")
});

$("#reset-btn").click(function () {
   location.reload();
});

$(".star").hover(function () {
   let data = $(this).data("value");
   console.log(data);
   $("#review-result").text(data);
});

$("#go-to-btn").click(function () {
   console.log($("#custom-url").val());
   window.location = ($("#custom-url").val());
});

$('#append-to-ul').click(function () {
   let li = "<li>text</li>";
   $('#append-to-me').append(li);
});

let count =0 ;
let max = 2;

let interval = setInterval(function () {
   if (count === max) {
      clearInterval(interval);
      $("#message").text("Hello, Everyone");
   } else {
      count ++;
   }

},1000);


$('#hl-toggle li').click(function () {
   $(this).toggleClass("yellow");
});



$("#upcase-name").click(function () {
   $("#output").text("Your text uppercased is: " + $("#input").val().toUpperCase());
});

//TODO: Whenever a list item inside of the ul with the id of font-grow is double clicked, the font size of the list item that was clicked should be doubled. Example: If the current font-size is 12px double-clicking would turn it into 24, 48...

$('#font-grow li').dblclick(function () {
   var fontSize = parseInt($(this).css("font-size"));
   fontSize = fontSize + fontSize + "px";
   $(this).css("font-size", fontSize);
});

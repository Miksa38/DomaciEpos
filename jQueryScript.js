$(".centralni h1").on("mouseenter",function(){
    $(".centralni p").show(2000);
});
$(".mediji").on("mouseenter",function(){
    $(this).addClass("novi");
    

});
$(".mediji").on("mouseleave",function(){
    $(this).removeClass("novi");
})
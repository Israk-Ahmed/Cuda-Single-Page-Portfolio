$(document).ready(function(){
    
    //STICKY MENU
    $(".rolling-js-for-sticky-menu").waypoint(function(direction){
        if(direction == "down"){
                $("nav").addClass("sticky");
           } else{
                $("nav").removeClass("sticky");
           }
    });
    
    
    
    
    // MIXITUP (PORTFOLIO SECTION)
    var mixer = mixitup('.container');
});
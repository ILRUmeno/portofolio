var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function(){
    console.log(sessionStorage.getItem('firstTime'));
    //if(sessionStorage.length == 0){
        
        sessionStorage.setItem('firstTime', null);
    //}

    $("body").css("overflow", "hidden");
    if(sessionStorage.getItem('firstTime') === "false" && $(".loading").is(":visible")){
        $("body").css("overflow", "hidden scroll");
        $(".loading").hide();
        if(document.title.indexOf("Contact")){
            $(".WorkingArea").show();
        }
    }else if(sessionStorage.getItem('firstTime') === "null" || sessionStorage.getItem('firstTime') === null){
        console.log("-"+window.innerWidth+"-");
        setTimeout(function(){
            if(window.innerWidth >= 1248){    
                //console.log($("#loadingBar").find("div").css("width") + "     "+ $("#loadingBar").css("width") );
                if( $("#loadingBar").find("div").css("width") === $("#loadingBar").css("width")){
                    $(".loadingText").find("h2").animate({marginLeft: "300px", fontSize: "30px", marginTop: "35px"}, {duration: 100, queue: false});
                    $(".loadingText").find("h1").animate({fontSize: "45px"}, {duration: 100, queue: false});
                    $(".loadingText").animate({top:"0", left:"0", marginTop: "16px", marginLeft: "13px"}, {duration: 100, queue: false});
                    $(".loading").fadeOut(1000, "linear" );
                    if(document.title.indexOf("Contact")){
                        $(".WorkingArea").show();
                    }
                    sessionStorage.setItem('firstTime', false);
                }
            }else if(window.innerWidth < 1248) {
                if( $("#loadingBar").find("div").css("width") === $("#loadingBar").css("width")){
                    $(".loadingText").find("h2").animate({fontSize: "30px", marginTop: "35px"}, {duration: 100, queue: false});
                    $(".loadingText").find("h1").animate({fontSize: "45px"}, {duration: 100, queue: false});
                    $(".loadingText").animate({top:"0", marginTop: "16px", marginLeft: "13px"}, {duration: 100, queue: false});
                    $(".loading").fadeOut(1000, "linear" );
                    if(document.title.indexOf("Contact")){
                        $(".WorkingArea").show();
                    }
                    sessionStorage.setItem('firstTime', false);
                }
            }
            $("body").css("overflow", "hidden scroll");
        }, 6000);
        
    }
});
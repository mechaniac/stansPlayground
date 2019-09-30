

function openAbout(){

    
    let navMenuPosition = $("#navMenuHolder").position();
    
    if(navMenuPosition.top>0){
        TweenMax.to("#navMenuHolder",.5,{y: 0});
    }
    

    let aboutWindoWPosition = $("#aboutWindowHolder").position();
    
    if(aboutWindoWPosition.top<0){
        TweenMax.to("#aboutWindowHolder",.5, {y: 600,ease:Back.easeOut});
    }else{
        TweenMax.to("#aboutWindowHolder",.5,{y:0, ease:Sine});
    }
}

function openMenu(){
    let aboutWindoWPosition = $("#aboutWindowHolder").position();
    
    if(aboutWindoWPosition.top>0){
        TweenMax.to("#aboutWindowHolder",.5, {y: 0});
    }
    
    let navMenuPosition = $("#navMenuHolder").position();
    
    if(navMenuPosition.top<0){
        TweenMax.to("#navMenuHolder",.5,{y: 600, ease:Back.easeOut});
    }else{
        TweenMax.to("#navMenuHolder",.5,{y:0, ease:Sine});
    }

}

function loadPage01(){
    removeMenu();
    $("#pageHolder").load("pages/page_01.html");
}

function loadPage02(){
    removeMenu();
    $("#pageHolder").load("pages/page_02.html");
}
function loadPage03(){
    $("#pageHolder").load("pages/page_03.html");
}
function loadPage04(){
    $("#pageHolder").load("pages/page_04.html");
}
function loadPage05(){
    $("#pageHolder").load("pages/page_05.html");
}
function loadPage06(){
    $("#pageHolder").load("pages/page_06.html");
}


function removeMenu(){
    let navMenuPosition = $("#navMenuHolder").position();
    
    if(navMenuPosition.top>0){
        $("#navMenuHolder").fadeOut(200);
        const timelineNavVanish = new TimelineMax({});
        timelineNavVanish.to("#navMenuHolder",.2,{x: 0, ease:Sine});
        timelineNavVanish.set("#navMenuHolder",{y: 0});
        $("#navMenuHolder").fadeIn();
    }
}

(function(){
    ['about-me','projects','experience','education','contact'].forEach(function(name){
        document.getElementById(name+'-link').onclick = function(){scrollTo(name)};
    });
    function scrollTo(elemId){
        var $elem = document.getElementById(elemId);
        $elem.scrollIntoView({behavior: "smooth"});
    }
})();


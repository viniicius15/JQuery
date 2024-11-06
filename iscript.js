$(document).ready(function(){
    $(".content a").click(function(e){
        e.preventDefault(); // Evita o comportamento padrão do link
        $(this).closest(".content").find("p").slideToggle("slow");
    });
});

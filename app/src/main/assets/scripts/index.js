$(".panel-heading").first().html($(".panel-heading").first().html().replace(/Home/g,window.Android.translate("home")));
$("h2").first().html(window.Android.translate("welcome"));
$("p").first().html(window.Android.translate("mm4me_welcome_txt"));
var translatedStrings=[
        "mm_import",
        "edit",
        "view",
        "export",
        "map",
        "camera",
        "audio"
    ];
    var cnt=0;
$(".col-xs-6").each(function(){
    $(this).find("a").find("center").next().remove();
    $(this).find("a").first().append(window.Android.translate(translatedStrings[cnt]));
    cnt+=1;
})

getCurrentStatus();

//$('.dropdown-toggle').dropdown();

        $.ajax({
            method: "GET",
            url: './forms/list.html',
            error: function(){
                $("#forms_link").attr('href','noform.html');
                $("#listing_link").attr('href','nolisting.html');
            },
            success: function(){
                $("#forms_link").attr('href','forms/list.html');
                $("#listing_link").attr('href','listings/list.html');
            }
        });


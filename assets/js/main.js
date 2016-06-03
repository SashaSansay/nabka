window.addEventListener('load', function() {
    new FastClick(document.body);
}, false);

$(function(){
    $('.billboard__item--forecast .billboard__wrap,.time-half__inner').mCustomScrollbar({
        theme : "minimal-dark",
        scrollInertia : 0,
        autoHideScrollbar : false
    });
    $('body').flowtype({
        minimum   : 320,
        maximum   : 1400,
        minFont   : 12,
        maxFont   : 16,
        fontRatio : 70
    });
});


google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(-9.817329,84.832763),
        zoom: 3,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: true,
        panControl: true,
        streetViewControl: true,
        draggable : true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    }
    var mapElement = document.getElementById('main-map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [

    ];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] =='undefined'){ description ='';} else { description = locations[i][1];}
        if (locations[i][2] =='undefined'){ telephone ='';} else { telephone = locations[i][2];}
        if (locations[i][3] =='undefined'){ email ='';} else { email = locations[i][3];}
        if (locations[i][4] =='undefined'){ web ='';} else { web = locations[i][4];}
        if (locations[i][7] =='undefined'){ markericon ='';} else { markericon = locations[i][7];}
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        link = '';     }

}
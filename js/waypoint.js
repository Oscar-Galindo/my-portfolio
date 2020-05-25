//SERVICE ANIM//
var $servicesTrigger = $('.anim');

$servicesTrigger.waypoint(function(){
    $servicesTrigger.addClass('serv-anim');
}, {offset:'95%'}
);

//Port ANIM//
var $portTrigger = $('.port-anim');

$portTrigger.waypoint(function(){
    $portTrigger.addClass('port');
}, {offset:'60%'});
//Experience ANIM//
var $experiTrigger = $('.experi');

$experiTrigger.waypoint(function(){
    $experiTrigger.addClass('experi-anim');
}, {offset:'98%'});
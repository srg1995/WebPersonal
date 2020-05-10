$(document).ready(function() {

    /*
    * Plugin intialization
    */
    $('#trayectoria').pagepiling({
        menu: '#menu',
        anchors: ['trayectoria1', 'trayectoria2', 'trayectoria3', 'trayectoria4'],
        sectionsColor: ['#83DEF9', '#A2E6FB', '#C1EEFC', '#E0F7FD'],
        navigation: {
            'position': 'right',
               'tooltips': ['trayectoria 1', 'trayectoria 2', 'trayectoria 3', 'trayectoria 4']
           },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });
});
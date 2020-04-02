
$(document).ready(function () {

    $(document).ready(function(){
        $(".scroll-vertical").mCustomScrollbar();
    });

    $('.mobile-close').click(function () {
        $(this).parents('.mobile-app').remove();
    });
    $('.btn-sources').click(function () {
        $('.sources-list').toggleClass('open');
    });
    $('.btn-contacts').click(function () {
        $('.contacts-list').toggleClass('open');
        $('.contacts-down').toggleClass('fa-rotate-180')
    });

    /*sidebar*/
    $('.btn-open').click(function () {
        $('.nv-page .nv-sidebar').toggleClass('d-block');
        $('.nv-page').removeClass("sidebar-collapsed");
    });
    $('.collapse-link').click(function() {
        $('.nv-page').toggleClass("sidebar-collapsed");
    });


    $('.drop_notification .btn-nv-bell').click(function () {
        $(this).next().toggleClass('d-block');
    });
    $(document).on('click', function(event) {
        if ($(event.target).closest('.notification-dropdown').length === 0) {
            $('.notification-dropdown').removeClass('d-block');
        }
    });
});


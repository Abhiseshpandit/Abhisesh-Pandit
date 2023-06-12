document.querySelector('.menu-icon').addEventListener('click', function() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('active');
  });
  $(document).ready(function () {
    $('.scrollable-menu a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80 // Adjust the offset value as per your requirements
            }, 1000);
        }
    });
});
$(document).ready(function() {
    // Smooth scrolling for menu links
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });
});  


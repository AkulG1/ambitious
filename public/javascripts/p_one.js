console.log("Connected");

$(window).scroll(function () {
  var n = $('#navbar'),
    links = $('.sidenav a'),
    pic = $('#mainimage'),
    ham = $('#ham');

  var bottomofpic = pic.offset().top + pic.outerHeight();
  var scrolled = $(document).scrollTop();
  y1 = 1, y2 = 0,
    x1 = 0, x2 = bottomofpic,
    m = (y1 - y2) / (x2 - x1);
  n.css('backgroundColor', 'rgba(23,52,124,' + Math.max(0.25, y2 + m * scrolled) + ')');
  // links.css('color', 'rgba(252,63,61,' + Math.max(0, y2 - m * scrolled) + ')');

  if (scrolled > bottomofpic) {
    n.addClass('shadowaddremovejs');
  }else{
    n.removeClass('shadowaddremovejs');
  }
});

$('[data-toggle="slide-collapse"]').on('click', function () {
  $navMenuCont = $($(this).data('target'));
  $navMenuCont.animate({
    'width': 'toggle'
  }, 350);
});


function openNav() {

  if (window.matchMedia("(min-width: 641px)").matches) {
    document.getElementById("mySidenav").style.width = "230px";

  } else {
    document.getElementById("mySidenav").style.width = "180px";
  }
  document.getElementById("mySidenav").style.boxShadow = "0.6px 0.6px 10px black";
  $('.overlay').show();
}

$(document.body).click(function (evt) {
  var snav = $("#mySidenav");
  var itselements = $(".nottarget");
  if (!snav.is(evt.target) && !itselements.is(evt.target) && window.matchMedia("(max-width: 768px)").matches) {
    document.getElementById("mySidenav").style.width = 0;
    $('.overlay').hide();
  }
});

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  $('.overlay').hide();

}


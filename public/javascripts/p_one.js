console.log("Connected");

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

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


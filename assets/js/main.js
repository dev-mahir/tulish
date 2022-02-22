/* Template Name: Geruya - personal portfolio React Template
   Author: MK Themes
   Email: support@mkthemes.in
   Website: https://mkthemes.in
   Version: 1.0.0
   Created: February 2022
   File Description: Main JS file of the template
*/


/*********************************/
/*         INDEX                 */
/*================================

 *      ==  Sticky header        *
 *      ==  Current year         *
 *      ==  Toggle Menus         *
 *      ==  Active Menu          *
 *      ==  Clickable Menu       *
 *      ==  Back to top          *
 *      ==  Feather icon         *
 *      ==  DD Menu              *
 *      ==  Active Sidebar Menu  *
 *      ==  Contact us           *
 ================================*/






//  Header tab 
// Get Elements

const menu_btn = document.querySelectorAll('.mk-menu ul li a');
const content_box = document.querySelectorAll('.content-box');
const open_contact_form = document.getElementById('open_contact');


menu_btn.forEach( btn => {
    btn.addEventListener( 'click' ,function(e){
        e.preventDefault();
        menu_btn.forEach( btn => {
            btn.classList.remove('active')
        });
        btn.classList.add('active')
        content_box.forEach( box => {
            box.classList.remove('active');
        });
        const single_box_content  =  document.querySelector(this.getAttribute('href'));
        single_box_content.classList.add('active');
    });
});

open_contact_form.addEventListener('click',function(e){
    e.preventDefault();
    menu_btn.forEach( btn => {
        btn.classList.remove('active')

    });
});


  
//  Typing text Animation 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};


// circular progress bar 
$(function(){
    $('.circlechart').circlechart();
});
    


// line progressbar 
$('#bar1').barfiller({

    // color of bar
    barColor: 'rgba(85, 80, 80, 0.637)',
  
    // shows a tooltip
    tooltip: true,
  
    // duration in ms
    duration: 3000,
  
    // re-animate on resize
    animateOnResize: true,
  
    // custom symbol
    symbol: "%"
    
  });
$('#bar2').barfiller({

    // color of bar
    barColor: 'rgba(85, 80, 80, 0.637)',
  
    // shows a tooltip
    tooltip: true,
  
    // duration in ms
    duration: 3000,
  
    // re-animate on resize
    animateOnResize: true,
  
    // custom symbol
    symbol: "%"
    
  });
$('#bar3').barfiller({

    // color of bar
    barColor: 'rgba(85, 80, 80, 0.637)',
  
    // shows a tooltip
    tooltip: true,
  
    // duration in ms
    duration: 3000,
  
    // re-animate on resize
    animateOnResize: true,
  
    // custom symbol
    symbol: "%"
    
  });




//   Filter 
// init Isotope
var $grid = $('.portfolio-list').isotope({
    // options
  });
  // filter items on button click
  $('.fil-btn').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });



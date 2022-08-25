particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 600,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.4,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 250,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.3,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 10
      },
      "repulse": {
        "distance": 200,
        "duration": 0.8
      },
      "push": {
        "particles_nb": 50
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


	$(function () { // wait for document ready
		var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -20}

					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 400,  y: -100},
            {x: 200,  y: -100},
            {x: -150,  y: -30}
					]
			},
			
		};
		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween = new TimelineMax()
			.add(TweenMax.to($("#plane"), 1.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 2, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($("#plane"), 1, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500, offset: 100})
						.setPin("#target")
						.setTween(tween)
						
						.addTo(controller);
	})

  // init controller
            var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "100%"}});

            // build scenes
            new ScrollMagic.Scene({
                            triggerElement: "#parallax1",
                            duration: "10%",
                            
                        })
                    .setTween("#parallax1 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

            new ScrollMagic.Scene({triggerElement: "#parallax2"})
                    .setTween("#parallax2 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                      
                      new ScrollMagic.Scene({triggerElement: "#parallax3"})
                    .setTween("#parallax3 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax4"})
                    .setTween("#parallax4 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax5"})
                    .setTween("#parallax5 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax6"})
                    .setTween("#parallax6 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax7"})
                    .setTween("#parallax7 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax8"})
                    .setTween("#parallax8 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax9"})
                    .setTween("#parallax9 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax10"})
                    .setTween("#parallax10 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax11"})
                    .setTween("#parallax11 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);
                      
                      new ScrollMagic.Scene({triggerElement: "#parallax12"})
                    .setTween("#parallax12 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax13"})
                    .setTween("#parallax13 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax14"})
                    .setTween("#parallax14 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax15"})
                    .setTween("#parallax15 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax16"})
                    .setTween("#parallax16 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                     new ScrollMagic.Scene({triggerElement: "#parallax17"})
                    .setTween("#parallax17 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax18"})
                    .setTween("#parallax18 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax19"})
                    .setTween("#parallax19 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax20"})
                    .setTween("#parallax20 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                    new ScrollMagic.Scene({triggerElement: "#parallax21"})
                    .setTween("#parallax21 > div", {y: "50%", ease: Linear.easeNone, scale: 0.9})
                    .addTo(controller);

                      

                                        
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);
        
    
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 220) {
        $(".earth").addClass("earth2");
    } else {
        $(".earth").removeClass("earth2");
    }
    
});
    
    $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 580) {
        $(".project_title").addClass("project_titlescroll");
    } else {
        $(".project_title").removeClass("project_titlescroll");
    }
    
});
    
     $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 580) {
        $(".projectshidden").addClass("projectsfixed");
    } else {
        $(".projectshidden").removeClass("projectsfixed");
    }
         $(".projectshidden").fadeIn("slow");
    
});

     $(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
                      

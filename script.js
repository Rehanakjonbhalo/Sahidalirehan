gsap.from(".logo, .nav1 , .nav2",{
  y:-100,
  duration:1,
  delay:1,
  stagger:0.5
})

gsap.from(".mainimg",{
   scale:0,
   opacity:0,
   duration:1,

})

gsap.from(".firsttext, .secondtext, .thirdtext",{
    x:-1000,
    duration:2, 
    stagger:0.5
})

gsap.from(".scroll",{
    y:-20,
    yoyo:true,
    repeat:-1,
    duration:0.8,
    opacity:0,
    delay:3
})

// GSAP animation
gsap.from("#page2 .maintxt", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
      trigger: "#page2 .maintxt", // Element that triggers the animation
      start: "top 90%", // Start the animation when 80% of the element is in the viewport
      end: "bottom 20%", // End the animation when 20% of the element is in the viewport
      toggleActions: "play none none none", // How the animation behaves on scroll
      /*markers: true*/ // Add markers for debug
    }
  });
 
  gsap.from("#page2 .kid", {
    opacity: 0,
    duration: 2,
    delay: 1,
    scrollTrigger: {
      trigger: "#page2 .kid", // Element that triggers the animation
      start: "top 90%", // Start the animation when 80% of the element is in the viewport
      end: "bottom 20%", // End the animation when 20% of the element is in the viewport
      toggleActions: "play none none none", // How the animation behaves on scroll
      /*markers: true */// Add markers for debug
    }
  });  

  gsap.from("#page2 .p", {
    y: 100,
    duration: 1,
    delay: 1,
    opacity:-2,
    scrollTrigger: {
      trigger: "#page2", // Change the trigger to the parent container
      start: "top 90%",
      end: "bottom 20%",
      toggleActions: "play none none none",
   /*   markers: true*/
    }
  });

 gsap.from(".works",{
  y: -100,
  opacity: -2,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".works", // Element that triggers the animation
    start: "top 90%", // Start the animation when 80% of the element is in the viewport
    end: "bottom 20%", // End the animation when 20% of the element is in the viewport
    toggleActions: "play none none none", // How the animation behaves on scroll
    /*markers: true*/ // Add markers for debug
  }
 })


 gsap.from(".v1, .v2",{
  opacity: 0,
    duration: 2,
    delay: 1,
    stagger:0.5,
    scrollTrigger: {
      trigger: ".v1, .v2", // Element that triggers the animation
      start: "top 90%", // Start the animation when 80% of the element is in the viewport
      end: "bottom 20%", // End the animation when 20% of the element is in the viewport
      toggleActions: "play none none none", // How the animation behaves on scroll
      /*markers: true */// Add markers for debug
    }
 })
 gsap.from(".card1",{
  opacity: 0,
    duration: 0.5,
    delay: 1,
    stagger:0.5,
    scrollTrigger: {
      trigger: ".card1", // Element that triggers the animation
      start: "top 90%", // Start the animation when 80% of the element is in the viewport
      end: "bottom 20%", // End the animation when 20% of the element is in the viewport
      toggleActions: "play none none none", // How the animation behaves on scroll
      /*markers: true */// Add markers for debug
    }
 })
  

  function typeing(){
// Function to animate typing effect
function animateTyping() {
  // Select the span element within the .secondtext class
  const spanElement = document.querySelector('.secondtext span');

  // Split the text content of the span into an array of characters
  const characters = spanElement.textContent.split("");

  // Set the text content of the span to an empty string
  spanElement.textContent = "";

  // Loop through each character and animate it
  characters.forEach((char, index) => {
    // Create a timeline for each character
    gsap.fromTo(document.createElement('span'),
      { opacity: 0 }, // Start from opacity 0
      { 
        opacity: 1, 
        duration: 0.5, 
        delay: 1.5 + index * 0.1, // Delay each character's animation
        onComplete: function() {
          spanElement.appendChild(document.createTextNode(char));
        } 
      } // End at opacity 1 with animation duration and delay
    );
  });
}

// Animate typing effect initially
animateTyping();

// Repeat the animation using GSAP's repeat option
gsap.set({}, { repeat: -1, onRepeat: animateTyping });

  }

typeing();  


  function openVideoInNewTab(videoUrl) {
      window.open(videoUrl, '_blank');
  }








  
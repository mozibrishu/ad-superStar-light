document.querySelector('.pp_slide_1 .pp_element_1').addEventListener('click', () => {
  gsap.timeline({ defaults: { ease: "power1.inOut" } })
    .to('.pp_slide_1 .pp_element_1', { opacity: 0,display:"hidden" ,duration:1},"<")
    .to('.pp_slide_1 .pp_element_2', { opacity: 0,display:"hidden" ,duration:1},"<")
    .to('.pp_slide_1 .pp_bg', { opacity: 0,display:"hidden" ,duration:1},"<")
    .to('.pp_slide_2 .pp_bg', { opacity: 1,display:"block" ,duration:1},"<")
    .to('.pp_slide_2 .pp_element_1', { opacity: 1,display:"block", duration:1},"<")
    .to('.pp_slide_2 .pp_element_2', { opacity: 1,display:"block", duration:1},"<")
    .to('.pp_slide_2 .pp_element_1', { opacity: 0,display:"hidden" ,duration:1},">")
    .to('.pp_slide_2 .pp_element_2', { opacity: 0,display:"hidden" ,duration:1},"<")
    .to('.pp_slide_2 .pp_element_3', { opacity: 1,display:"block", duration:1},">-.8")
    .to('.pp_slide_2 .pp_element_4', { opacity: 1,display:"block", duration:1},"<.2")
    .fromTo('.pp_slide_2 .pp_element_5',{opacity:0,y:50}, {y:0, opacity: 1,display:"block", duration:1},">-.4")
});


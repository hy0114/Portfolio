

// ** Main Title Text
intro = gsap.timeline({})
intro.from('.sc-about [data-scroll-text] > span',{
  delay:0.2,
  yPercent:100,
  opacity:0,
  stagger:0.1,
  
},'a')


// ** Main - Side Text
intro = gsap.timeline({})
intro.from('.sc-about .about-area [data-scroll-text] span',{
  delay:0.2,
  yPercent:100,
  opacity:0,
  stagger:0.1,
  
},'a')



// ** Main - Project타이틀
a = gsap.timeline({
  scrollTrigger:{
    trigger:".sc-project",
    start:"0% 60%",
    end:"100% 0%",
    // markers:true,
  }
})
a.from('.sc-project .title',{scale:0})
a.from('.sc-project .tag01',{scale:0})
a.from('.sc-project .tag02',{scale:0})
a.from('.sc-project .tag03',{scale:0})



// ** Main - keyword 1300타이틀
gsap.matchMedia().add("(min-width: 1300px)", () => {
  a = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-keyword .headline",
      start:"0% 60%",
      end:"90% 50%",
      // markers:true,
      scrub:0,
    }
  })

  a.to('.sc-keyword .img1',{yPercent:-200,xPercent:-440,rotation:-340 ,scale:0.7},'a')
  a.to('.sc-keyword .img2',{yPercent:-315,xPercent:-350,rotation:-580 ,scale:1.1},'a')
  a.to('.sc-keyword .img3',{yPercent:-200,xPercent:120,rotation:320 ,},'a')


  a.to('.sc-keyword .img4',{yPercent:-262,xPercent:-200,rotation:-470 ,scale:1},'a')




})


// ** Main - keyword 타이틀
gsap.matchMedia().add("(min-width: 769px)", () => {
  a = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-keyword .headline",
      start:"0% 60%",
      end:"90% 50%",
      // markers:true,
      scrub:0,
    }
  })
  a.to('.sc-keyword .img1',{yPercent:-200,xPercent:-440,rotation:-340 ,scale:0.7},'a')
  a.to('.sc-keyword .img2',{yPercent:-315,xPercent:-350,rotation:-580 ,scale:1.1},'a')
  a.to('.sc-keyword .img3',{yPercent:-200,xPercent:120,rotation:320 ,},'a')


  a.to('.sc-keyword .img4',{yPercent:-262,xPercent:-200,rotation:-470 ,scale:1},'a')



})

















// ** Main - Side Btn
intro = gsap.timeline({})
intro.from('.sc-about .btn-black',{
  delay:0.3,
  // yPercent:100,
  opacity:0,
  stagger:0.1,
  ease:'none'
  
  
},'a')


// ** Main - Image Slider

intro.from('.sc-slider .slider-list .slider-item',{
  delay:0.2,
  opacity:0,
  stagger:0.1,
  yPercent:20,
},'a')


gsap.to('#slider-desktop',{
  scrollTrigger:{
      trigger:'#slider-desktop',
      start:"0% 100%",
      end:"100% 0%",
      // markers:true,
      scrub:0,
    },
    xPercent:-50,
    ease:'none'
})


gsap.to('#slider-mobile',{
  scrollTrigger:{
      trigger:'#slider-mobile',
      start:"0% 100%",
      end:"100% 0%",
      // markers:true,
      scrub:0,
    },
    xPercent: -350,
    ease:'none'
})

















// ** Main - Project Title Tag 

Draggable.create(".sc-project .tag03", {type:"x,y",
	bounds:".sc-project .headline",
	edgeResistance:0.5,
	throwProps:true
});
Draggable.create(".sc-project .tag01", {type:"x,y",
	bounds:".sc-project .headline",
	edgeResistance:0.5,
	throwProps:true
});








// ** Main - Project List 마우스커서 이미지 

document.addEventListener("mousemove", (e) => {
  // 마우스 커서의 좌표를 가져옵니다.
  const x = e.clientX;
  const y = e.clientY;

  // cursor_div를 커서 좌표로 이동
  $(".sc-project .cursor_div").css('transform', 'translate(' + x + 'px, ' + y + 'px)');

  // 원하는 영역에 올라오면 클래스 추가 및 제거
  $('#ListHover01').eq(0).on('mouseover', function () {
    $('.sc-project .proj-list .hover01').eq(0).addClass('on');
  });
  $('#ListHover01').eq(0).on('mouseleave', function () {
    $('.sc-project .proj-list .hover01').eq(0).removeClass('on');
  });


  $('#ListHover02').eq(0).on('mouseover', function () {
    $('.sc-project .proj-list .hover02').eq(0).addClass('on');
  });
  $('#ListHover02').eq(0).on('mouseleave', function () {
    $('.sc-project .proj-list .hover02').eq(0).removeClass('on');
  });


  $('#ListHover03').eq(0).on('mouseover', function () {
    $('.sc-project .proj-list .hover03').eq(0).addClass('on');
  });
  $('#ListHover03').eq(0).on('mouseleave', function () {
    $('.sc-project .proj-list .hover03').eq(0).removeClass('on');
  });


  $('#ListHover04').eq(0).on('mouseover', function () {
    $('.sc-project .proj-list .hover04').eq(0).addClass('on');
  });
  $('#ListHover04').eq(0).on('mouseleave', function () {
    $('.sc-project .proj-list .hover04').eq(0).removeClass('on');
  });



});

























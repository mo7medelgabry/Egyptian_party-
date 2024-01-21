





$('#one').click(function(){
    $('.singer-one').slideToggle(1000);
    $('.singer-two').slideUp(1000);
    $('.singer-three').slideUp(1000);
    $('.singer-four').slideUp(1000);

})
$('#two').click(function(){
    $('.singer-one').slideUp(1000);
    $('.singer-two').slideToggle(1000);
    $('.singer-four').slideUp(1000);
    $('.singer-three').slideUp(1000);

})
$('#three').click(function(){
    $('.singer-one').slideUp(1000);
    $('.singer-two').slideUp(1000);
    $('.singer-three').slideToggle(1000);
    $('.singer-four').slideUp(1000);
})
$('#four').click(function(){
    $('.singer-one').slideUp(1000);
    $('.singer-two').slideUp(1000);
    $('.singer-three').slideUp(1000);
    $('.singer-four').slideToggle(1000);
})



// /////////////////////




setInterval(function(){
    let dateTarget = new Date('2024-10-25')
    let myDate = new Date()

    var timeDiff = dateTarget - myDate;
// console.log(timeDiff)
    // let day = myDate.getDay()
    var day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    // console.log(day)
    let houers = myDate.getHours()
    let mins = myDate.getMinutes()
    let secs = myDate.getSeconds()
    
    let elemntDays = document.getElementById("days")
    elemntDays.innerHTML =`${day} D`
    let elemntHour =document.getElementById('hours')
    elemntHour.innerHTML =`${houers} H`
    let elemntmins = document.getElementById("mins")
    elemntmins.innerHTML = `${mins} m`
    let elemntsecs = document.getElementById("secs")
    elemntsecs.innerHTML = `${secs} s`

},1000)



function text(){
    var text = document.getElementById('mytext').value;
    var charCount = 100 - text.length;
    var charele= document.getElementById('char');
    // charele.textContent = charCount + '/100'
    if ( charCount <= 100 && charCount >=0){
        charele.innerHTML = `${charCount}`
    }else{
        charele.innerHTML = `your available character finished`

    }
}


$('.option i').click(function(){
    // console.log('hi')
    let optinWidth = $('.optionSide').outerWidth();
    // console.log(optinWidth)
    $('.option').css({
        left:`-${optinWidth}px`,
        transition:'all 1s'
    })
})
$('.option span').click(function(){
    // console.log('hi')
    let optinWidth = $('.optionSide').outerWidth();
    // console.log(optinWidth)
    $('.option').css({
        left:`0px`,
        transition:'all 1s'
    })
})

$('.nava').click(function(e){
  let sclo  = $(this).attr('href')
 let scrol = $(sclo).offset().top
//   console.log(scrol)
  $('body,html').animate({
    scrollTop:scrol
  },1000)
})
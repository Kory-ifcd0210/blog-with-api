const arrayPhotos=[
    "../assets/img/photopost/0.jpg",
    "../assets/img/photopost/1.jpg",
    "../assets/img/photopost/2.jpg",
    "../assets/img/photopost/3.jpg",
    "../assets/img/photopost/4.jpg",
    "../assets/img/photopost/5.jpg",
    "../assets/img/photopost/6.jpg",
    "../assets/img/photopost/7.jpg",
    "../assets/img/photopost/8.jpg",
    "../assets/img/photopost/9.jpg",
    "../assets/img/photopost/10.jpg",
    "../assets/img/photopost/11.jpg",
    "../assets/img/photopost/12.jpg",
    "../assets/img/photopost/13.jpg",
    "../assets/img/photopost/14.jpg",
    "../assets/img/photopost/15.jpg",
    "../assets/img/photopost/16.jpg"
]




// function printImage3(){
//     //GENERATE RANDOM NUM OF THE ARRAY
//     let randomNumber=Math.floor(Math.random()*arrayPhotos.length)
//     arrayPhotos.forEach( function (element,i) {
//         randomNumber=Math.floor(Math.random()*arrayPhotos.length)
//         $('.divPost').eq(i).css('background-image', 'url(' + arrayPhotos[randomNumber] + ')');
//     })

// }
function printImage(){
    let randomNumber=Math.floor(Math.random()*300)
    $('.divPost').each(function(idx,element){
        let randomNumber=Math.floor(Math.random()*300)
        $(element).css('background-image', `url(https://picsum.photos/500/?${randomNumber})`)
    })
}


//export {printImage}
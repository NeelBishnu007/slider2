const a=document.querySelectorAll('.imgslide');
var counter=0;
a.forEach(function(img,index){
img.style.left=`${index*100}%`

});

function ImgSlide(){
   if(counter==a.length){
    counter=0;
   }
   if(counter<0){
    counter=(a.length)-1
   }


    a.forEach(function(pic){
        pic.style.transform=`translateX(-${counter*100}%)`;
    })
}
 function goback(){
      counter=counter-1;
      ImgSlide()
 }

 function gofront(){
    counter=counter+1;
    ImgSlide()
}

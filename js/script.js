window.addEventListener('load' , ()=>{
    const pads = document.querySelectorAll('.pads div');
    const sounds = document.querySelectorAll('.sound');

    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0 ;
            sounds[index].play();
        })
    });

});
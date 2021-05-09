window.addEventListener('load' , ()=>{
    const pads = document.querySelectorAll('.pads div');
    const sounds = document.querySelectorAll('.sound');
    const visual = document.querySelector('.visual');
    const colors = [
        'rgba(226, 123, 39, 0.87)',
        'rgba(203, 206, 19, 0.87)',
        'rgba(56, 211, 9, 0.87)',
        'rgba(12, 97, 167, 0.87)',
        'rgba(238, 56, 111, 0.699)',
        'rgba(126, 39, 226, 0.87)'
    ]
    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0 ;
            sounds[index].play();
            createBubble(index);
        })
    });


    // crate a function for Bubble Effect
    const createBubble = (index)=>{
        const bubble = document.createElement('div');
        bubble.style.backgroundColor = colors[index];
        visual.appendChild(bubble);
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }

});
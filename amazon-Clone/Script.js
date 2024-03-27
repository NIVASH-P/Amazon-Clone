const imgs = document.querySelectorAll('.header_Slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');


let n = 0;

function changeSlide(){
    for(let i = 0;i<imgs.length;i++)
    {
        imgs[i].style.display = 'block';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click',(event)=>{
    if(n > 0)
    {
        n--;
    }else{
        n=imgs.length - 1;
    }
    changeSlide();
})
next_btn.addEventListener('click',(event)=>{
    if(n < imgs.length -1)
    {
        n++;
    }else{
        n=0;
    }
    changeSlide();
})


const scrollcontainer = document.querySelectorAll('.products');
for (const items of scrollcontainer) {
    items.addEventListener('wheel', (evt) =>{
        evt.preventDefault();
        items.scrollLeft += evt.deltaY;
    })
}
(function click(win,doc){
    let button=document.querySelector('#submit')
    let form1=document.querySelector('#form1')
    let body=document.querySelector('body')
  
    function even(){
        
        event.preventDefault();
        
        form1.classList.add('form-hide')
    }
    button.addEventListener('click',even,false)

    function rolagem(event){
        if(event.animationName==='clik'){
            form1.style.display='none' 
            body.style.overflow='none'   
        }
    }
    form1.addEventListener('animationend',rolagem,false)
    form1.addEventListener('animationstart',(event)=>{
        if(event.animationName==='clik'){
            body.style.overflow='hidden'  
        }
    },false)
})(window,document)
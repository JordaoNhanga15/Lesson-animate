(function click(win,doc){
    let button=document.querySelector('#submit')
    let form1=document.querySelector('#form1')
    let body=document.querySelector('body')
    let input=document.querySelectorAll('.input')

    function even(){
        event.preventDefault();
        for(let i=0;i<input.length;i++){

            if(input[0].value==="" || input[1].value===""){
                
                form1.classList.add('form')
                form1.addEventListener('animationend',(evevnt)=>{
                    if(event.animationName==='nono'){
                        form1.classList.remove('form')  
                    }
                },false)
                
            }
            else{
                form1.classList.add('form-hide')
            }
        } 
        
    }
    button.addEventListener('click',even,false)

    function rolagem(event){
        if(event.animationName==='clik'){
            form1.style.display='none' 
            body.style.overflow='none'   
            //form1.classList.remove('form-hide')
        }
    }
    form1.addEventListener('animationend',rolagem,false)
    form1.addEventListener('animationstart',(event)=>{
        if(event.animationName==='clik'){
            body.style.overflow='hidden'  
        }
    },false)
})(window,document)
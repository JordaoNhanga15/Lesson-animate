(function click(win,doc){
    let button=document.querySelector('#submit')
    let form1=document.querySelector('#form1')
    let body=document.querySelector('body')
    let input=document.querySelectorAll('.input')
    let squares=document.querySelector('.squares')

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
            form1.classList.remove('form-hide')
            //form1.style.display='none' 
            body.style.overflow='none'   
            
        }
    }
    form1.addEventListener('animationend',rolagem,false)
    form1.addEventListener('animationstart',(event)=>{
        if(event.animationName==='clik'){
            body.style.overflow='hidden'  
        }
    },false)

    // squares
    for(let i=0;i<11;i++){
        let li=document.createElement('li')
        const random=(max,min) => Math.random() * (max - min) + min
        let largura=Math.floor( random(120,10))// serve para atribuir a li width e height aleartorio
        const delay =Math.floor(random(5,0.1))
        const duration=Math.floor(random(24,12))
        let position=Math.floor(random(99,1))
        
        /*li.style={
            width:largura+'px',
            height:'40px',
            display:'block',
            position:'absolute',
            backgroundColor:'rgba(255,255,255,0.7)',
            bottom:'-40px',
            margin:'4px'
        }*/
        //li.innerHTML='jordao'
        li.style.width=largura+'px'
        li.style.height=largura+'px'
        li.style.bottom=-largura+'px'
        li.style.left=position+'%'
        li.style.animationDelay=delay+'s'
        li.style.animationDuration=`${duration}s`
        li.style.animationTimingFunction=`cubic-bezier(${Math.random()},${Math.random()},${Math.random()},${Math.random()})`


        li.addEventListener('animationstart',(event)=>{
            if(event.animationName==='up')
            body.style.overflow='hidden'
        },false)
        li.addEventListener('animationend',(event)=>{
            if(event.animationName==='up')
            body.style.overflow='hidden'
        },false)

        squares.appendChild(li)
    }


})(window,document)
(function click(win,doc){
    let button=document.querySelector('#submit')
    let form1=document.querySelector('#form1')
    function even(){
        event.preventDefault();
        //form1.style.background='yellow';
        form1.classList.add('form-hide')
    }
    button.addEventListener('click',even,false)
})(window,document)
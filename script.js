let val = ""
let input = document.querySelector("input")
let buttons  = document.querySelectorAll("button")
Array.from(buttons).forEach(function(button){
    button.addEventListener("click",function(e){
        if(e.target.innerHTML == '='){
            val = eval(val)
            input.value = val
        }
        else if(e.target.innerHTML == 'AC'){
            val = ""
            input.value = val
        }
        else if(e.target.innerHTML == 'DL'){
            val =  "";
            input.value = val
        }
      else{
        console.log(e.target);
        val = val + e.target.innerHTML
        input.value = val
      }
        
    })
})
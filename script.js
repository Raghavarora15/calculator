const collection = document.querySelectorAll('.number,.operator,#reset-key,#output-key,#delete')
const output = document.getElementById('output-box')

collection.forEach((button) => {
  button.addEventListener('click',(e)=>{
    if(button.className == "number"){
      output.value += button.innerText;
     }
    else if(button.className == "operator"){
       if (
         ( "+/x-%".indexOf(output.value.charAt(output.value.length - 1)) !== -1))
      output.value = output.value.substr(0, output.value.length - 1) + button.innerText;
      else {
        output.value += button.innerText;
      }
    }else if(button.id == "reset-key"){
      output.value = "";
    }else if(button.id == "delete"){
      output.value = output.value.substr(0, output.value.length - 1)
    }else if(button.id == "output-key"){
      calculate();
    }
  })
})

function calculate(){
  output.value = eval(output.value)
  if (output.value == "undefined"){
    display.value = "";
  }
}
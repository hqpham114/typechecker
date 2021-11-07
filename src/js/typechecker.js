const sentenceTag = document.querySelector('input[type="text"]');
const outputTag = document.querySelector('textarea.output');
const outputTagOriginalValue = outputTag.value;
const sizeTag = document.querySelector('input[name="typesize"]');
const typesizeTag = document.querySelector('span.typesize-output');
const leadingTag =document.querySelector('input[name="leading"]');
const leadingOutputTag = document.querySelector('span.leading-output');
const checkboxTag = document.querySelector('input[name="italic"]');
const fontFamilyTag = document.querySelector('select[name="font-family"]')
const fontWeightTag = document.querySelector('input[name="fontweight"]');
const colors = document.querySelectorAll('.colors div')

sentenceTag.addEventListener('keyup',function (){
  if(this.value){
    outputTag.value = this.value;
  } else {
    outputTag.value = outputTagOriginalValue
  }

})

outputTag.addEventListener('keyup',function (){
  sentenceTag.value = this.value

})


sizeTag.addEventListener('input', function(){
  outputTag.style.fontSize = this.value + 'px';
  typesizeTag.innerHTML = this.value + 'px';
})

leadingTag.addEventListener('input', function(){
  outputTag.style.lineHeight = this.value ;
  leadingOutputTag.innerHTML = this.value ;
})

checkboxTag.addEventListener('change', function() {

  if(this.checked){
    outputTag.style.fontStyle = 'italic';
  } else{
    outputTag.style.fontStyle = 'normal';
  }})

  fontFamilyTag.addEventListener('input', function(){
    outputTag.style.fontFamily = this.value;
  })

  fontWeightTag.addEventListener('input', function(){
    outputTag.style.fontWeight = this.value;
  })

  colors.forEach(color => {
    color.addEventListener('click', function(){
      outputTag.style.backgroundColor = this.dataset.backgroundcolor;
      outputTag.style.color = this.dataset.color;
      
      colors.forEach(color =>{
        color.classList.remove('selectColor')
      })
        this.classList.add('selectColor');
    
   
    })

  })


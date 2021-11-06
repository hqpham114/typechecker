const sentenceTag = document.querySelector('input[type="text"]');
const outputTag = document.querySelector('textarea.output');
const outputTagOriginalValue = outputTag.value;

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


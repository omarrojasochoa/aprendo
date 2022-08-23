const d=document;
const w=window;
export default function speechReader(){
    const $speechSelect=d.querySelector("#speech-select");
    const $speechTextarea=d.querySelector("#speech-text");
    const $speechBtn=d.querySelector("#speech-btn");

    const speechMessage= new SpeechSynthesisUtterance();
    //console.log(speechMessage);
    let voices=[];
    
    d.addEventListener("DOMContentLoaded",(e)=>{
       // console.log(w.speechSynthesis)
       // console.log(w.speechSynthesis.getVoices())


        w.speechSynthesis.addEventListener("voiceschanged",e=>{
            //console.log(e)
            voices=w.speechSynthesis.getVoices();
            //console.log(voices)
            voices.forEach((voice)=>{
                const $option=d.createElement("option");
                $option.value=voice.name;
                $option.textContent=`${voice.name} **** ${voice.lang}`
            
                $speechSelect.appendChild($option);
            })
        })
    });

    d.addEventListener("change",e=>{
        if(e.target===$speechSelect){
            speechMessage.voice=voices.find(
                (voice)=>voice.name===e.target.value
            )
        }
    });

    d.addEventListener("click",e=>{
        if(e.target===$speechBtn){
            speechMessage.text=$speechTextarea.value;
            w.speechSynthesis.speak(speechMessage)
        }
    });

    
};
const d=document;
export default function speechReader(){
    const $speechSelect=d.querySelector("#speech-select");
    const $speechTextarea=d.querySelector("#speech-text");
    const $speechBtn=d.querySelector("#speech-btn");

    const speechMessage= new SpeechSynthesisUtterance();
    console.log(speechMessage)
}
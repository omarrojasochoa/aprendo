const d=document;
const w=window;
const n=navigator;
export default function webCam(id){
    const $video=d.querySelector(id);
    //console.log(n.mediaDevices.getUserMedia)

    
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true, audio: false})
        .then((stream)=>{
            console.log(stream);
            $video.srcObject=stream
            $video.play()
        })
        .catch((err)=>{
            $video.insertAdjacentHTML("beforebegin",`<p><mark>Este es el error: ${err}</mark></p>`)
           // console.log(`¡Sucedió el siguiente error!: ${err}`)
        });
    }
}
const d= document;
export function shortcuts (e){
    console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    console.log(`Ctrl:${e.ctrlKey}`)
    console.log(`Alt:${e.altKey}`)
    console.log(`Shift:${e.shiKey}`)
    console.log(e)
}
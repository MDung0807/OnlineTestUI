export default function getImage(object){
    let dataUrl = object.src.split(',')
    let base64 = dataUrl[1];
    let mime = dataUrl[0].match(/:(.*?);/)[1];
    let bin = atob(base64);
    let length = bin.length;
// From http://stackoverflow.com/questions/14967647/ (continues on next line)
// encode-decode-image-with-base64-breaks-image (2013-04-21)
    let buf = new ArrayBuffer(length);
    let arr = new Uint8Array(buf);
    bin
        .split('')
        .forEach((e,i)=>arr[i]=e.charCodeAt(0));

    return new File([buf],'image',{type:mime});
}

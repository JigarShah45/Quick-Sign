const colorPicker = document.getElementById('color-picker');
const canvas =document.getElementById('myCanvas');
const canvasColor = document.getElementById('canvasColor');
const fontPicker = document.getElementById('fontPicker');
const clearButton = document.getElementById('clearButton');
const saveButton = document.getElementById('saveButton');
const retrieveButton = document.getElementById('retrieveButton');

const ctx= canvas.getContext("2d");

 colorPicker.addEventListener('change',(e)=>{
    ctx.strokeStyle = e.target.value;
    ctx.fillStyle = e.target.value;
 })

 canvas.addEventListener('mousedown',(e)=>{
   isDrawing = true;
   lastX = e.offsetX;
   lastY = e.offsetY;
 })

 canvas.addEventListener('mousemove',(e)=>{
   if(isDrawing){
     ctx.beginPath();
     ctx.moveTo(lastX,lastY);
     ctx.lineTo(e.offsetX,e.offsetY);
     ctx.stroke();
     lastX = e.offsetX;
     lastY = e.offsetY;
   }
 })

 canvas.addEventListener('mouseup',()=>{
   isDrawing = false;
 })

 canvasColor.addEventListener('change',(e)=>{
   ctx.fillStyle = e.target.value;
   ctx.fillRect(0,0,800,500)
 })

 fontPicker.addEventListener('change',(e)=>{
   ctx.lineWidth = e.target.value;
 })

 clearButton.addEventListener('click',()=>{
   ctx.clearRect(0,0,canvas.width,canvas.height);
 })

 saveButton.addEventListener('click',()=>{
   localStorage.setItem('canvasContent',canvas.toDataURL());
   let link = document.createElement('a');
   link.download="my-canvas.png";
   link.href=canvas.toDataURL();
   link.click();
 })

 retrieveButton.addEventListener('click',()=>{
   let savedCanas = localStorage.getItem('canvasContent');
   if(savedCanas){
      let image = new Image();
      image.src = savedCanas;
      ctx.drawImage(image,0,0)
   }
 })
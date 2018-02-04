

          $("#downlowd").click(function(){
              html2canvas(document.querySelector("#capture")).then(canvas => {
    //document.body.appendChild(canvas)
canvas.toBlob(function(blob) {
            saveAs(blob, "output.png");
        }, "image/png");

});
            
          });


  
   
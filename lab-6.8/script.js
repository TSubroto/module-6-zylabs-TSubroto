function drawTriangle(triangleSize) {

   for (i = 1; i <= triangleSize; i++) {
      let line = "";

      for (x = 1; x <= i; x++) {
         line += "*";
      }
      console.log(line);
   }
}
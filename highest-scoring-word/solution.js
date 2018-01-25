function high(x) {
   let currentTotal = 0;
   let lastTotal = 0;
   let highWord = '';
   var xx = x.split(' ');
   for (let i = 0; i < xx.length; i++) {
       currentTotal = 0;
      for (j = 0; j < xx[i].length; j++) {
           currentTotal += (xx[i].charCodeAt(j) - 96);
      }
       if (currentTotal > lastTotal) {
          highWord = xx[i];
          lastTotal = currentTotal;
          currentTotal = 0;
       }
  }
return(highWord);
}

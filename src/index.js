module.exports = function getZerosCount(number, base) {
  
   var pseudoBase, a = 0,c,pseudoNum, psNum, z;
    pseudoNum = number;
    pseudoBase = base;
    for(let i = 2; i <= base; i++){
      if(pseudoBase % i == 0){
        a = 0;
        while(pseudoBase % i == 0){
          a++;
          pseudoBase = Math.floor(pseudoBase/i);
      }
      z = 0;
        psNum = number;
        while (psNum/i > 0){
          z+=Math.floor(psNum/i);
          psNum = Math.floor(psNum/i);
      }
      if(pseudoNum > z/a){ 
        pseudoNum=z/a;
      } 
    }
  }
  return Math.floor(pseudoNum);
}

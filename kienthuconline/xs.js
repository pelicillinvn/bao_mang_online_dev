var xs = [
    [12,25,26,28,33,46,22],
    [06,17,37,41,48,50,13],
    [04,08,14,21,30,49,38],
    [11,17,22,28,39,49,43],
    [04,25,28,32,33,55,03],
    [09,25,27,32,37,46,23],
    [03,08,09,40,44,48,02],
    [06,08,23,25,33,35,27],
    [08,22,29,43,45,54,23],
    [23,25,28,49,52,54,44],
    [04,06,19,26,38,41,16],
   
]

  random = () => {
     const a1 = Math.floor(Math.random()*56 + 1);
     const a2 = Math.floor(Math.random()*56 + 1);
     const a3 = Math.floor(Math.random()*56 + 1);
     const a4 = Math.floor(Math.random()*56 + 1);
     const a5 = Math.floor(Math.random()*56 + 1);
     const a6 = Math.floor(Math.random()*56 + 1);
     const a7 = Math.floor(Math.random()*56 + 1);
      Arr = [a1, a2, a3, a4, a5, a6,a7];
      return Arr.sort(function(a, b){
        return  a - b;
    })
  } 
  random();
     checkArr = (arr, size) => {
        for(let i=0; i< size-1; i++) {
            for(let j= i+1; j<size; j++){
               if(arr[i] == arr[j]) {
                   return arr;
               } else {
                   random();
               }
            }
        }
}
checkArr(Arr, 7);
//console.log(Arr)
// console.log(Arr.sort(function(a, b){
//     return  a - b;
// }))
 for (let i=0; i< xs.length; i++){
    
    var l = 0;
    var XS = xs[i].sort(function(a, b){
        return  a - b;
    });
    for(let a=0; a< 7; a++ ) {
        
       if(Arr[a] === XS[a]) {
       
          return l++;
         //console.log(l)
       }
      
    }
    
    //console.log(l);
   
 }
 console.log(l)
    if(l === 7) {
        console.log('random')
        random();
    } else {
        console.log(Arr)
        
    }  
 


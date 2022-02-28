


// abcedcld
// ['abc','edc,'ldx']




const HighdivideString = (s, k, fill) => {
    const result = []
    if (s.length % k) {
      s += fill.repeat(k - s.length % k)
    }
    for (let i = 0; i < s.length; i ++) {
      result.push(s.slice(i, i + k))
      i += k - 1
    }
    return result
  }



var divideString = function(s, k, fill) {
let textArray=s.split('')
let window=k;
let sd=[];
let part='';
let x=0;
while (x<window && x<textArray.length) {

part+= textArray[x];

if(window===1+x){
sd.push(part)
window+=k;
part='';
console.log(x);
}

x++;
if(!(x<window && x<textArray.length)){
if(!!part){
sd.push(part)    
}else{
window-=k;    
}
}
}


if(window>textArray.length){
let a =window-textArray.length
for (let d = 0; d < a; d++) {
sd[sd.length-1]+=fill    
}
}



return sd
};



// var mostWordsFound = function(sentences) {

//     let len =sentences[0].split(' ').length;    
//     for (let x = 0; x < sentences.length; x++) {
//         let sp=sentences.split(' ').length;
//         if(len < sp){
//             len = sp;
//         }
//     }    
//     return len;
// };


var mostWordsFound = function(sentences) {
    let maxValues=[];
        for (let x = 0; x < sentences.length; x++) {
            let sp=sentences.split(' ').length;
            maxValues.push(sp);
        }    
        return Math.max()
    };
    



    // var balancedStringSplit = function(s) {
    //   let text='';
    //   let count =0;
    //   s.split('').forEach((char)=>{
    //     text+=char;
    //    let m=text.split('');
    //    let lenL= m.filter((v)=>v==='L').length;


    //    let lenR=m.length - lenL;
    //    if(lenL===lenR){
    //     count++;
    //     text=''
    //    }


    //   })

    //   return count
    // };


    var balancedStringSplit = function(s) {
      let lenL=0;
      let lenR=0;
      let count =0;
      s.split('').forEach((char)=>{
        if(char==='L'){
          lenL++;
        }else{
          lenR++;
        }
       if(lenL===lenR){
        count++;
        lenL=0;
        lenR=0;
       }
      })

      return count
    };



    // var reversePrefix = function(word, ch) {
    // let text='';
    // let wordArr=word.split("")
    // let x = 0;
    // let rev=""


    //   while (x<wordArr.length && wordArr[x]!==ch) {
    //     text+=wordArr[x];
    //     x++
    //   }

    //   if(wordArr[x]===ch){
    //     text+=wordArr[x];
    //     let ar=text.split('')
    //     for (let y = ar.length-1; y >=0; y--) {
    //       rev+=ar[y];
    //     }
    //     rev+=word.substring(x+1)
    //   }else{
    //     rev=word
    //   }

    //   return rev
    // };



    var reversePrefix = function(word, ch) {
  
      let rev=""
  
      let indx=word.indexOf(ch)
      console.log(indx)
      if(indx<0){
        return word
      }
  
      let text=word.substring(0,indx+1)
      let org=word.substring(indx+1);

          let ar=text.split('')
          for (let y = ar.length-1; y >=0; y--) {
            rev+=ar[y];
          }
          rev+=org

        return rev
      };




      // var restoreString = function(s, indices) {
      //   let text="";
      //   let hash={};

      //   let low=0;
      //   let high=indices.length-1;

      //   while (low<=high) {
      //     hash={
      //       ...hash,
      //       ["x"+indices[low]]:s.charAt(low),
      //       ["x"+indices[high]]:s.charAt(high)
      //     }
      //     low++;
      //     high--;
      //   }
      //   console.log(hash)
      //   for (let x = 0; x <s.length; x++) {
      //     text+=hash["x"+x]
      //   }        
      //   return text
      // };





var restoreString = function(s, indices) {
let d=Array.from(indices);
indices.forEach((num,index)=>{
d[num]=s.charAt(index)
})

return d.join("")
};

   

// var countConsistentStrings = function(allowed, words) {
    
// let count=0;

// words.forEach((word)=>{
// let e=word.split("")
// let x= 0;
// while (x <e.length && allowed.indexOf(e[x])>=0){
//   x++;
// }

// if(x===e.length){
// count++
// }

// })



// return count
// };




var countConsistentStrings = function(allowed, words) {
  
  let set=new Set(allowed); 
let ac=words.reduce((a,w)=>{
return w.split("").every((char)=> set.has(char))?a:a+1;
},0)
  
  return ac
  };










  var getConcatenation = function(nums) {
    
let len =nums.length*2
let arr=[];
let x = 0;
let i = 0;


while (x<len) {

arr.push(nums[i])
if(i===nums.length-1){
i=0;
}else{

i++;

}
x++;
}
return arr
  };









  var sumZero = function(n) {
  
    
let x = 0 ;
let arr= [];
let value=Math.floor((n/2)-1);

while (x<n) {
arr.push(value)
value--;
  x++;
}



return arr
  };



  let s = sumZero(5)
console.log(s);
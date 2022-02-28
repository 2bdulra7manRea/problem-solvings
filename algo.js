// ** Linear Search 

function LinearSearch(arr,element){

// ! O(n);

for(let x = 0 ; x < arr.length ; x++){

if(arr[x]===element){
    return x;
}

}

return -1;
}


function LinearSearchImproved(arr, element){

let left = 0 ;
let len = arr.length;
let right = len-1;
let index=-1;


for(left=0 ; left<=right ;){


if(arr[left]===element){
    index=left;
    break;
}

if(arr[right]===element){
    index=right;
    break;
}

left++;
right--;
}

return index;
}


// ** Binary Search


function BinarySearch(arr ,low,high, element){

// ! should be sorted 

if(low<=high){

let mid=Math.floor((low+high)/2)
/*
* the middle of the array and compare it with value if larger the so we will substr
* the array 
*
*
*/
if(element===arr[mid]){
// ! element in mid
return mid;
}else if(element < arr[mid]){
// ! left;
return BinarySearch(arr,low,mid,element)
}else if(element > arr[mid] ){
// ! right
return BinarySearch(arr, mid,high,element)
}
}

return -1;
}


// ** Jump Search
// skipping pattern 
// skip number of the array in the index 
// that in the index length
// every time increase the steps as long as the value smaller then the target;
// once the value is larger then target value, break while , so we got the value in the last step 
// we have the var that stores the last step 
// and we have the target into that ; 
// here we should linear search does it own while unit find the value 
// once the values is larger then target  so got the target or maybe it is not found at all ;
// if condition 

function JumpSearch(arr,x ,n){

let step=Math.sqrt(n);

let prev=0;
while(arr[step] < x){
prev=step;
step+=Math.sqrt(n);
if(step >= n){
    return -1;
}
}



while (arr[prev]<x) {
prev++;
    if(prev>=n){
        return -1;
    }
}


if(arr[prev]===x){

return prev
}



return -1;

}

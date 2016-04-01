var messyArr = [3,1,5,8,4,2];

function mergeSort(arr) {

//break it up into smaller bits
if (arr.length <=1) {
  return arr;
}

var left = [];
var right = [];

for (var i in arr){
  if(i % 2 === 0){
    left.push(arr[i]);
  } else{
    right.push(arr[i]);
  }
}

left = mergeSort(left);
right = mergeSort(right);

return merge(left, right);
}



function merge(left, right) {
  var result = [];

  while(left.length !== 0 && right.length !== 0) {
    if(left[0] <= right[0]){
      result.push(left[0]);
      left.shift();
    } else{
      result.push(right[0]);
      right.shift();
    }
  }

  while(left.length !== 0){
    result.push(left[0]);
    left.shift();
  }
   while(right.length !== 0){
    result.push(right[0]);
    right.shift();
  }

  return result;


}

mergeSort(messyArr);
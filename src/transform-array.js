//import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  
 if (Array.isArray(arr) == false) {throw new Error ("'arr' parameter must be an instance of the Array!")}
let myArr = arr.slice(0);
   for (let i=0; i<myArr.length; i++) {
    if (myArr[i] == '--double-next') {
      myArr[i+1] !== undefined ? myArr.splice(i, 1, myArr[i+1]) : myArr.splice(i, 1);
      }     
      if (myArr[i] == '--discard-next') {
      myArr[i+1] == undefined ? myArr.splice(i, 1) : (myArr[i+2] == '--discard-prev' || myArr[i+2] == '--double-prev') ? myArr.splice((i+1), 1) : myArr.splice(i, 2);
     }
      if (myArr[i] == '--double-prev') {
        myArr[i-1] == undefined ?  myArr.splice(i, 1) : myArr[i-1] == '--discard-next' ? myArr.splice((i-1), 2) : myArr.splice(i, 1, myArr[i-1]);
        }
      if (myArr[i] == '--discard-prev') {
      myArr[i-1] == undefined ? myArr.splice(i, 1) : myArr.splice((i-1), 2);
     }
   }
  
  return myArr
 }
 

console.log(transform([ 1, 2, 3, '--discard-next', 4, 5 ]))


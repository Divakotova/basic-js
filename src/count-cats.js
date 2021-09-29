//import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
    let count = 0;
    console.log(matrix)
    for (let i= 0; i<matrix.length; i++) {
     matrix[i].filter(el => el === '^^').length>0 ? count += matrix[i].filter(el => el === '^^').length : count
   }
  return count
  } console.log(countCats([
    [0, 1, '^^'],
    [0, '^^', '^^'],
    ['^^', 1, 2], ['^^', 1, 2], ['^^', 1, 2], ['^^', 1, 2]
    ]))
 

 

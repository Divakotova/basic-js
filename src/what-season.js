//import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if ((Object.prototype.toString.call(date) !== '[object Date]' || Object.keys(date).length>0) && arguments.length>0) {throw new Error ('Invalid date!')}
  if (JSON.stringify(arguments) === '{}' && date instanceof Function === false) {return `Unable to determine the time of year!`}
 let month = date.getMonth();
 if (month == 0 || month == 1 || month == 11) {
return 'winter'
 } 
 else if (month>1 && month<5) {
   return 'spring'
 }
 else if (month>4 && month<8) {
  return 'summer'
}
else  {
  return 'autumn'
}
  
 
}
console.log(getSeason(new Date(2013, 2, 30)))
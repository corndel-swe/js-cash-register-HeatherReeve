import { drawer } from '../drawer.js'

// Level 2

/**
 * Goes through the given drawer and counts how many *coins* there are in total
 * N.b. just the number of coins, not the total value of them
 * N.b. $1 is a note, not a coin
 * @param {object[]} drawer
 * @returns {number} How many coins are in the drawer
 */
export function countCoins(drawer) {
  // code here
  //totalCoins variable 
  //loop through object 
  //if coin 
  //add object.quantity to totalcones
 
 let totalCoins = 0 
 for (let item of drawer) {
  if (item.value < 100) {
    totalCoins+= item.quantity
    
  }
  
 }
 return totalCoins

}

/**
 * Same as count coins but for *notes* instead
 * @param {object[]} drawer
 * @returns {number} How many notes are in the drawer
 */
export function countNotes(drawer) {
  // code here
  let totalNotes = 0 
  for (let item of drawer) {
   if (item.value >= 100) {
     totalNotes+= item.quantity
     
   }
   
  }
  return totalNotes
 
 }
 


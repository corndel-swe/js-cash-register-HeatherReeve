import { drawer } from '../drawer.js'

// Level 3

/**
 * Calculates the total value of all money in the drawer
 * Give the answer as a string formatted in dollars, i.e. "$23.78" not 2378
 *
 * Consider using the .toFixed() method:
 * https://www.w3schools.com/jsref/jsref_tofixed.asp
 *
 * @param {object[]} - drawer
 * @returns {string} The amount of money in the drawer formatted in dollars
 */
export function sumDrawer(drawer) {
  // code here
  let totalValue = 0 

  for (let item of drawer){
    if (item.value && item.quantity) {
  const itemValue = item.value * item.quantity
  totalValue+= itemValue

}

  }
  const formattedValue = '$' + (totalValue / 100).toFixed(2)
  return formattedValue
}

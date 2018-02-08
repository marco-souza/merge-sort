/**
 * Binary Search (Functional Programing)
 * Author: Marco Antônio
 *
 *  How is it works?
 * -----------------
 *
 * binarySerach function receives a lists and a number to search if exists
 * It returns the position if the number exists inside that list, or -1 if it doesn't
 *
 * - if list have more than one element
 *    - if the item in the half of the list is equal to the search number, return true
 *    - else
 *        - if item in the half of the list it's bigger than searched number
 *          - re-search using the first half of this list
 *          - re-search using the second half of this list
 * - else return
 *    - 0 if the searched item is in the first position
 *    - or -1 if the item doesn't exists
 *
 */

const { round } = Math;

interface valueMap {
    'val': number,
    'key': number,
}

const binarySearch = (list: Array<valueMap>, n: number): number => {
    const half = round(list.length/2)
    return list.length > 1
        ? list[half].val === n
            ? list[half].key
            : list[half].val > n
                ? binarySearch(list.slice(0, half), n)
                : binarySearch(list.slice(half), n)
        : list[0].val === n
            ? list[0].key
            : -1
}

// Wrap function to get position
const search = (list: Array<number>, num: number): number => binarySearch(
    list.map((val, key): valueMap => ({ val, key })),
    num
)
export default search;
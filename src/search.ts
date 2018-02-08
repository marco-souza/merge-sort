/**
 * Binary Search (Functional Programing)
 * Author: Marco Antônio
 *
 *  How is it works?
 * -----------------
 *
 * binarySerach function receives a lists, a number and if you want the position or not
 * It returns the position if the number exists on that list, or -1 if it doesn't
 * - if list have more than one element
 * - if B empty, returns A
 * - if A[0] less than B[0], returns a new list with A[0] as the first item
 *      and the merge result between remaining A and B
 * - if B[0] less than A[0], returns a new list with B[0] as the first item
 *      and the merge result between A and remaining B
 *
 */

const { round } = Math;

const binarySearch = (list: Array<number>, n: number, position = false): boolean|number => {
    const half = round(list.length/2)
    return list.length > 1
        ? list[half] === n
            ? half
            : list[half] > n
                ? binarySearch(list.slice(0, half), n, position)
                : binarySearch(list.slice(half), n, position)
        : list[0] === n
            ? 0
            : -1
}

export default binarySearch;
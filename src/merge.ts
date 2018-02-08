/**
 * Merge Sort (Functional Programing)
 * Author: Marco Antônio
 *
 *  How is it works?
 * -----------------
 *
 * Merge function have to lists, A and B
 * - if A empty, return B
 * - if B empty, return A
 * - if A[0] less than B[0], return a new list with A[0] as the first item
 *      and the merge result between remaining A and B
 * - if B[0] less than A[0], return a new list with B[0] as the first item
 *      and the merge result between A and remaining B
 *
 */
const merge = (listA: Array<number>, listB: Array<number>): Array<number> => listA.length === 0
    ? listB
    : listB.length === 0
        ? listA
        : listA[0] < listB[0]
            ? [listA[0], ...merge(listA.slice(1), listB)]
            : [listB[0], ...merge(listA, listB.slice(1))]

export default merge;
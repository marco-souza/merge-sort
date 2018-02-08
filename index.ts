import merge from './src/merge'
const { random, round } = Math

const mergeSort = (list: Array<number>): Array<number> =>
    list.length < 2
        ? list
        : merge(
            mergeSort(list.slice(0, round(list.length / 2))),
            mergeSort(list.slice(round(list.length / 2), list.length))
        )

const genList = (n = 100, curr = []): Array<number> =>
    n > 0
        ? genList(n-1, [...curr, round(random()*1000)])
        : curr


const arr = genList(10)
console.log(`Original Array: [${arr.join(' ')}]`);
console.log(`Sorted Array: [${mergeSort(arr).join(' ')}]`);
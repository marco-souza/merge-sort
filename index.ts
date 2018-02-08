import merge from './src/merge'
const { random, round } = Math
const { argv } = process

const mergeSort = (list: Array<number>): Array<number> =>
    list.length < 2
        ? list
        : merge(
            mergeSort(list.slice(0, round(list.length / 2))),
            mergeSort(list.slice(round(list.length / 2), list.length))
        )

const genList = (n, curr = []): Array<number> =>
    n > 0
        ? genList(n-1, [...curr, round(random()*1000)])
        : curr

const items = argv.length > 2
    ? parseInt(argv[2])
    : 10

const arr = genList(items)
console.log(`\nOriginal Array(${items}) -> [${arr.join(' ')}]\n`)
console.log(`Sorted Array(${items}) -> [${mergeSort(arr).join(' ')}]\n`)
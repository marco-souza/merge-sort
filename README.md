# Functional Merge Sort

Functional implementation of quick sort in TypeScript.

## Why Merge Sort?

Merge Sort is **as faster as** Quick Sort `O( n * log(n) )` but in the worst case, Merge sort is **more stable**!

Quick sort have complexity of `O( n^2 )` in the worst case, while Merge Sort maintains `O( n * log (n) )`.

## To run

1. Of course, first of all, you need to run `yarn` to install the dependencies.

2. To run you just need to `yarn start` and it will run with a random list of 10 items between 0 and 999.

3. If you wish to test for bigger lists, you can specify the list size running: `yarn start <list-size>`, for example, `yarn start 100`.
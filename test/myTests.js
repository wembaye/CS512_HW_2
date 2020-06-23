
let assert = require('assert')


//a function that accepts two arrays and returns an array that holds sum of elements in each indices 
function sumOfTwoArrays(arr1, arr2) {

    //declaring empty array for holding sums in each indices
    let sumArray = []




    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        sumArray.push((arr1[i] || 0) + (arr2[i] || 0));
    }

    let last_elems_sum = arr1[arr1.length - 1] + arr2[arr2.length - 1]
    let sumArray_last = sumArray[sumArray.length - 1]
    if (arr1.length == 0 && arr2.length == 0) {
        return 0
    } else if (sumArray.length == arr1.length || sumArray.length == arr2.length) {
        return true;
    } else if (sumArray_last !== last_elems_sum ||
        sumArray_last !== arr2[arr2.length - 1] ||
        sumArray_last !== arr1[arr1.length - 1]) {
        return false;

    }



}

function mySubstring(str, begin, end) {
    if (typeof (str) !== String || str.length == 0 || begin<0 || end>str.length-1) {
        return null
    }
   
    let sub_length = 0;
    if (end) {
        sub_length = end
    } else {
        sub_length = str.length - 1
    }
    let sub_elem = ''
    let substr = str.split('')

    for (let i = begin; i <= sub_length; i++) {
        sub_elem += substr[i]
    }
   
    return sub_elem;
}


describe('HW1', function () {


    describe('Q1', function () {
        it('arraySum', function () {
            assert.equal(sumOfTwoArrays([4, 5, 6], [1, 2, 3]), true)
        })

        it('arraySum', function () {
            assert.equal(sumOfTwoArrays([4, 5, 6], [1, 2]), true)
        })

        it('arraySum', function () {
            assert.equal(sumOfTwoArrays([0, 0], [0, 0]), true)
        })

        it('arraySum', function () {
            assert.equal(sumOfTwoArrays([], []), 0)
        })



    })

    describe('mySubstring function Test', function () {
        it('substring', function () {
            assert.equal(mySubstring('This is awesome', 3, 6), 's is')
        })

        it('substring', function () {
            assert.equal(mySubstring('This is awesome', 0, 6), 'This is')
        })

        it('substring', function () {
            assert.equal(mySubstring('This is awesome', 5), 'is awesome')
        })

        it('substring', function () {
            assert.equal(mySubstring('This is awesome', 0), 'This is awesome')
        })
    })

})
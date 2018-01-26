function bruteForceTwoSum(array, sum) {
    let results = [];
    let length = array.length;

    for (let i = 0; i < length; i++) {
        let num = array.shift()
        for (let n = 0; n < array.length; n++) {
            if (num + array[n] === sum) {
                results.push([num, array[n]])
            }
        }
    }
    return results
}

function mergeSort(array) {
    let results = []

    if (array.length < 2) {
        results.push(array[0])
    } else {
        let midpoint = array.length / 2
        let firstHalf = array.slice(0, midpoint)
        let secondHalf = array.slice(midpoint, array.length)

        let first = mergeSort(firstHalf)
        let second = mergeSort(secondHalf)
        results = results.concat(merge(first, second))
    }

    return results
}

function merge(firstHalf, secondHalf) {
    let sorted = [];
    let currentMin;

    while (!!firstHalf && !!secondHalf && firstHalf.length != 0 && secondHalf.length != 0) {
        let currentMin = findMinAndRemove(firstHalf, secondHalf)
        sorted.push(currentMin)
    }

    if (!!firstHalf && !secondHalf) {
        return sorted.concat(firstHalf)
    } else if (!!secondHalf && !firstHalf) {
        sorted.concat(secondHalf)
    } else if (!firstHalf && !secondHalf) {
        return
    } else {
        return sorted.concat(firstHalf).concat(secondHalf)
    }
}

function findMinAndRemove(firstHalf, secondHalf) {
    let minFirstHalf = firstHalf[0];
    let minSecondHalf = secondHalf[0];

    if (minFirstHalf < minSecondHalf) {
        return firstHalf.shift()
    } else {
        return secondHalf.shift()
    }
}

function binarySearchTwoSum(array, sum) {
    let results = [];
    let sortedArray = mergeSort(array)

    console.log("sortedArray")
    console.log(sortedArray)
    console.log("array")
    console.log(array)

    for (let i = 0; i < array.length; i++) {
        let num = array[i]
        let missingNum = sum - num

        if (binaryMatch(sortedArray, missingNum)) {
            results.push([num, missingNum])
        }
    }
    return results
}

function binaryMatch(array, num) {
    if (array.length < 2) {
        if (array[0] == num) {
            return true
        } else {
            return false
        }
    } else {
        let midpoint = array.length / 2
        let firstHalf = array.slice(0, midpoint)
        let secondHalf = array.slice(midpoint, array.length)
        if (secondHalf[0] > num) {
            binaryMatch(firstHalf, num)
        } else {
            binaryMatch(secondHalf, num)
        }
    }
}

// function hashTwoSum(array, sum) {

// }

let array = [2, 3, 4, 3, 6, 7]
let sum = 6
binarySearchTwoSum(array, sum)

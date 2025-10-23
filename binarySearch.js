const sortedArr = [0, 7, 15, 63, 67, 99, 192, 321, 725, 999, 1000]

/** Виконує бінарний пошук елемента у відсортованому масиві
 * @param {Array} arr
 * @param {number} value
 * @returns {number | null}  // повертає індекс знайденого елемента або null якщо не знайдено
 */

function binarySearch(arr, value) {
    if (!Array.isArray(arr) || arr.length === 0) return null

    let startIndex = 0
    let endIndex = arr.length - 1

    while (startIndex <= endIndex) {
        const midIndex = Math.floor((startIndex + endIndex) / 2)

        if (arr[midIndex] === value) return midIndex
        if (value < arr[midIndex]) endIndex = midIndex - 1
        else startIndex = midIndex + 1
    }

    return null
}

const a = binarySearch(sortedArr, 192)
console.log(a)
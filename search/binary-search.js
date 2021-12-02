//search for value in array; return index if found, -1 if not; array must be sorted
function binarySearch(arr,value) {
    let left = 0;
    let right = arr.length - 1;
    let middle;
    while (arr[middle] !== value && right >= left) {
        middle = Math.floor((right+left) / 2);
        
        if (value > arr[middle]) left = middle + 1;
        if (value < arr[middle]) right = middle - 1;
    }
    
    return arr[middle] === value ? middle : -1;
}
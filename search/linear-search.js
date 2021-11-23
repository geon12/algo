function linearSearch(arr,value){
    for (let i=0;i < arr.length;i++){
        if (arr[i] === value) return i;
    }
    return -1;
}

let search = linearSearch([0,31,-1,2,3,6],3)
console.log(search)//4
search = linearSearch([0,31,-1,2,3,6],21)
console.log(search)//-1
search = linearSearch(["a","ad","er","were","wolf"],"ad")
console.log(search)//1
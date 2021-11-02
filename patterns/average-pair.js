//given sorted array of integers, see if there is a pair values whose average equals the target average

function averagePair(arr,target){
    let left = 0;
    let right = arr.length -1;
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2.0;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            left++;
        }
        else {
            right--;
        }
        
    }
    return false;
  }

  console.log(averagePair([1,2,3],2.5))//true
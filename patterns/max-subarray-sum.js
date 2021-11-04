//find max sum of subarray using sliding window

function maxSubarraySum(arr,n){
    if (arr.length < n) return null;
    let sum = 0;
    for (let i=0;i<n;i++) {
        sum += arr[i];
    }
    let maxSum = sum;
    
    for (let j=n;j<arr.length;j++) {
        sum = sum + arr[j] - arr[j-n];
        
        if (sum > maxSum) maxSum = sum;
    }
    
    return maxSum;
  }

  console.log(maxSubarraySum([100,200,300,400],2)) //700
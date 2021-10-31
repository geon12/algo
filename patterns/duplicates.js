//takes in variable number of arguments and checks for duplicates

function areThereDuplicates() {
    const lookup = {};
    let args = [...arguments]
    for (let arg of args) {
        if(lookup[arg]) {
            return true;
        } else {
            lookup[arg] = true;
        }
    }

    return false;
}

function areThereDuplicatesOneLine() {
    return new Set(arguments).size !== arguments.length;
}

function areThereDuplicatesPointers(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}


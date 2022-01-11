// # 1
// Testing 1-2-3
// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

function a(arr){
    let newObj = {};
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
      newObj[i+1] = `${arr[i]}`;
    }

    for(const property in newObj) {
        newArr.push(`${property}: ${newObj[property]}`)
    }
    
    return newArr;
  }

  a([`a`, `b`, `c`]);



// # 2
// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/train/javascript

    const arr = N => {
        const newArr = [];
        for(i = 0; i < N; i++){
        newArr.push(i);
        }
        return newArr;
  };


// # 3
// Drone Fly-By
// https://www.codewars.com/kata/58356a94f8358058f30004b5/train/javascript

function flyBy(lamps, drone){
    let newArr = [...lamps]
    for(let i = 0; i < drone.length && i < lamps.length; i++){
      newArr[i] = `o`;
    }
    console.log(newArr);
    let newStr = newArr.join(``);
    return newStr;
    // console.log(newStr);
    // console.log('oooooooooooo');
  }

  flyBy("xxxxxxxxxxxx", "============T");

// # 4
// Get the mean of an array
// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/javascript

function getAverage(marks){
    let marksTotal = 0;
    let marksAvg = 0;
    for(i = 0; i < marks.length; i++) {
      marksTotal += marks[i];
      marksAvg = Math.floor(marksTotal / marks.length);
    }
    
    return marksAvg;
  }

  getAverage([2,2,2,2]);
// #5
// THE SOUL OF WIT: REVERSE AN ARRAY
// https://www.codewars.com/kata/59b81886460387d8fc000043



//would love to go over in class
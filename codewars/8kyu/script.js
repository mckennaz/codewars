// Task
// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
//My solution

function flickSwitch(arr){
    let b = true;
    return arr.map(e => {
      if(e === "flick") b = !b;
      return b;
    });
  }
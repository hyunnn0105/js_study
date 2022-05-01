var sqrt = n => n ** 2;
console.log(`${sqrt(4)}`);


//정보처리기사


// compute(4) ->  return compute(3) + compute(1)
// compute(3) ->  return compute(2) + compute(0)
// compute(2) ->  return compute(1) + compute(-1)
// compute(1) ->  return 1;
// compute(0) ->  return 0;
// compute(-1) -> return -1;

// ----------------------------------------

// compute(4) ->  return 0 + 1 = 1
// compute(3) ->  return 0 + 0 = 0
// compute(2) ->  return 1 + -1 = 0
// compute(1) ->  return 1;
// compute(0) ->  return 0;
// compute(-1) -> return -1;




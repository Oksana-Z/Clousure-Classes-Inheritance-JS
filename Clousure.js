function createCounter() {
  let count = 1;

  return () => { 
    console.log (count++); 
  };
}

let countInvokations = createCounter()
countInvokations (); // 1
countInvokations (); // 2
countInvokations (); // 3




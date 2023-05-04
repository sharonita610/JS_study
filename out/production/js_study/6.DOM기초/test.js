let x = 1;

function func() {
  let x = 2;
  console.log(x); // ReferenceError: Cannot access 'x' before initialization
}

func();
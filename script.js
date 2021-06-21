Strange instanceof
importance: 5
In the code below, why does 
instanceof return true? We can easily see that a is not created by B().

function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true

## attempt at solution

Yeah, looks strange indeed.

But instanceof does not care about the function, 
but rather about its prototype, that it matches against the prototype chain.

And here a.__proto__ == B.prototype, so instanceof returns true.

So, by the logic of instanceof, the prototype actually defines 
the type, not the constructor function.

// instanceof only cares about the prototype chain, not the function.

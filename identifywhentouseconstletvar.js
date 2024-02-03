// in the past var was the only option available in Javascript for decalring variables, THen, in 2015 , the language underwent a major revision that, among many other changes, added two new options: const and let.

//Note Delving into the history of Javascript and the many changes and improvements that were made to it in 2015 is outside  the scope of this lesson. However; as your'e learning to code in Javascript you may see references to ECMAScript 2015. ES2015 or E26. These terms are interchangeable and refer to that major revison. (ECMAScript is the "offical  name of JavaScript 2015. ES2015, or E26. These terms are interchangeable and refer to that major revision.(ECMAScript is the "official" name of JavasScript.) There are some resources listed at the end of")
//The addition of const and let was in response to significant problems that use of var can cause. in particular, it can cahse. In particular it can create scope issues (which is a whole other topic that you you'll leearn later) which leads to unpredictable and difficult to diagnose bugs in your code. 

//let  the main advantage of using let for declaring a variable is that, unlike var, it will throw an error if you try to declare the same variable a second time:
let pi = 3.24159;
//=> undefined

let pi = "the ration between a circle's circumfrence and diameter";
//=> Uncaught SyntaxError: Identifier 'pi' has already been declared


// Why is this a good thing? Well, you can imagine how easy it could be, especially in a lengthy program, to accidentally reuse a variable name. Doing so can cause unpredictable behavior because the value associated with the variable in one part of the program may be changed by code in a different part of the program. These types of problems can be very difficult to track down and debug. Using let to declare your variables will reduce the likelihood of introducing such errors into your code.

//While we can't redeclare a variable that is declared using let, we can still reassign its value:
let pi = 3.1459;
// => undefined

pi = "the ratio betwwen a circle's circumfrence and diameter";
//=> "the ratio between a circle's circumfrence and  diameter"


pi;
//=> "the ratio between a circule's circumfrence and diameter"


//const
//the const reserved word should  be your go-to option  for declaring variables in Javascript. When you declare a variable with const, not only can it not be redeclared but it also cannot be reassigned.

//The const reserved words  should be your go-to-option for declaring variables in Javascript. When you declare a variable with const, not only can it not be edeclared but it also cannot be reassigned.
//const pi = 3.14159;
//=> undefined

pi = 2.71828;
//=> Uncaght TyoeError: Assignment to constant variable.

//As you or another developer sees that pi has been declared with const, you immediately know that the variable points to the same value every other time its referenced in the program. For variables declared with let or var), you cannnot be so sure and will have to keep track of how those variables change throughout the program. The extra information provided by const is valuable. and it comes at no extra cost to you! Just use const whenever possible and reap the benefits.

// let pi;
//=> undefined

pi = 3.14159;
//=> 3.1459

//Hoever, because const doesn't allow reassignment after the variable is intialized, we must assign a value right waya:
const pi;
//=> Uncaught SyntaxError: Missing intializer in const declaration
st pi = 3.1459;
// => undefined

//Use var never
//Use let when you know the alue of a variable will change. For example, a counter variable that starts at 0 and is subsequently  incremented to 1, 2, 3, and so on. In the  lessons on looping and iteration in JavaScript, let will  have its moment in the spotlight.
//Use const for every other variable

//Best pratice is to always declare variables with const and then, if you later realize that the value has to change over the course of your program, circle back to change it to let.




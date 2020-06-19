// // 1) Assign a function to variable.
// function sayHello(){
//     return "Hello World"
// }

// sayHello();
// let fn = sayHello; // Passing a reference of a function variable.
// fn();

// // 2) pass function as an argument to another function.
// function greet(fnMessage){
//     console.log(fnMessage());
// }

// Also known as "Higher order function"
// A function which takes function as arg or return a function known as "HOF".
// Ex : map function, setTimeout()

// greet(sayHello); //Pass only reference - sayHello, not with ().

// // 3) Return a function from another function.

//  function returnAfunction(){
//      return function(){ // Annonymous function. Because it does not have a name.
//         return "Hello World."
//      }
//  }

//  let fnn = returnAfunction(); // This return a function and assign it to variable fnn.
//  let msg = fnn(); // call here.

// import { produce } from "immer";

// let book = { title: "Harry potter" };

// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.ispulish = true;
//   });
// }

// let newBook = publish(book);

// console.log(newBook);
// console.log(book);

import store from "./store";
import { bugAdded, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("Store state is changed.", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});

console.log(store.getState());

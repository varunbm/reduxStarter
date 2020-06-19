import { produce } from "immer";

let book = { title: "Harry potter" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.ispulish = true;
  });
}

let newBook = publish(book);

console.log(newBook);
console.log(book);

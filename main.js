const List = require("./linkedList");

//look ar book authour
//look through books to find the earliest author it can go behind
//insert
//look at next book author

function booksSort(books) {
  let swaps = 0;
  if (books.length === 0) {
    return;
  }
  do {
    // console.log(books);
    swaps = 0;
    for (let i = 0; i < books.length; i++) {
      if (books[i] < books[i - 1]) {
        let temp = books[i];
        books.splice(i, 1);
        swaps++;
        for (let j = 0; j < books.length; j++) {
          if (temp < books[j]) {
            // console.log(j, temp, books[j]);

            books.splice(j, 0, temp);

            break;
          }
        }
      }
    }
  } while (swaps !== 0);

  return books;
}

// function booksSort(books){
//   let swaps = 0
//   let i =0
//   do {
//     swaps = 0
//     for(let)

//   }
//   while(swaps !== 0)
// }

// function booksSort(books) {
//   let swaps = 0;
//   if (books.length === 0) {
//     return;
//   }
//   do {
//     console.log(books);
//     swaps = 0;
//     for (let i = 0; i < books.length; i++) {
//       for (let j = 0; j < books.length; j++) {
//         if (books[i] < books[j]) {
//           books.splice(j - 1, 0, books[i]);
//           console.log("splice", i, books.splice(i, 1));
//           swaps++;
//           break;
//         }
//       }
//     }
//   } while (swaps !== 0);

//   return books;
// }

function randomize(arr) {
  for (let i = 0; i < arr.length; i++) {
    let die = Math.floor(Math.random() * arr.length - 1) + 1;

    if (i !== die) {
      swap(arr, i, die);
    }
  }
  return arr;
}

function bucketSort(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp[arr[i]] = arr[i];
  }
  let result = [];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== undefined) {
      result.push(temp[i]);
    }
  }
  return result;
}

function displayList(list) {
  let currNode = list.head;
  while (currNode) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  return null;
}

function mergeLinkedList(list) {
  let holderA = [];
  let currNode = list.head;
  let result = new List();
  while (currNode) {
    holderA.push(currNode.value);
    currNode = currNode.next;
  }
  let holderB = mSort(holderA);
  for (let i = 0; i < holderB.length; i++) {
    result.insertLast(holderB[i]);
  }
  return result;
}
let data = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  91,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}
function mSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

function main() {
  //console.log(mSort(data));
  //console.log(qSort(data));
  let test = new List();
  test.insertFirst(4);
  test.insertLast(5);
  test.insertLast(3);
  test.insertLast(2);
  test.insertLast(9);
  test.insertLast(13);
  //displayList(mergeLinkedList(test));
  let testy = [];
  testy[3] = 3;
  //console.log(testy[0]);
  //console.log(bucketSort([7, 3, 89, 2, 6, 1, 12]));
  //console.log(randomize([7, 3, 89, 2, 6, 1, 12]));
  console.log(booksSort(["c", "h", "a", "d"]));
}
main();

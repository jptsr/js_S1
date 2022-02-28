// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

let arr = [2, 4, 14, 10, 90, 23, 16];

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        sortArr(arr);
        document.getElementById("numbers").value = arr;
    });

})();

function sortArr(array) {
    done = false;
    while (!done) {
      done = true;
      for (let i = 1; i < array.length; i ++) {
        if (array[i - 1] > array[i]) {
          let tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
          done = false;
        }
      }
    }
    return array;
}
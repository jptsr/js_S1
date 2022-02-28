// 05-arrays/09-rand-array-stats/script.js - 5.9: random & statistics array

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", function(){
        let arr = [], sum = 0, average = 0;

        for(let i = 0; i < 10; i++){
            arr[i] = Math.floor(Math.random() * 11);
            document.getElementById("n-" + (i+1)).innerHTML = arr[i];
            sum += arr[i];
        }

        document.getElementById("min").innerHTML = Math.min(...arr);
        document.getElementById("max").innerHTML = Math.max(...arr);
        document.getElementById("sum").innerHTML = sum;
        average = sum / arr.length;
        document.getElementById("average").innerHTML = average;
    });
})();

// 08-dom/08-generate-table-two/script.js - 8.8: creating a table (2)

(() => {

    // your code here

    // CREATE TABLE
    let table = document.createElement("table");
    table.id = "tbl";
    document.getElementById("target").appendChild(table);

    // CREATE BODY TABLE
    let t_body = document.createElement("tbody");
    t_body.id = "tBody";
    document.getElementById("tbl").appendChild(t_body);

    // CREATE 10 ROWS
    let arr_tr = [];
    for(let i = 0; i < 10; i++){
        let tr = document.createElement("tr");
        tr.id = "t_row";
        document.getElementById("tBody").appendChild(tr);
        arr_tr.push(tr);
    }

    // FOR EACH ROW CREATE 10 COLUMNS
    let mult = 0;
    arr_tr.forEach(element => {
        mult++;
        console.log(mult);

        for(let i = 0; i < 10; i++){
            let th = document.createElement("th");
            element.appendChild(th);
            th.innerHTML = (i + 1) * mult;
        }
    }); 
})();

// 08-dom/07-generate-table-one/script.js - 8.7: creating a table (1)


(() => {

    // your code here
    let table = document.createElement("table");
    table.id = "tbl";
    document.getElementById("target").appendChild(table);

    let t_head = document.createElement("thead");
    t_head.id = "tHead";
    document.getElementById("tbl").appendChild(t_head);

        let tr1 = document.createElement("tr");
        document.getElementById("tHead").appendChild(tr1);
    
    let t_body = document.createElement("tbody");
    t_body.id = "tBody";
    document.getElementById("tbl").appendChild(t_body);

        for(let i = 0; i < 10; i++){
            let tr2 = document.createElement("tr");
            document.getElementById("tBody").appendChild(tr2);
        }
        
})();

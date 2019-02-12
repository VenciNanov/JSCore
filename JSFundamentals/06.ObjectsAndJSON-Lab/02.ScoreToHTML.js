function solve(input) {
    let array = JSON.parse(input);
    debugger;

    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
     }

    console.log("<table>");
    console.log("<tr><th>name</th><th>score</th></tr>");
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        console.log(`   <tr><td>${escapeHtml(element.name)}</td><td>${element.score}</td></tr>`)
        
    }
    console.log("</table>")

}

solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')
window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector('body');
    let textNodes = [];                             

    function recursy(elem) {
        elem.childNodes.forEach((item) => {
            if (item.nodeName.match(/^H\d/)) {      
                const obj = {
                    header: item.nodeName,          
                    content: item.textContent       
                };
                textNodes.push(obj);               
            } else {
                recursy(item);
            }
        });
    }

    recursy(body);
    console.log(textNodes);
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
            "Conten-Type": 'application/json'
        },
        body: JSON.stringify(textNodes)
    }).then(res => res.json()).then(res => console.log(res));
});
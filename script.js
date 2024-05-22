var parent_div = document.createElement("div");
parent_div.className = "main";

document.body.append(parent_div);

function day(data) {
    setTimeout(() => {
        parent_div.innerHTML = data;
    }, 10000);

}

function data(callback) {
    var x = 0;
    for (let i = 10; i > 0; i--) {
        setTimeout(() => {
            parent_div.innerHTML = `Count down starts: ${i}`;
        }, x);
        x += 1000;
    }
    callback("Happy Independence Day");
}
data(day);

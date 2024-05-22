var parent = document.createElement("div");
parent.className = "main";

document.body.append(parent);

function day(data) {
    setTimeout(() => {
        parent.innerHTML = data;
    }, 10000);

}

function data(callback) {
    var x = 0;
    for (let i = 10; i > 0; i--) {
        setTimeout(() => {
            parent.innerHTML = `Count down starts: ${i}`;
        }, x);
        x += 1000;
    }
    callback("Happy Independence Day");
}
data(day);

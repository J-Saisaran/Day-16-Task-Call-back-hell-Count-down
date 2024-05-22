var parent_div = document.createElement("div");
parent_div.className = "main";
parent_div.setAttribute("style", "font-size: 50px; margin: 250px;text-align: center;")

print_data(print_day)

document.body.append(parent_div);

function print_day(data) {
    setTimeout(() => {
        parent_div.innerHTML = data;
    }, 10000);

}

function print_data(callback) {
    var x = 0;
    for (let i = 10; i > 0; i--) {
        setTimeout(() => {
            parent_div.innerHTML = `Count down starts: ${i}`;
        }, x);
        x += 1000;
    }
    callback("Happy Independence Day");
}
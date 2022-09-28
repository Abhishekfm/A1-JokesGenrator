const data = fetch("https://api.chucknorris.io/jokes/random");
let ele = document.getElementById("joke");
let btn = document.getElementById("jokeBtn");
ele.innerText = "";

get_joke();

function change_joke(val) {
    ele.innerText = val;
}

function get_joke(){
    const data = fetch("https://api.chucknorris.io/jokes/random");
    var val;
    data.then((response)=>{
        return response.json();
    }).then((users)=>{
        val = users["value"];
        change_joke(val);
    });
}



btn.addEventListener("click",()=>{
    get_joke();
})
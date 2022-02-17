let input = document.getElementById("input");
let delete1 = document.getElementById("exit");
let button = document.getElementById("button");
let ul = document.getElementById("ul");


button.addEventListener("click", ()=>{
    


    if(input.value == ""){
        alert("Please fill out the form!!!");
    }
    else{
        let button2 = document.createElement("button");
        button2.innerHTML = "✓ "
        ul.appendChild(button2);
        

        let list = document.createElement("li");
        list.innerHTML=input.value
        ul.appendChild(list);
        list.style.fontSize = "2rem";
        list.className="check";

        let button1 = document.createElement("button");
        button1.innerHTML = " ✘"
        ul.appendChild(button1);
        let empty = document.createElement("br");
        ul.appendChild(empty)
        
    
input.value=""

button1.addEventListener("click", ()=>{

        ul.removeChild(list);
        ul.removeChild(button1);
        ul.removeChild(button2);

    });

button2.addEventListener("dblclick", ()=>{
        
        list.style.textDecoration = "none"
        list.style.color = "white"
               
    });
button2.addEventListener("click", ()=>{

        list.style.textDecoration = "line-through"
        list.style.color = "red"
        
    });
}   
});   

delete1.addEventListener("click", ()=>{
    window.location.reload(false)
});


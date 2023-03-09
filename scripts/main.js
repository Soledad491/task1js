import SearchFilters from "./filterbusq";
import filterbusq from "./filterbusq";

type="module"
let eventscard = ["Collectivies Party", "Korean Style", "text", "text", "text", "text", "text", "text", "text" ]

let eventname = document.getElementById("eventname")

let Search = document.getElementById("Search")

 function dibujarlista(arrayeventscard){
    
    eventname.innerHTML =""
    arrayeventscard.forEach((card-title) =>{
        let listItem = document.createElement("li")
        listItem.innerHTML = card-title
    
        eventname.appendChild("listItem")
     })
}

dibujarlista(namee)

Search.addEventListener("change",()=>{
    let eventosflitrados = namee.filter((namee)=> namee.tolowerCase().incluides(Search.value.tolowerCase()))

    console.log(eventosflitrados);
})

SearchFilters(".cardfilter",".row")

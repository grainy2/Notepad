const Save = document.getElementById("save")
const Clear = document.getElementById("delete")
const NotePad = document.getElementById("notepad")


window.onload = function(){
    
    Save.addEventListener("click", function(){
    localStorage.setItem("notepad", NotePad.value)
})

    if("notepad"){
    NotePad.value = localStorage.getItem("notepad") 
    }

    
    Clear.addEventListener("click", function(){
    localStorage.clear()
    NotePad.value = ""
})

}



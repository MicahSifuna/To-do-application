function newElement() {
      let li = document.createElement("LI")
      let inputValue = document.getElementById("myinput").value 
      let t = document.createTextNode(inputValue)
      li.appendChild(t)
      if(inputValue === "") {
            alert("Please type something to the input field!")
      }else {
            document.getElementById("mylist").appendChild(li)
      }

      document.getElementById("myinput").value = "";
      // add the close button to the new created elemnt in the list

      let span = document.createElement("SPAN")
      let txt = document.createTextNode("\u00D7")
      span.className = "close"
      span.appendChild(txt)
      li.appendChild(span)

      for(i = 0; i < close.length; i++){
            close[i].onclick = function () {
                  let div = this.parentElement
                  div.style.display ="none"
            }
      }

}

// create the close button and append it to each default item in the list

let myListNode = document.getElementsByTagName("li")

for (i = 0; i < myListNode.length; i++) {
      let span = document.createElement("SPAN")
      let txt = document.createTextNode("\u00D7")
      span.className = "close"
      span.appendChild(txt)
      myListNode[i].appendChild(span)
}

// click on the close button to hide/delete the item in the list

let close = document.getElementsByClassName("close")

for(i = 0; i < close.length; i++){
      close[i].onclick = function (){
            let div = this.parentElement
            div.style.display = "none"
      }
}

// add the checked symbol to the list on clicking the item

let list = document.querySelector("ul")
list.addEventListener("click", function(event){

      if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked")
      }
},false
);
var  mybutton = document.getElementById("button");
mybutton.addEventListener("click", function(event)
      {
    var element = document.getElementsByTagName("div");
    for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}
    
});

window.addEventListener("click", event => 
     {
    
     if (event.target.nodeName != "BUTTON") 
     {
        let dot = document.createElement("div");
        dot.className = "dot";
        dot.style.left = (event.pageX - 4) + "px";
        dot.style.top = (event.pageY - 4) + "px";
        document.body.appendChild(dot);
    }  
  });
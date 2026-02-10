document.getElementById("myInput").addEventListener("change",(event)=>{
    // here event is the syntheitic event which comes under addeventlistener's callback function. It will print the event object which stores all information about the form tag.
    console.log(event.target.value);
    document.getElementById("output").ATTRIBUTE_NODE.textContent=change detected;
})
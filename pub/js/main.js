var el=document.getElementById("elementoutput"),p=document.createElement("p"),node=document.createTextNode("Hello! I am the element maker JS. I made this element to talk to you.");p.appendChild(node),el.appendChild(p);var output=document.getElementById("greeteroutput");output.innerHTML="Hello from greeter.js! If everything is working as it should, you should see this message. Beneath me should be images, minified through our automated task. Say hi to my JavaScript friends, the element maker and the messenger!",console.log("Hello from messenger.js!");var footer=document.querySelector("footer");footer.innerHTML="Hello. I have commandeered your footer and am printing text to it from messenger.js. I am also in your console log. This gulp demo was made by Nils Paulsson (nipa1902).";
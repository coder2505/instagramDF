

document.addEventListener("DOMContentLoaded", () => {

    chrome.storage.sync.get("key", (result) => {
        const toggle = document.getElementById("toggle");
        if(result.key) toggle.checked = true;
        else toggle.checked = false;



    });  

    document.querySelectorAll(".input_custom").forEach((input)=>{
        chrome.storage.sync.get([input.id],(result)=>{
            if(result[input.id])input.checked = true;
            else input.checked = false;
        });
    });

});




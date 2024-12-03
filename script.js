window.addEventListener("load",() =>{
    const needs=document.querySelectorAll(".sound");
    const sec=document.querySelectorAll(".sec div");
    const animate=document.querySelector(".animate");
    const colors=[
       " #8a2be2",
       "#5f9ea0",
       "#9acd32",
       "#d8bfd8"
    ];

    sec.forEach((secs,index) =>{
        secs.addEventListener("click",function(){

            needs[index].play();
            createBubbles(index);
        });
    });
    const createBubbles=(index) =>{
        const bubble=document.createElement("div");
        animate.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation="jump 1s ease";
    };

});

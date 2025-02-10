document.querySelector(".video-image").addEventListener("click",()=>{
    document.getElementById("videoPopup").style.display = "flex";

})

document.querySelector(".close").addEventListener("click",()=>{
    document.getElementById("videoPopup").style.display = "none";
    let iframe = document.getElementById("youtube-player");
    iframe.src = iframe.src;
})
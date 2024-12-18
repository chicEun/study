const java = document.querySelector(".java");

java.innerHTML = "우리 교수님 쵝오 Good~!";

java.style.color = "blue";

function btnClik() {
    const btnPush = document.getElementById("btn-push");
        if(btnPush.style.display === "none") {
            btnPush.style.display = "block";
            btnPush.innerHTML = "힝 속았지롱~~~";
        }else {
            btnPush.style.display = "none";
        }
}

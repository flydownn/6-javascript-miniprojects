const sideBar = document.querySelector(".sidebar");
const quitbtn = document.querySelector(".quit")

function openSideBar(){
    sideBar.classList.toggle('show');
}
function closeSideBar(){
    sideBar.classList.remove('show')
}

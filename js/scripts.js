function openNav() {
    var sideNav = document.getElementById("sideNav");
    sideNav.style.width = "15%";
    sideNav.style.boxShadow = "1px 1px 5px 5px rgba(0, 0, 0, .15)";
    sideNav.style.border = "1px solid rgba(255, 255, 255, 0.15)";
}

function closeNav() {
    var sideNav = document.getElementById("sideNav");
    sideNav.style.width = "0%";
    sideNav.style.boxShadow = "none";
    sideNav.style.border = "none";
}
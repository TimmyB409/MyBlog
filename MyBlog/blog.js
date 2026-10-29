const navBar = document.getElementById("nav-bar")

document.addEventListener("DOMContentLoaded", ()=> {
    loadNavBar();
})

function loadNavBar(){
    const nav = document.createElement("nav");
    const home = document.createElement("a");
    home.append("Home")
    home.href = "home.html";
    const gallery = document.createElement("a");
    gallery.href = "gallery.html"
    gallery.append("Gallery")
    const contact = document.createElement("a");
    contact.href = "contact.html";
    contact.append("Contact")


    nav.append(home, gallery, contact);
    navBar.append(nav);
}
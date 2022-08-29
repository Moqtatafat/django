setInterval(() => {
    document.getElementsByClassName("hdr-lst")[0].style.height = window.innerHeight - 300 + "px";
}, 0);

document.body.onscroll = () => {
    document.getElementsByTagName("header")[0].style.position = (window.scrollY + window.innerHeight >= document.getElementsByTagName("footer")[0].offsetTop) ? "absolute" : "fixed";
    document.getElementsByTagName("header")[0].style.top      = (window.scrollY + window.innerHeight >= document.getElementsByTagName("footer")[0].offsetTop) ? (document.getElementsByTagName("footer")[0].offsetTop - document.getElementsByTagName("header")[0].clientHeight) + "px" : "0px";
};
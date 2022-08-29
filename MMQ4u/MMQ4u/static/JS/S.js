for (let i = 0; i < document.getElementsByClassName("mnu-lst-inac").length; i++) {
    document.getElementsByClassName("mnu-lst-inac")[i].onclick = () => {
        document.getElementsByClassName("mnu-lst-inac")[i].classList.toggle("mnu-lst-acti");
        check_lst();
    };
};
function check_lst() {
    for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
        document.getElementsByClassName("lib-lst")[x].style.display = "none";
    if (document.getElementsByClassName("mnu-lst-inac")[0].classList[1] == "mnu-lst-acti")
        for (let y = 0; y < document.getElementsByClassName("lib-lst").length; y++)
            if (document.getElementsByClassName("lib-lst")[y].getAttribute("id")[9] == "0")
                document.getElementsByClassName("lib-lst")[y].style.display = "inline-flex";
    if (document.getElementsByClassName("mnu-lst-inac")[1].classList[1] == "mnu-lst-acti")
        for (let y = 0; y < document.getElementsByClassName("lib-lst").length; y++)
            if (document.getElementsByClassName("lib-lst")[y].getAttribute("id")[9] == "1")
                document.getElementsByClassName("lib-lst")[y].style.display = "inline-flex";
    if (document.getElementsByClassName("mnu-lst-inac")[2].classList[1] == "mnu-lst-acti")
        for (let y = 0; y < document.getElementsByClassName("lib-lst").length; y++)
            if (document.getElementsByClassName("lib-lst")[y].getAttribute("id")[13] == "0")
                document.getElementsByClassName("lib-lst")[y].style.display = "inline-flex";
    if (document.getElementsByClassName("mnu-lst-inac")[3].classList[1] == "mnu-lst-acti")
        for (let y = 0; y < document.getElementsByClassName("lib-lst").length; y++)
            if (document.getElementsByClassName("lib-lst")[y].getAttribute("id")[13] == "1")
                document.getElementsByClassName("lib-lst")[y].style.display = "inline-flex";
    if (document.getElementsByClassName("mnu-lst-inac")[4].classList[1] == "mnu-lst-acti")
        for (let y = 0; y < document.getElementsByClassName("lib-lst").length; y++)
            if (document.getElementsByClassName("lib-lst")[y].getAttribute("id")[11] == "0")
                document.getElementsByClassName("lib-lst")[y].style.display = "inline-flex";
    if (document.getElementsByClassName("mnu-lst-inac")[5].classList[1] == "mnu-lst-acti")
        for (let y = 0; y < document.getElementsByClassName("lib-lst").length; y++)
            if (document.getElementsByClassName("lib-lst")[y].getAttribute("id")[11] == "1")
                document.getElementsByClassName("lib-lst")[y].style.display = "inline-flex";

    if (document.getElementsByClassName("mnu-lst-inac")[0].classList[1] == undefined && document.getElementsByClassName("mnu-lst-inac")[1].classList[1] == undefined && document.getElementsByClassName("mnu-lst-inac")[2].classList[1] == undefined && document.getElementsByClassName("mnu-lst-inac")[3].classList[1] == undefined && document.getElementsByClassName("mnu-lst-inac")[4].classList[1] == undefined && document.getElementsByClassName("mnu-lst-inac")[5].classList[1] == undefined)
        for (let x = 0; x < document.getElementsByClassName("lib-lst").length; x++)
            document.getElementsByClassName("lib-lst")[x].style.display = "inline-flex";
};


for (let i = 0; i < document.getElementsByClassName("optn-gndr-inac").length; i++) {
    document.getElementsByClassName("optn-gndr-inac")[i].onclick = () => {
        for (let x = 0; x < document.getElementsByClassName("optn-gndr-inac").length; x++)
            document.getElementsByClassName("optn-gndr-inac")[x].classList.remove("optn-gndr-acti");
        document.getElementsByClassName("optn-gndr-inac")[i].classList.add("optn-gndr-acti");
    };
};
document.getElementsByClassName("optn-lvl-inac")[0].onclick = () => {
    document.getElementsByClassName("optn-lvl-inac")[0].classList.add("optn-lvl-acti");
    document.getElementsByClassName("optn-lvl-inac")[1].classList.remove("optn-lvl-acti");

    document.getElementsByClassName("calc")[0].children[1].children[0].children[1].children[0].children[1].children[0].disabled = false;
};
document.getElementsByClassName("optn-lvl-inac")[1].onclick = () => {
    document.getElementsByClassName("optn-lvl-inac")[1].classList.add("optn-lvl-acti");
    document.getElementsByClassName("optn-lvl-inac")[0].classList.remove("optn-lvl-acti");

    document.getElementsByClassName("calc")[0].children[1].children[0].children[1].children[0].children[1].children[0].disabled = true;
};
for (let i = 0; i < document.getElementsByClassName("optn-sys-inac").length; i++) {
    document.getElementsByClassName("optn-sys-inac")[i].onclick = () => {
        for (let x = 0; x < document.getElementsByClassName("optn-sys-inac").length; x++)
            document.getElementsByClassName("optn-sys-inac")[x].classList.remove("optn-sys-acti");
        document.getElementsByClassName("optn-sys-inac")[i].classList.add("optn-sys-acti");
    };
};

document.getElementsByClassName("optn-gndr-inac")[0].click();
document.getElementsByClassName("optn-lvl-inac")[1].click();
document.getElementsByClassName("optn-sys-inac")[1].click();
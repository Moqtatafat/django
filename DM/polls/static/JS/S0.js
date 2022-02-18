function setID(_elmnt) {
    _parent = _elmnt.getAttribute("id");
    for (let i = 0; i < _elmnt.children.length; i++)
        _elmnt.children[i].setAttribute("id", _parent + "_" + i);
};
setID(document.getElementsByClassName("opn")[0]);
for (let i = 0; i < document.getElementsByClassName("opn")[0].children.length; i++) {
    setID(document.getElementsByClassName("opn")[0].children[i]);
    for (let x = 0; x < document.getElementsByClassName("opn")[0].children[i].children.length; x++)
        setID(document.getElementsByClassName("opn")[0].children[i].children[x]);
};
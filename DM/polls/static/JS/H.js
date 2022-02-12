var _h   = document.getElementsByClassName("hdr")[0],
    _lst = document.getElementsByClassName("hdr-lst"),
    _sld = document.getElementsByClassName("sld")[0],
    _scb = document.getElementsByClassName("scl-btn")[0],
    _scl = 0;
window.onscroll = () => {
    if (window.scrollY > 0) {
        _h.style.background = "rgba(255,255,255,1)";
        for (let i = 0; i < 4; i++) {
            _lst[i].classList.add("blk");
        };
    } else {
        _h.style.background = "none";
        for (let i = 0; i < 4; i++) {
            _lst[i].classList.remove("blk");
        };
    };
};

function setID(_elmnt) {
    _parent = _elmnt.getAttribute("id");
    for (let i = 0; i < _elmnt.children.length; i++) {
        _elmnt.children[i].setAttribute("id", _parent + "_" + i)
    };
};
setID(_sld);
for (let i = 0; i < _sld.children.length; i++) {
    setID(_sld.children[i]);
    setID(_sld.children[i].children[0]);
    setID(_sld.children[i].children[0].children[0]);
};
// setInterval(() => {
//     if (_scl >= _sld.scrollHeight - _sld.clientHeight) {
//         _scl = 0;
//     } else {
//         _scl += _sld.clientHeight;
//     };
//     _sld.scrollTo(0, _scl);
// }, 4000);
setID(_scb);
setInterval(() => {
    _scb.style.marginTop                        = (350 - (_scb.clientHeight / 2)) + "px";
}, 0);
for (let i = 0; i < _scb.children.length; i++)
    _scb.children[i].setAttribute("onclick", "sldFun(" + i + ")");
function sldFun(x) {
    _scl = _sld.clientHeight * x;
    _sld.scrollTo(0, _scl);
};
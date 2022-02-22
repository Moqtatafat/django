var _h   = document.getElementsByClassName("hdr")[0],
    _lst = document.getElementsByClassName("hdr-lst"),
    _sld = document.getElementsByClassName("sld")[0],
    _scb = document.getElementsByClassName("scl-btn")[0],
    _scl = 0;
window.onscroll = () => {
    if (window.scrollY > 0) {
        _h.style.background = "rgba(255,255,255,1)";
        _h.style.boxShadow  = "0 5px 5px 0 rgba(18,63,82,0.04), 0 0 0 1px rgba(176,181,193,0.2)";
        for (let i = 0; i < 4; i++)
            _lst[i].classList.add("blk");
    } else {
        _h.style.background = "none";
        _h.style.boxShadow  = "none";
        for (let i = 0; i < 4; i++)
            _lst[i].classList.remove("blk");
    };
};

if (_sld != undefined) {
    setInterval(() => {
        _scb.style.marginTop = (350 - (_scb.clientHeight / 2)) + "px";
    }, 0);
    for (let i = 0; i < _scb.children.length; i++)
        _scb.children[i].setAttribute("onclick", "sldFun(" + i + ")");
    function sldFun(x) {
        _scl = _sld.clientHeight * x;
        _sld.scrollTo(0, _scl);
    };
};
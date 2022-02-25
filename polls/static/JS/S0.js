if (document.getElementsByClassName("opn").length != 0)
    for (let x = 0; x < document.getElementsByClassName("opn-par").length; x++)
        for (let y = 0; y < document.getElementsByClassName("opn-par")[x].children[1].children.length; y++)
            for (let z = 0; z < document.getElementsByClassName("opn-par")[x].children[1].children[y].children[0].children[1].children.length; z++)
                document.getElementsByClassName("opn-par")[x].children[1].children[y].children[0].children[1].children[z].children[0].value = x + "-" + y + "-" + z;
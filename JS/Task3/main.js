function CreateHeader() {
    let header;
    let h1;
    let nav;

    header = document.createElement("header");
    h1 = document.createElement("h1");
    nav = GeneratedNavigation();

    header.appendChild(h1);
    header.appendChild(nav);
    return header;
}

function GeneratedNavigation() {

    let nav;
    let h2;
    let ul;
    let li;
    let a;

    nav = document.createElement("nav");
    h2 = document.createElement("h2");
    ul = document.createElement("ul");
    for (let index = 0; index < 83; index++) {
       li = document.createElement("li");
              
        ul.appendChild(li);

    }
    nav.appendChild(ul);
    return nav;
}

function CreateDom() {
    document.body.innerHTML = '';
    let header = CreateHeader();
    document.body.appendChild(header);
    console.log(document);
}

CreateDom();
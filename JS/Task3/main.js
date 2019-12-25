function createHeader() {
    let header;
    let h1;
    let nav;

    header = document.createElement("header");
    h1 = document.createElement("h1");
    nav = generatedNavigation();

    header.appendChild(h1);
    header.appendChild(nav);
    return header;
}

function generatedNavigation() {

    let nav;
    let h2;
    let ul;
    let li;
    let a;
    nav = document.createElement('nav');
    h2 = document.createElement('h2');
    nav.appendChild(h2);
    ul = document.createElement('ul');
    for (let index = 0; index < 83; index++) {
        li = document.createElement('li');
        a = document.createElement('a');
        a.setAttribute('href', '#');
        li.appendChild(a);
        a = document.createElement('a');
        a.setAttribute('href', '#');
        li.appendChild(a);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
    return nav;
}

function createArticle() {
    let article;
    let header;
    let section;
    article = document.createElement('article');
    article.setAttribute('role', 'main');
    header = generatedArticleHeader();
    article.appendChild(header);
    section = generatedArticleFirstSection();
    article.appendChild(section);
    section = generatedArticleSecondSection();
    article.appendChild(section);
    return article;
}

function generatedArticleHeader() {
    let header;
    let h2;
    let abbr;
    let p;
    let dfn;
    header = document.createElement('header');
    h2 = document.createElement('h2');
    abbr=document.createElement('abbr');
    h2.appendChild(abbr);
    header.appendChild(h2);
    p = document.createElement('p');
    abbr=document.createElement('abbr');
    abbr.setAttribute('title','Kibibyte');
    p.appendChild(abbr);
    dfn = document.createElement('dfn');
    dfn.setAttribute('title','1024 bytes');
    p.appendChild(dfn);
    abbr=document.createElement('abbr');
    p.appendChild(abbr);
    header.appendChild(p);
    return header;
}

function generatedArticleFirstSection() {
    let section;
    let h2;
    let p;
    let span;
    let cite;
    let abbr;
    let a;
    let b;
    section = document.createElement('section');
    h2 = document.createElement('h2');
    section.appendChild(h2);
    p = document.createElement('p');
    span = document.createElement('span');
    span.setAttribute('id','zengarden-age');
    p.appendChild(span);
    a = document.createElement('a');
    a.setAttribute('href','#');
    p.appendChild(a);
    a = document.createElement('a');
    a.setAttribute('href','#');
    cite = document.createElement('cite');
    abbr = document.createElement('abbr');
    cite.appendChild(abbr);
    a.appendChild(cite);
    p.appendChild(a);
    abbr = document.createElement('abbr');
    p.appendChild(abbr);
    a = document.createElement('a');
    a.setAttribute('href','#');
    p.appendChild(a);
    a = document.createElement('a');
    a.setAttribute('href','#');
    p.appendChild(a);
    abbr = document.createElement('abbr');
    p.appendChild(abbr);
    section.appendChild(p);
    p = document.createElement('p');
    abbr = document.createElement('abbr');
    p.appendChild(abbr);
    abbr = document.createElement('abbr');
    p.appendChild(abbr);
    abbr = document.createElement('abbr');
    p.appendChild(abbr);
    a = document.createElement('a');
    a.setAttribute('href','#');
    abbr = document.createElement('abbr');
    a.appendChild(abbr);
    abbr = document.createElement('abbr');
    a.appendChild(abbr);
    p.appendChild(a);
    section.appendChild(p);
    p = document.createElement('p');
    b = document.createElement('b');
    p.appendChild(b);
    section.appendChild(p);
    return section;
}

function generatedArticleSecondSection() {
    let section;
    let h2;
    let ol;
    let li;
    let abbr;
    let em;
    let a;
    let code;
    let p;
    section = document.createElement('section');
    h2 = document.createElement('h2');
    section.appendChild(h2);
    ol = document.createElement('ol');
    li = document.createElement('li');
    abbr = document.createElement('abbr');
    li.appendChild(abbr);
    ol.appendChild(li);
    li = document.createElement('li');
    abbr = document.createElement('abbr');
    abbr.setAttribute('title','Kibibyte');
    li.appendChild(abbr);
    ol.appendChild(li);
    li = document.createElement('li');
    em = document.createElement('em');
    li.appendChild(em);
    a = document.createElement('a');
    a.setAttribute('href','#');
    li.appendChild(a);
    ol.appendChild(li);
    li = document.createElement('li');
    code = document.createElement('code');
    li.appendChild(code);
    abbr = document.createElement('abbr');
    li.appendChild(abbr);
    code = document.createElement('code');
    li.appendChild(code);
    code = document.createElement('code');
    li.appendChild(code);
    ol.appendChild(li);
    li = document.createElement('li');
    a = document.createElement('a');
    a.setAttribute('href','#');
    li.appendChild(a);
    ol.appendChild(li);
    li = document.createElement('li');
    a = document.createElement('a');
    a.setAttribute('href','#');
    li.appendChild(a);
    ol.appendChild(li);
    section.appendChild(ol);
    p = document.createElement('p');
    a = document.createElement('a');
    a.setAttribute('href','#');
    p.appendChild(a);
    section.appendChild(p);
    return section;
}

function createFooter() {
    let footer;
    let p;
    let a;
    footer = document.createElement('footer');
    p = document.createElement('p');
    a = document.createElement('a');
    a.setAttribute('href','#');
    p.appendChild(a);
    a = document.createElement('a');
    a.setAttribute('href','#');
    p.appendChild(a);
    footer.appendChild(p);
    return footer;
}

function createDOM() {
    document.body.innerHTML = '';
    let header = createHeader();
    let article = createArticle();
    let footer = createFooter();
    document.body.appendChild(header);
    document.body.appendChild(article);
    document.body.appendChild(footer);
    console.log(document);
}

createDOM();
// CONOCIMIENTOS
const arrayConocimientos = [
    {
    icon:'<i class="fa-brands fa-css3-alt icon_css"></i>',
    title:'CSS3',
    info:'CSS, en español «Hojas de estilo en cascada», es un lenguaje de diseño gráfico para definir y crear la presentación de un documento estructurado escrito en un lenguaje de marcado.'
    },
    {
    icon:'<i class="fa-brands fa-html5 icon_html"></i>',
    title:'HTML5',
    info:'HTML, siglas en inglés de HyperText Markup Language, hace referencia al lenguaje de marcado para la elaboración de páginas web.'
    }, 
    {
    icon:'<i class="fa-brands fa-js icon_js"></i>',
    title:'JavaScript',
    info:'JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, ​ basado en prototipos, imperativo, débilmente tipado y dinámico.'
    },
    {
    icon:'<i class="fa-brands fa-java icon_java"></i>',
    title:'Java',
    info:'Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.​'
    },
    {
    icon:'<i class="fa-brands fa-github icon_gh"></i>',
    title:'GitHub',
    info:'GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.​'
    },
    {
    icon:'<i class="fa-brands fa-bootstrap icon_bs"></i>',
    title:'Bootstrap',
    info:'Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.'
    }

];
const listConocimientos = document.getElementById('lista-conocimientos');
const createConocimientos = ()=>{
    let conocimientoHTML = "";
    arrayConocimientos.forEach(e => {
        conocimientoHTML +=
        `<div id="conocimientos" class="col" align="center">
            <div id="height" class="card col m-2" style="width: 18rem;">
                ${e.icon}
                <div class="card-body">
                    <h5 class="card-title">${e.title}</h5>
                    <p class="card-text">${e.info}</p>
                </div>
            </div>
        </div>`
    })
    listConocimientos.innerHTML = conocimientoHTML;
}
createConocimientos();

// CERTIFICADOS
const arrayCertificados = [
    {
    imgUrl: "./assets/img/cert1.PNG",
    title: "CONECTA EMPLEO",
    name: "Programacion con JavaScript",
    date: "13 de mayo del 2022",
    link: "https://drive.google.com/file/d/1g4zLf3ydXMA91qoJ7JtoytB8EZYF2c7F/view?usp=sharing"
    },
    {
    imgUrl: "./assets/img/cert2.PNG",
    title: "GOOGLE ACTIVE",
    name: "Introduccion al Desarrollo Web II",
    date: "05 de abril del 2022",
    link: "https://drive.google.com/file/d/1SjG53oUrRruCNDC-U05SGax7VHU1YroC/view?usp=sharing"
    },
    {
    imgUrl: "./assets/img/cert3.PNG",
    title: "GOOGLE ACTIVE",
    name: "Introduccion al Desarrollo Web I",
    date: "04 de abril del 2022",
    link: "https://drive.google.com/file/d/19z-4onCm6rnL2-nWOLSyvku88I3EsiBG/view?usp=sharing"
    },
    {
    imgUrl: "./assets/img/cert4.PNG",
    title: "DEV CODE",
    name: "Curso de HTML y CSS",
    date: "07 de abril del 2022",
    link: "https://drive.google.com/file/d/1rHQxcRfE1hPOgpIDswr6l_qEPsImVB12/view?usp=sharing"
    },
];
const listCertificados = document.getElementById('lista-certificados');
const createCerticatesHtml = () => {
    let templateHTML = "";
    arrayCertificados.forEach(e => {
        templateHTML += 
        `<div class="col" align="center">
                    <div id="width" class="card col-6 m-2"">
                        <img src="${e.imgUrl}" class="card-img-top img_cert" alt="...">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item" style="background-color: #12116d; color:white"><strong>${e.title}</strong></li>
                            <li class="list-group-item">${e.name}</li>
                            <li class="list-group-item">${e.date}</li>
                        </ul>
                        <div class="card-body">
                            <a target="_blank"
                                href="${e.link}"
                                class="card-link">Certificado en PDF</a>
                        </div>
                    </div>
        </div>`;
    });
    listCertificados.innerHTML = templateHTML;
}
createCerticatesHtml();

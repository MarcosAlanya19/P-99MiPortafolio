const arrayCertificados = [
    {
        imgUrl: "./assets/img/cert1.PNG",
        title: "CONECTA EMPLEO2",
        name: "Programacion con JavaScript",
        date: "13 de mayo del 2022",
        link: "https://drive.google.com/file/d/1g4zLf3ydXMA91qoJ7JtoytB8EZYF2c7F/view?usp=sharing"
    },
    {
        imgUrl: "./assets/img/cert1.PNG",
        title: "Marioa",
        name: "Programacion con JavaScript",
        date: "13 de mayo del 2022",
        link: "https://drive.google.com/file/d/1g4zLf3ydXMA91qoJ7JtoytB8EZYF2c7F/view?usp=sharing"
    },
    {
        imgUrl: "./assets/img/cert1.PNG",
        title: "CONECTA EMPLEO",
        name: "Programacion con JavaScript",
        date: "13 de mayo del 2022",
        link: "https://drive.google.com/file/d/1g4zLf3ydXMA91qoJ7JtoytB8EZYF2c7F/view?usp=sharing"
    }
];
const listCertificados = document.getElementById('lista-certificados');

const createCerticatesHtml = () => {
    let templateHTML = "";
    arrayCertificados.forEach(e => {
        templateHTML += `
        <center class="col">
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
        </center>
        `;
    });
    listCertificados.innerHTML = templateHTML;
}
createCerticatesHtml();
const arrayEstudios = [
    {
    logo: "./assets/img/logo-certus.png",
    carrera: "CONTABILIDAD",
    intituto: "IFB CERTUS",
    link: "#"
    },
    {
    logo: "./assets/img/logo-ilp.png",
    carrera: "Desarrollo de sistemas de la informacion",
    intituto: "ILP PONTIFICIA",
    link: "#"
    },
];
const listEstudios = document.getElementById('lista-estudios');
const createStudesHtml = () => {
    let templateHTML = "";
    arrayEstudios.forEach(e => {
        templateHTML += 
        `<div class="card mb-3 col mx-auto" style="max-width: 540px;" >
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${e.logo}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <ul class="list-group list-group-flush text-center">
                        <li class="list-group-item">Instituto: ${e.intituto}</li>
                        <li class="list-group-item">Carrera: ${e.carrera}</li>
                        <li class="list-group-item"><a class="link" href="">Certificado de egresado</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>`;
    });
    listEstudios.innerHTML = templateHTML;
}
createStudesHtml();

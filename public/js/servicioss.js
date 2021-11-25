const main = document.querySelector("main");

fetch("https://www.mockachino.com/148a9590-c7bc-44/manicure")
  .then((response) => response.json())
  .then((servicios) => {
    servicios.results.forEach((servicio) => {
      let infoServicio = document.createElement("article");
      infoServicio.innerHTML = htmlServicios(
        servicio.name,
        servicio.image,
        servicio.precio,
        servicio.duracion
      );
      main.appendChild(infoServicio);
    });
  });

function htmlServicios(servicio, foto, precio, duracion) {
  let html = `<section class="container justify-content-center p-5" id="lista-productos">
       <div class="row justify-content-center">
       <div class="card col-lg-3 col-md-6" style="width: 18rem">
       <img src="${foto}" class=" imagen card-img-top p-3" alt="foto ${servicio}" />
       <div class="card-body">
       <h3 class="nombre"> ${servicio} </h3>
       <h5> ${precio} </h5>
       <h5> ${duracion} </h5>       
       </div>
       <div class="card-footer">
       <a class="btn" href="https://mpago.la/2RCmLSx">Reservá</a>
       </div>
       </div>
       </div>
       </section>`;

  return html;
}

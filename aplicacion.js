const hover = document.querySelector(".portfolios");

hover.addEventListener("click", (e) => {
   e.preventDefault();
});

const listado = document.querySelector(".listado");
const btn = document.querySelector(".btn-agregar");

btn.addEventListener("click", (e) => {
   const elemento = `
   <section class="portfolio-item">
    <div class="image">
       <img src="imagenes/blog3.jpg" alt="" class="imagenes">
    </div>
    <div class="hover-items three">
       <h3>project source</h3>
       <div class="icons">
           <a href="#" target="_blank" class="icon">
               <i class="fa fa-github"></i>
           </a>
       </div>
    </div>
  </section>
   `;
   listado.innerHTML += elemento;
   console.log(e.target);
   e.stopPropagation();
   e.preventDefault();
});

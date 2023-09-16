export default function NavBar() {
  return (document.getElementById(
    "headerContent"
  )!.innerHTML += `<div class="shadow-sm header-stiky" id="myHeader">
        <div class="container-xxl px-4">
          <nav class="navbar navbar-expand-md navbar-light">
            <div class="main-logo"  >
              <img 
              src="img/logo.png" 
              alt="Logo dss"
              loading="eager"/>
            </div>

            <button
              class="navbar-toggler justify-content-end"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav me-auto mb-2 mb-md-0">
                <li class="nav-item">
                  <a
                    class="nav-link nav-menu active"
                    aria-current="page"
                    href="#homePage"
                    >Inicio</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-menu" href="#aboutPage">Acerca de</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link nav-menu" href="#productPage">Productos</a>
                </li>
              </ul>
              <form class="d-flex col-md-5">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Buscar..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    id="buscar"
                    required
                  />
                  <button
                    class="btn btn-outline-secondary btn-custom"
                    type="submit"
                    id="button-addon2"
                    aria-label="Search"
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <!-- Agregar el ícono de búsqueda por voz -->
                  
                  <button  type="button" class="btn record btn-outline-secondary btn-custom" id="voice-search-button">
                    <div class="icon">
                      <i class="fa-solid fa-microphone"></i>
                      <img src="img/bars.svg" alt="" />
                    </div>
                    <p>Escuchar</p>
                  </button>

                <!-- Botón de modal invisible -->
                  <button type="button" class="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#resultsModal" id="modalButton">
                    Mostrar Modal
                  </button>
                </div>
              </form>
              <hr class="dropdown-divider" />
              <div
                class="login-bag d-flex gap-3 align-items-center justify-content-end ps-md-4 py-md-0"
              >
                <a
                  class="position-relative"
                  id="activateProfile"
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <p>Mi cuenta</p>
                </a>
                <a
                  class="position-relative"
                  id="activateCart"
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <p class="fs-4"><i class="fa-solid fa-shopping-cart"></i></p>
                  <span
                    class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    id="contadorCarrito"
                    >0</span
                  >
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>`);
}

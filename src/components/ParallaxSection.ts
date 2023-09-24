interface SectionData {
  id: string;
  image: string;
  title: string;
  description: string;
}
export default function ParallaxSection(data: SectionData) {
  const { id, image, title, description } = data;
  const parallaxSection = document.getElementById(id);

  if (!parallaxSection) {
    console.error(`Element with id '${id}' not found.`);
    return;
  }

  const sectionHTML = `
    <div class="parallax-section">
        <div class="parallax-image" style="background-image: url('/img/banner/${image}');" ></div>
        <div class="parallax-content card" id="parallaxDetails">
            <h1>${title}</h1>
            <p>${description}</p>
            <a
              href="javascript:void(0);"  // Esto evita que cambie la URL
              class="btn btn-outline-dark btn-custom text-break custom-cart-button mt-4 col-10"
              onclick="navigateToProductPage();" // Llama a una función de navegación personalizada
            >
              Ver productos
              <i class="fa-solid fa-eye"></i>
            </a>
        </div>
    </div>
  `;

  parallaxSection.innerHTML = sectionHTML;

  function navigateToProductPage() {
    const productosNavLink = document.querySelector(
      ".nav-menu[href='#productPage']"
    );
    if (productosNavLink instanceof HTMLElement) {
      productosNavLink.click();
    }
  }

  const verProductosButton = document.querySelector(
    ".parallax-content .btn-custom"
  );
  if (verProductosButton) {
    verProductosButton.addEventListener("click", navigateToProductPage);
  }
}
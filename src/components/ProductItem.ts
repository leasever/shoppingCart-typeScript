import Rating from "../utilities/rating";
import productData from "../data/products.json";
import { ProductEntry } from "../types";
import { increaseCartQuantity } from "../context/ShopingCartContext";
import StoreItem from "./ProductDetail";
import { fomatCurrency } from "../utilities/formatcurrency";

const listProduct = document.querySelector<HTMLDivElement>("#productSection")!;
const activatecart = document.querySelector<HTMLButtonElement>("#activateCart")!;
const products: ProductEntry[] = productData as ProductEntry[];

export function ProductItem() {
  listProduct.innerHTML = ` `;
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "col";
    /*** card product ***/
    const divCardProduct = document.createElement("div");
    divCardProduct.className = "card";

    /*** image product ***/
    const enlaceModal = document.createElement("a");
    enlaceModal.href = "#staticBackdrop" + product._id;
    enlaceModal.setAttribute("data-bs-toggle", "modal");
    const imageProduct = document.createElement("img");
    imageProduct.src = product.image[0];
    imageProduct.className = "card-img-top";
    imageProduct.setAttribute("alt", product.name);

    /*** body card product ***/
    const bodyCard = document.createElement("div");
    bodyCard.className = "card-body";

    /*** product name ***/
    const nameProduct = document.createElement("span");
    nameProduct.textContent = product.name;
    nameProduct.className = "card-title d-flex justify-content-between bgn fs-3 mb-2";

    /*** product price ***/
    const spanPrice = document.createElement("span");
    spanPrice.innerText = fomatCurrency(product.price).toString();
    spanPrice.className = "fs-6";

    /*** product score ***/
    const ratings = document.createElement("div");
    ratings.innerHTML = Rating(product.rating);

    const btnDiv = document.createElement("div");
    btnDiv.className = "d-grid col-6 mx-auto mb-3";

    /*** button add to cart ***/
    const btnAddCart = document.createElement("button");
    btnAddCart.className = "btn btn-outline-dark btn-custom text-break";
    btnAddCart.innerText = "A??adir ";

    const iconAdded = document.createElement("i");
    iconAdded.id = "icon" + product._id;

    btnAddCart.addEventListener("click", () => {
      increaseCartQuantity(product._id);
      activatecart.click()
    });

    const iconCart = document.createElement("i");
    iconCart.className = "fa-solid fa-shopping-cart";

    /*** insert html ***/
    nameProduct.append(spanPrice);

    bodyCard.append(nameProduct);
    bodyCard.append(ratings);

    btnAddCart.append(iconCart);
    btnAddCart.append(iconAdded);

    btnDiv.append(btnAddCart);

    enlaceModal.append(imageProduct);

    divCardProduct.append(enlaceModal);
    divCardProduct.append(bodyCard);
    divCardProduct.append(btnDiv);

    productElement.append(divCardProduct);

    listProduct?.append(productElement);
  });
}

/** Modal product details */
products.forEach((item) => {
  StoreItem(item);
});

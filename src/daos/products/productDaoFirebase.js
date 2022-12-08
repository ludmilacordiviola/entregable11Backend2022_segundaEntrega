import ContenedorFirebase from "../../contenedor/contenedorFirebase.js";

class ProductDaoFirebase extends ContenedorFirebase {
  constructor() {
    super("products");
  }
}

export default ProductDaoFirebase;

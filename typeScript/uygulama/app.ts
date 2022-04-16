
import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();


let result;


result = _productService.getById(2);


let p = new Product();
p.id=2;
p.name="Iphone 5";
p.price=5000;
p.category="telefon";

_productService.saveProduct(p);
//_productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result);
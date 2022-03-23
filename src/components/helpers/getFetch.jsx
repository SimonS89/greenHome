import { products } from "../../assets/data/products";
export const getFetch = new Promise(function (resolve, reject) {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(products);
    } else {
      reject("no hay productos");
    }
  }, 3700);
});

import Component from '../../templates/Components';
import data from '../../templates/data.json';

class Products extends Component {
  constructor(tagName:string, className:string) {
    super(tagName, className);
  }

  protected createProductsDisplay() {
    // all products
    const productsDivs = document.createElement('div')
    productsDivs.className = 'products'
    productsDivs.id = 'products'
    for (let index = 0; index < data.products.length; index++) {
      productsDivs.innerHTML += `
        <div style="background-image: url('${data.products[index].thumbnail}')" class="product-card">
        <div class="product-description">
            <p>Category:${data.products[index].category}</p>
            <p>Brand:${data.products[index].brand}</p>
            <p>Price:${data.products[index].price}</p>
            <p>Discount:${data.products[index].discountPercentage}</p>
            <p>Rating:${data.products[index].rating}</p>
            <p>Stock:${data.products[index].stock}</p>
        </div>
        <div>
            <button class="product-btn">Add to cart</button>
            <button class="product-btn">Details</button>
        </div>
    </div>
         `;
    }

    this.container.append(productsDivs);
  }

  render() {
    this.createProductsDisplay();
    return this.container
  }
}

export default Products;
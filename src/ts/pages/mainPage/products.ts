import data from '../../../templates/data.json'
export abstract class productsDisplay {
  protected productsContainer: HTMLElement;
  constructor(id: string) {
    this.productsContainer = document.createElement('section')
    this.productsContainer.id = id
  }

  protected createProductsDisplay() {
    // all products
    const productsDivs = document.createElement('div')
    productsDivs.className = 'products'
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
    return productsDivs
  }

  render() {
    return (this.productsContainer)
  }
}
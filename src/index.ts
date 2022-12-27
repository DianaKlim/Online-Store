//imports
import './sass/style.scss';
import App from './pages/app/App';
const app = new App();
app.run()
import data from '../src/core/templates/data.json';


// я не выкупила как в дургом файлике писать поэтому пока тут это фильтр для товаров по брэнду
const brands = document.getElementById('brands') as HTMLUListElement | null
const products = document.getElementById('products') as HTMLDivElement 


const checkedProductsArray: Array<string> = []
let score = 0

if(brands != null){
  brands.addEventListener('click',function(event){
    const target = event.target as HTMLInputElement
    if(score == 0){
      products.innerHTML = ''
    }
    if(target.checked){
      for (let index = 0; index < data.products.length; index++) {
        score++
        const checkedProduct = `
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
         `

        if(data.products[index].brand === target.value ){
          if(!(target.value in checkedProductsArray)){
            checkedProductsArray.push(target.value)
          }
          products.innerHTML += checkedProduct
        }
        
    }
    }
    else if(!target.checked){
      products.innerHTML = ''
      console.log(checkedProductsArray)
      for (let index = 0; index < checkedProductsArray.length+1; index++) {
        checkedProductsArray.map(x =>{
          if(target.value === x){
            checkedProductsArray.splice(checkedProductsArray.indexOf(x),1)
          }
        })
        
      }
        for (let index = 0; index < data.products.length; index++){
          const checkedProduct = `
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
           `
          console.log(checkedProductsArray)
          if(data.products[index].brand === checkedProductsArray[index]){
            products.innerHTML += checkedProduct
          }
      }
    }
})
}


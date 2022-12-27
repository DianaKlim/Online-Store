import Component from '../../templates/Components';
import data from '../../templates/data.json';

class SideSection extends Component {
  constructor(tagName: string, className: string) {
    super(tagName, className);
  }

  protected createSideSection() {
    // side block with categories
    const sideSectionCategories = document.createElement('ul')
    sideSectionCategories.className = 'categories'
    sideSectionCategories.innerHTML += `<p>CATEGORIES</p>`
    const categories: string[] = []
    for (let index = 0; index < data.products.length; index++) {
      const category = data.products[index].category;
      if (!categories.includes(category)) {
        sideSectionCategories.innerHTML += `
        <li id="category" class='side-list'>
        <label><input value=${category} type="checkbox">
        <span class='checkbox'>${category}</span>
        </label>
        </li>
      `;
        categories.push(category)
      }

    }
    // side block with brands
    const sideSectionBrands = document.createElement('ul')
    sideSectionBrands.className = 'brands'
    sideSectionBrands.id = 'brands'
    sideSectionBrands.innerHTML += `<p>BRANDS</p>`
    const brands: string[] = []
    for (let index = 0; index < data.products.length; index++) {
      const brand = data.products[index].brand;
      if (!brands.includes(brand)) {
        sideSectionBrands.innerHTML += `
        <li id='brand' class='side-list'>
          <label>
            <input value = ${brand} type="checkbox">
            <span  class ='checkbox'>${brand}</span>
          </label>
        </li>
      `;
      brands.push(brand)
      }
      
    }
    //  side sliders
    const sideSectionSlidersAndFilters = document.createElement('div');
    sideSectionSlidersAndFilters.className = "side__range__container"
    sideSectionSlidersAndFilters.innerHTML += `
    <div class = "range__container">
      <p>Price</p>
      <input type="range" min="1" max="100" value="50" class = 'slider-container-price'  id="myRange">
      <p>Stock</p>
      <input type="range" min="1" max="100" value="50" class='slider-container-stock'  id="myRange">
      </div>
    <div>
    <input class='side-section-input' type="text">
      <select  id='select'>
        <option value="1">Sort by price</option>
        <option value="2">Sort by price</option>
        <option value="3">Sort by rating</option>
        <option value="4">Sort by rating</option>
        <option value="5">Sort by discount</option>
        <option value="6">Sort by discount</option>
      </select>
      </div>
    `
    this.container.append(sideSectionCategories);
    this.container.append(sideSectionBrands);
    this.container.append(sideSectionSlidersAndFilters);
    // return [sideSectionCategories, sideSectionBrands,sideSectionSlidersAndFilters ]
  }

  render() {
    this.createSideSection();
    return this.container
  }
}

export default SideSection;
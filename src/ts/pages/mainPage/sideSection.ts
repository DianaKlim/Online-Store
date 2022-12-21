import data from '../../../templates/data.json'
export abstract class sideSection {
  protected sideSectionContainer: HTMLElement;
  static TextObject = {}
  constructor(id: string) {
    this.sideSectionContainer = document.createElement('section')
    this.sideSectionContainer.id = id
  }

  protected createSideSection() {
    // side block with categories
    this.sideSectionContainer.className = 'side-section'
    const sideSectionCategories = document.createElement('ul')
    sideSectionCategories.className = 'categories'
    sideSectionCategories.innerHTML += `<p>CATEGORIES</p>`
    const categories: string[] = []
    for (let index = 0; index < data.products.length; index++) {
      const category = data.products[index].category;
      if (!categories.includes(category)) {
        sideSectionCategories.innerHTML += `
        <li class='side-list'><label><input type="checkbox"><span class='checkbox'>${category}</span></label></li>
      `;
      }
      categories.push(category)
    }
    // side block with brands
    const sideSectionBrands = document.createElement('ul')
    sideSectionBrands.className = 'brands'
    sideSectionBrands.innerHTML += `<p>BRANDS</p>`
    const brands: string[] = []
    for (let index = 0; index < data.products.length; index++) {
      const brand = data.products[index].brand;
      if (!categories.includes(brand)) {
        sideSectionBrands.innerHTML += `
        <li class='side-list'><label><input type="checkbox"><span class = 'checkbox'>${brand}</span></label></li>
      `;
      }
      brands.push(brand)
    }
    //  side sliders
    const sideSectionSlidersAndFilters = document.createElement('div')
    sideSectionSlidersAndFilters.innerHTML += `
    <div>
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
  
    return [sideSectionCategories, sideSectionBrands,sideSectionSlidersAndFilters ]
  }

  render() {
    return (this.sideSectionContainer)
  }

}
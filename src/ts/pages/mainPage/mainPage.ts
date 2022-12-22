import { Page } from "../../../templates/page";
import { sideSection } from "./sideSection";
import { productsDisplay } from "./products";

export class MainPage extends Page {
  static TextObject = {
    InnerText: 'Total cost',
    Logo: "STORE"
  };
  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeader(MainPage.TextObject.InnerText, MainPage.TextObject.Logo)
    this.container.append(title)
    return this.container;
  }
}


export class MainPageSide extends sideSection {
  static TextObject = {
    InnerText: 'Total cost',
    Logo: "STORE"
  };
  constructor(id: string) {
    super(id);
  }

  render() {
    const categories = this.createSideSection()[0]
    const brands = this.createSideSection()[1]
    const slidersAndFilters = this.createSideSection()[2]
    this.sideSectionContainer.append(categories, brands, slidersAndFilters)
    return this.sideSectionContainer;
  }
}

export class MainPageProducts extends productsDisplay {
  constructor(id: string) {
    super(id);
  }

  render() {
    const products = this.createProductsDisplay()
    this.productsContainer.append(products)
    return this.productsContainer;
  }
}
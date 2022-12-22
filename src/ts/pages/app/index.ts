import { MainPage } from '../mainPage/mainPage';
import { MainPageSide } from '../mainPage/mainPage';
import { MainPageProducts } from '../mainPage/mainPage';

export class App {
  private container: HTMLElement;
  private initialPage: MainPage;
  private sideSection: MainPageSide;
  private productsSection: MainPageProducts;
  constructor() {
    this.container = document.body;
    this.initialPage = new MainPage('main-page')
    this.sideSection = new MainPageSide('side-section')
    this.productsSection = new MainPageProducts('products-display')
  }

  run() {
    const mainPageHTML = this.initialPage.render()
    const sideSectionHTML = this.sideSection.render()
    const productsHTML = this.productsSection.render()
    this.container.append(mainPageHTML)
    this.container.append(sideSectionHTML)
    this.container.append(productsHTML)
  }
}
export abstract class Page {
  protected container: HTMLElement;
  protected sideSectionContainer: HTMLElement;
  static TextObject = {}
  constructor(id: string) {
    this.container = document.createElement('header')
    this.sideSectionContainer = document.createElement('main')
    this.container.id = id
  }

  protected createHeader(text: string, logo: string) {
    const headerTitle = document.createElement('div')
    headerTitle.className = 'header'
    headerTitle.innerHTML += `
    <button class="header__button button logo">${logo}</button>
    <button class="header__button button total-cost">${text}</button>
    <button><img class="header__button button basket" src="../src/assets/shopping_cart.png" alt="shopping cart"></button>
    `;
    return headerTitle
  }

}
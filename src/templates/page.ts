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
    <div>${logo}</div>
    <div>${text}</div>
    <img src="../src/assets/shopping_cart.png" alt="shopping cart">
    `;
    return headerTitle
  }

}
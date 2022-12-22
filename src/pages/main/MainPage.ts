import Page from '../../core/templates/Page';
import SideSection from '../../core/components/side-section/SideSection';
import Products from '../../core/components/products/Products';
class MainPage extends Page {
  private side: SideSection;
  private products: Products;

  constructor(id: string) {
    super(id);
    this.side = new SideSection('side', 'side-container');
    this.products = new Products('products', 'products-container');
  }

  private appendSection() {
  this.container.append(this.side.render());
  this.container.append(this.products.render());
  }

  render() {
    this.appendSection();
    return this.container;
  }
}

export default MainPage;
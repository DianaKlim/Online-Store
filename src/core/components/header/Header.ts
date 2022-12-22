import Component from '../../templates/Components';
import { PageIds } from '../../../pages/app/App';

const Buttons = [
  {
    id: PageIds.MainPage,
    text: 'STORE',
  },
  {
    id: PageIds.DescriptionPage,
    text: 'Description',
  },
  {
    id: PageIds.CartPage,
    text: 'Cart',
  },
];

class Header extends Component {
  constructor(tagName:string, className:string) {
    super(tagName, className);
  }

  renderPageButtons() {
    const pageButtons = document.createElement('div');
    pageButtons.className = "header__buttons";
    Buttons.forEach((button) => {
      const buttonElem = document.createElement('button');
      buttonElem.className = "header__button button"
      pageButtons.append(buttonElem);
      const buttonHTML = document.createElement('a');
      buttonHTML.href = `#${button.id}`;
      buttonHTML.innerText = button.text;
      buttonElem.append(buttonHTML);
    });
    this.container.append(pageButtons);
  }

  render() {
    this.renderPageButtons();
    return this.container;
  }
}

export default Header;
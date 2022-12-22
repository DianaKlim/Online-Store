import Page from '../../core/templates/Page';
import MainPage from '../main/MainPage';
import DescriptionPage from '../description/DescriptionPage';
import CartPage from '../cart/CartPage';
import Header from '../../core/components/header/Header';
import ErrorPage, { ErrorTypes } from '../error/ErrorPage';

export const enum PageIds {
  MainPage = 'main-page',
  DescriptionPage = 'description-page',
  CartPage = 'cart-page',
}

class App {
  private static container: HTMLElement = document.body;
  private static defaultPageId: string;
  private initialPage: MainPage;
  private header: Header;

  static renderNewPage(idPage: string) {
    const currentPageHTML = document.getElementById(App.defaultPageId);
    if (currentPageHTML) {
      currentPageHTML.remove();
    }
    let page: Page | null = null;

    if (idPage === PageIds.MainPage) {
      page = new MainPage(idPage);
    } else if (idPage === PageIds.DescriptionPage) {
      page = new DescriptionPage(idPage);
    } else if (idPage === PageIds.CartPage) {
      page = new CartPage(idPage);
    } else {
      page = new ErrorPage(idPage, ErrorTypes.Error_404);
    }

    if (page) {
      const pageHTML = page.render();
      pageHTML.id = App.defaultPageId;
      App.container.append(pageHTML);
    }
  }

  private enableRouteChange() {
    window.addEventListener('hashchange', () => {
      const hash = window.location.hash.slice(1);
      App.renderNewPage(hash);
    });
  }
  
  constructor() {
    this.initialPage = new MainPage('main-page');
    this.header = new Header('header', 'header-container');
  }

  run() {
    App.container.append(this.header.render());
    App.renderNewPage('main-page');
    this.enableRouteChange();
  }
}

export default App;
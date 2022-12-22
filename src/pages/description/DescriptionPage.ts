import Page from '../../core/templates/Page';

class DescriptionPage extends Page {
  static TextObject = {
    MainTitle: 'Description Page',
  };

  constructor(id: string) {
    super(id);
  }

  render() {
    const title = this.createHeaderTitle(DescriptionPage.TextObject.MainTitle);
    this.container.append(title);
    return this.container;
  }
}

export default DescriptionPage;
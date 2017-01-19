import { WorkingAppPage } from './app.po';

describe('working-app App', function() {
  let page: WorkingAppPage;

  beforeEach(() => {
    page = new WorkingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

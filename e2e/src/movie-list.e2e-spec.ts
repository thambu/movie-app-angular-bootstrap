import { MovieListPage } from './movie-list.po';

describe('Movie List', () => {
  let page: MovieListPage;

  beforeEach(() => {
    page = new MovieListPage();
  });

  it('should display search field', () => {
    page.getSearchLable();
    expect(page.getSearchLable()).toEqual('Search for a movie :');
  });


});

/**
 * @jest-environment jsdom
 */

import elementInfo from '../element-info';
import shows from './shows';
import innerHTML from './setup';

describe('mock data from tvmaze API', () => {
  beforeAll(() => { document.body.innerHTML = innerHTML; });
  describe('test item counter', () => {
    test('Return number of shows displayed on homepage', () => {
      elementInfo.showCount(shows);
      expect(document.querySelector('.item-counter').innerText).toBe(240);
    });
  });
});

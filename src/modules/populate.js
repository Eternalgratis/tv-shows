import getShows, { renderShows } from './get-shows';

const populate = async () => {
  await getShows();
  renderShows();
};
export default populate;

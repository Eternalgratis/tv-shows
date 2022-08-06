import { baseUrl, appId } from '../api';

const postComments = (id, username, comment) => fetch(`${baseUrl}/${appId}/comments`, {
  method: 'POST',
  body: JSON.stringify({
    item_id: id,
    username,
    comment,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
});

export default postComments;

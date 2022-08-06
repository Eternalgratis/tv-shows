const getTotalLikes = async () => {
  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JbH05JvjcbTpE6SAjZIh/likes', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
};

export default getTotalLikes;
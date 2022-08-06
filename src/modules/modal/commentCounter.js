const getCommentsCounter = () => {
  const comments = document.querySelectorAll('comments-count');
  return comments.length;
};

export default getCommentsCounter;
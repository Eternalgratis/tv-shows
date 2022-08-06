const createComments = async (Comment, commentArea) => {
  const individualComment = document.createElement('div');
  individualComment.classList.add('individual-comment');
  const userDate = document.createElement('p');
  userDate.textContent = Comment.creation_date;
  individualComment.appendChild(userDate);
  const userName = document.createElement('p');
  userName.textContent = Comment.username;
  individualComment.appendChild(userName);
  const userComment = document.createElement('p');
  userComment.textContent = Comment.comment;
  individualComment.appendChild(userComment);
  commentArea.appendChild(individualComment);
};

export default createComments;

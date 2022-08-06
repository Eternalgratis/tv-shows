import getComments from './getComments';
import postComments from './postcomments';
import createComments from './populateComments';

const Modal = async (dataname, dataimagemedium, dataid, datasummary) => {
  const Modal = document.querySelector('.modal');
  const modalPopUp = document.createElement('div');
  modalPopUp.classList.add('modal-popUp');

  const imageSummary = document.createElement('div');
  imageSummary.classList.add('image-summary');
  const imagePopUp = document.createElement('img');
  imagePopUp.classList.add('image-popup');
  imagePopUp.src = dataimagemedium;

  const dataSummary = document.createElement('div');
  dataSummary.classList.add('data-summary');
  dataSummary.innerHTML = datasummary;
  imageSummary.append(imagePopUp, dataSummary);

  const dataInfo = document.createElement('div');
  dataInfo.classList.add('data-info');

  const titlePopUp = document.createElement('div');
  titlePopUp.classList.add('title-popup');
  titlePopUp.innerText = dataname;

  const closeIcon = document.createElement('div');
  closeIcon.classList.add('close-icon');
  closeIcon.innerHTML = '&#x3a7';

  const commentsContainer = document.createElement('div');
  commentsContainer.classList.add('comments-popup');

  const comments = document.createElement('div');
  comments.classList.add('comments-popup');

  const commentsCard = document.createElement('div');
  commentsCard.classList.add('comments');
  comments.appendChild(commentsCard);

  const commentArea = document.createElement('div');
  commentArea.classList.add('comment-area');
  commentsCard.appendChild(commentArea);

  const commentUpdate = async (commentArea) => {
    const comm = await getComments(dataid).catch(() => []);
    if (comm.length < 1 || comm.length === undefined) {
      comments.textContent = 'comments (0)';
    } else {
      comm.forEach((comment) => {
        createComments(comment, commentArea);
      });
      comments.textContent = `comments (${comm.length})`;
    }
  };

  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  const h3 = document.createElement('h3');
  h3.textContent = 'Add a comment';
  const form = document.createElement('form');
  form.classList.add('form-comment');
  const name = document.createElement('input');
  name.classList.add('input-name');
  name.placeholder = 'Enter your name...';
  const commentInput = document.createElement('textarea');
  commentInput.classList.add('text');
  commentInput.placeholder = 'Write a message';
  const commentBtn = document.createElement('button');
  commentBtn.classList.add('comment-btn');
  commentBtn.textContent = 'Submit';
  formContainer.append(h3, name, commentInput, form, commentBtn);

  commentBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    commentArea.innerHTML = '';
    await postComments(dataid, name.value, commentInput.value);
    commentUpdate(commentArea);
    name.value = '';
    commentInput.value = '';
  });
  commentUpdate(commentArea);

  const title = document.createElement('div');
  title.classList.add('popup-title-container');
  titlePopUp.classList.add('pop-title');
  title.append(titlePopUp, closeIcon);
  commentsContainer.append(commentsCard, formContainer);
  modalPopUp.append(title, imageSummary, comments, commentsContainer);

  Modal.style.display = 'flex';
  Modal.appendChild(modalPopUp);

  closeIcon.addEventListener('click', () => {
    modalPopUp.remove();
    modalPopUp.style.display = 'none';
  });
};
export default Modal;
document.addEventListener('DOMContentLoaded', () => {
  const btns = document.querySelectorAll('.show-modal');
  const modalOverlay = document.querySelector('.modal-overlay ');
  const modals = document.querySelectorAll('.modal');
  const fixedBlocks = document.querySelectorAll('.fixed-block');

  btns.forEach((el) => {
    el.addEventListener('click', (e) => {
      const paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
      let path = e.currentTarget.getAttribute('data-path');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
      modalOverlay.classList.add('modal-overlay--visible');
      document.body.style.paddingRight = paddingOffset;
      document.body.classList.add('lock')
      document.body.style.overflow = 'hidden'
      fixedBlocks.forEach(block => block.style.paddingRight = paddingOffset)
    });
  });

  modalOverlay.addEventListener('click', (e) => {

    if (e.target === modalOverlay) {
      modalOverlay.classList.remove('modal-overlay--visible');
      modals.forEach((el) => {
        el.classList.remove('modal--visible');
        document.body.classList.remove('lock')
        document.body.style.paddingRight = 0 + 'px';
        fixedBlocks.forEach(block => block.style.paddingRight = 0)
      });
    }
  });
});

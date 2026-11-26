const filters = document.querySelector('.filters');
const buttons = Array.from(filters.querySelectorAll('button'));
const papers = Array.from(document.querySelectorAll('.paper'));
const status = document.querySelector('#result-count');
filters.hidden = false;
for (const button of buttons) {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    for (const option of buttons) {
      option.setAttribute('aria-pressed', String(option === button));
    }
    for (const paper of papers) {
      paper.hidden = category !== 'All' && category !== paper.dataset.group;
    }
    const count = papers.filter(paper => !paper.hidden).length;
    status.textContent = `Showing ${count} publications.`;
  });
}

// DROPDOWN OF OPTION
const buttonOption = document.querySelector('#link-option');
const nav = document.querySelector('#dropdown');
const main = document.querySelector('main');

buttonOption.addEventListener('click', () => {
   nav.classList.toggle('hide');
});

main.addEventListener('click', () => {
   nav.classList.add('hide');
});

// INPUT EMPTY
const button = document.querySelector('#create')
const input = document.querySelector('#error')

button.addEventListener('click', () => {
   if (!input.value.trim()) {
      input.classList.add('error');
   }
})


// PAGINATION
const listElement = document.querySelector('ul');

const pagination = document.querySelectorAll('.pages');
const listPagination = Array.prototype.slice.call(pagination);

const items = document.querySelectorAll('li')
const listItems = Array.prototype.slice.call(items)

const rows = 3;
let currentPage = 1;

function displayList(items, wrapper, rowsPerPage, page) {
   wrapper.innerHTML = '';
   page--

   let start = rowsPerPage * page;
   let end = start + rowsPerPage;
   let paginatedItems = items.slice(start, end);

   for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];

      wrapper.appendChild(item);
   };
};

function setupPagination(items, wrapper, rowsPerPage) {
   wrapper.innerHTML = '';

   let page_count = Math.ceil(items.length / rowsPerPage);

   paginationButton(page_count, items);
};

function paginationButton(page, items) {
   pagination[0].addEventListener('click', () => {
      if (currentPage > 1 ) {
         currentPage--
         displayList(items, listElement, rows, currentPage)
      }      
   })

   pagination[1].addEventListener('click', () => {
      if (currentPage < page) {
         currentPage++
         displayList(items, listElement, rows, currentPage)
      }
   })
};

displayList(listItems, listElement, rows, currentPage );
setupPagination(listItems, pagination, rows);

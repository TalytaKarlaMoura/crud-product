const tableData = document.getElementById('tableContent');
const btnAddProduct = document.getElementById('addProduct');
const modal = document.getElementById('modal');
const btnSend = document.getElementById('send');
const btnCancel = document.getElementById('cancel');
const nomeCliente = document.getElementById('nomeCliente');
const cpf = document.getElementById('cpf');
const email = document.getElementById('email');
const form = document.getElementById('form');
const erroMessage = document.getElementById('errorMessage')

const clientes = [
    { nome: 'Sheldon', cpf: '123.456.789-10', email: 'sheldon@gmail.com'},
    { nome: 'Leonard', cpf: '234.567.891-01', email: 'leonard@gmail.com'},
    { nome: 'Penny',   cpf: '345.678.910-11', email: 'penny@gmail.com'  },
    { nome: 'Amy',     cpf: '456.789.101-21', email: 'amy@gmail.com'    },
  ];

function createTable(nome, cpf, email) {    //função p/ inserir dados na tabela //
        const html = (tableData.innerHTML += `
        <tr class="even:bg-[#f2f2f2] odd:bg-white">
        <td class="p-3">${nome}</td>
        <td class="p-3">${cpf}</td>
        <td class="p-3">${email}</td>
        <td class="flex gap-2 items-center justify-center p-3">
          <button class="py-1 px-2 bg-sky-700 text-white rounded-md">Editar</button>
          <button class="py-1 px-2 bg-red-800 text-white rounded-md">Deletar</button>
        </td>
      </tr>
        `)
        return html
    }
function renderDataTable() {               //função p/ inserir dados na tabela //
      tableData.innerHTML = "";
      clientes.map((product) => {
          const data = createTable(
          product.nome,
          product.cpf,
          product.email,
        ); 
        return data;
      });
  }
  renderDataTable()

function openModal() {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}
function closeModal() {
  modal.classList.remove('flex');
  modal.classList.add('hidden');
  form.reset();
  hiddenErroMessage();
}

function showErroMessage() {
  erroMessage.classList.remove('hidden');
}
function hiddenErroMessage() {
  erroMessage.classList.add('hidden');
}

btnAddProduct.addEventListener('click', openModal);
btnSend.addEventListener('click', (e) => { // e -> significa evento //
  e.preventDefault();  // para o botão ter sua função original //
  addProduct();
  renderDataTable()  
});
btnCancel.addEventListener('click', (e) => {
  e.preventDefault();
  closeModal();
});

function addProduct() {
  if (nomeCliente.value && cpf.value && email.value) { 
  clientes.push({
    nome: nomeCliente.value,
    cpf: cpf.value,
    email: email.value,
  });
  
  closeModal(); /* productName.value = ''; productValue.value = ''; productQuantity.value = '';  -> outra forma de resetar*/
}
  else { 
   showErroMessage();
}
}

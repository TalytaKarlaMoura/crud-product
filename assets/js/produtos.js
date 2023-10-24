const tableData = document.getElementById('tableContent');
const btnAddProduct = document.getElementById('addProduct');
const modal = document.getElementById('modal');
const productName = document.getElementById('productName');
const productValue = document.getElementById('productValue');
const productQuantity = document.getElementById('productQuantity');
const btnSend = document.getElementById('send');
const btnCancel = document.getElementById('cancel');
const form = document.getElementById('form');
const erroMessage = document.getElementById('errorMessage')

const products = [
{
    nome: 'Iphone 12 128gb',
    preco: 2999.00,
    quantidade: 1,
},
{
    nome: 'Samsung s20 black',
    preco: 2756.00,
    quantidade: 1,
},
{
    nome: 'USB 3.0 Cable',
    preco: 20.00,
    quantidade: 3,
},
{
    nome: 'Smartwatch 9.0',
    preco: 299.00,
    quantidade: 6,
},
];

function formatDataToString(value) {
    const valorFormatado = value.toLocaleString("pt-BR", { // transformar a moeda; neste caso para real //
      style: "currency", currency: "BRL", });
  
    return valorFormatado;
}
 
function handleDelete(id) {
  alert(products[id]['nome']);
}

function handleEdit(id) {
  alert(products[id]['nome']);
}

function createTableBodyRow (nome, preco, quantidade, total, id) {
const html = (tableData.innerHTML += `
  <tr class="even:bg-[#f2f2f2] odd:bg-white">
  <td class="p-3">${nome}</td>
  <td class="p-3">${preco}</td>
  <td class="p-3">${quantidade}</td>
  <td class="text-center p-3">${total}</td>
  <td class="flex gap-2 items-center justify-center p-3">
    <button onclick="handleEdit(${id})" class="py-1 px-2 bg-sky-700 text-white rounded-md">Editar</button>
    <button onclick="handleDelete(${id})" class="py-1 px-2 bg-red-800 text-white rounded-md">Deletar</button>
  </td>
</tr>
  `)
}

function renderDataTable() {
    tableData.innerHTML = "";
    products.map((product, index) => {
      const preco = formatDataToString(Number(product.preco));
      const total = product.preco * product.quantidade;
      const totalFormatado = formatDataToString(total);
      const data = createTableBodyRow(
        product.nome,
        preco,
        product.quantidade,
        totalFormatado,
        index
      ); 
      return data;
    });
}
    
function openModal() {
      modal.classList.remove('hidden');
      modal.classList.add('flex');
}

function closeModal() {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
    hiddenErroMessage();
    form.reset();
}

function showErroMessage() {
  erroMessage.classList.remove('hidden');
}

function hiddenErroMessage() {
  erroMessage.classList.add('hidden');
}

function addProduct() {
  if (productName.value && productValue.value && productQuantity.value) {
  products.push({
    nome: productName.value,
    preco: productValue.value,
    quantidade: productQuantity.value,
  });
  
  closeModal();
  /* productName.value = ''; productValue.value = ''; productQuantity.value = '';  -> outra forma de resetar*/
}
else { 
     showErroMessage();
  }
}

renderDataTable();
btnAddProduct.addEventListener('click', openModal);

btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    addProduct();
    renderDataTable()  
});

btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
});
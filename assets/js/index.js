const tableData = document.getElementById('tableContent');
const btnAddProduct = document.getElementById('addProduct');
const modal = document.getElementById('modal')

const products = [
    {
    nome: 'Iphone X 64gb',
    preco: 999.00,
    quantidade: 1,
},
{
    nome: 'Samsung s8 black',
    preco: 756.00,
    quantidade: 1,
},
{
    nome: 'USB 3.0 Cable',
    preco: 10.00,
    quantidade: 3,
},
{
    nome: 'Smartwatch 4.0',
    preco: 199.00,
    quantidade: 6,
},
];
function formatDataToString(value) {
    const valorFormatado = value.toLocaleString("pt-BR", { // transformar a moeda, nesse caso para real //
      style: "currency", currency: "BRL", });
  
    return valorFormatado;
  }


  
function renderDataTable() {
    products.map((product) => {
      const preco = formatDataToString(product.preco);
      const total = product.preco * product.quantidade;
      const totalFormatado = formatDataToString(total);
      const data = (tableData.innerHTML += `
          <tr class="even:bg-[#f2f2f2] odd:bg-white">
              <td class="p-3">${product.nome}</td>
              <td class="p-3">${preco}</td>
              <td class="p-3">${product.quantidade}</td>
              <td class="text-center p-3">${totalFormatado}</td>
          </tr>
      `);
  
      return data;
    });
  }
    renderDataTable();

    function openModal() {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
    btnAddProduct.addEventListener('click', openModal);
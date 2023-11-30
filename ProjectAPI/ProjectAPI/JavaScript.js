document.addEventListener('DOMContentLoaded', function () {
    const produtoForm = document.getElementById('produtoForm');
    const produtoTableBody = document.querySelector('#produtoTable tbody');

    const apiURL = 'https://localhost:5001/api/produto';

    function carregarProdutos() {
        axios.get(apiURL)
            .then(response => {
                produtoTableBody.innerHTML = ''; 
                response.data.forEach(produto => {
                    adicionarLinhaProduto(produto);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar produtos:', error);
            });
    }

    function adicionarLinhaProduto(produto) {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.preco}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removerProduto(${produto.id})">Remover</button>
            </td>
        `;
        produtoTableBody.appendChild(tr);
    }

    function adicionarProduto(event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;

        axios.post(apiURL, { nome, preco })
            .then(response => {
                console.log('Produto adicionado:', response.data);
                carregarProdutos(); 
                produtoForm.reset(); 
            })
            .catch(error => {
                console.error('Erro ao adicionar produto:', error);
            });
    }

    function removerProduto(produtoId) {
        axios.delete(`${apiURL}/${produtoId}`)
            .then(response => {
                console.log('Produto removido:', response.data);
                carregarProdutos(); 
            })
            .catch(error => {
                console.error('Erro ao remover produto:', error);
            })
    }

    produtoForm.addEventListener('submit', adicionarProduto);
    carregarProdutos();
});

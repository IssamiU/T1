import Entrada from "../io/entrada"
import Produto from "../modelo/produto"

export default class DeleteProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    
    public remover(): void {
        console.log(`\nInício da remoção de produto`);
        this.listarProdutosParaRemocao()
        
        if (this.produtos.length === 0) {
            console.log(`Nenhum produto cadastrado!`)
            return
        }
        
        let nomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja remover: `)
        let indice = this.produtos.findIndex(p => p.getNome === nomeProduto)
        
        if (indice === -1) {
            console.log(`Produto não encontrado!`)
            return
        }
        
        let produto = this.produtos[indice]
        console.log(`Produto encontrado: ${produto.getNome} - R$ ${produto.getPreco.toFixed(2)}`)
        
        let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja remover este produto? (s/n): `)
        
        if (confirmacao.toLowerCase() === 's') {
            this.produtos.splice(indice, 1)
            console.log(`Produto removido com sucesso!`)
        } else {
            console.log(`Remoção cancelada.`)
        }
        console.log(`\nOperação concluída :)\n`);
    }
    
    private listarProdutosParaRemocao(): void {
        console.log(`\nProdutos disponíveis para remoção:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.getNome} - Preço: R$ ${produto.getPreco.toFixed(2)}`);
        });
        console.log(`--------------------------------------`);
    }
}

import Entrada from "../io/entrada"
import Produto from "../modelo/produto"

export default class UpdateProduto {
    private produtos: Array<Produto>
    private entrada: Entrada
    
    constructor(produtos: Array<Produto>) {
        this.produtos = produtos
        this.entrada = new Entrada()
    }
    
    public atualizar(): void {
        console.log(`\nInício da edição de produto`);
        this.listarProdutosParaEdicao()
        
        if (this.produtos.length === 0) {
            console.log(`Nenhum produto cadastrado!`)
            return
        }
        
        let nomeProduto = this.entrada.receberTexto(`Digite o nome do produto que deseja editar: `)
        let produto = this.produtos.find(p => p.getNome === nomeProduto)
        
        if (!produto) {
            console.log(`Produto não encontrado!`)
            return
        }
        
        console.log(`Produto encontrado: ${produto.getNome} - R$ ${produto.getPreco.toFixed(2)}`)
        console.log(`1 - Editar nome`)
        console.log(`2 - Editar preço`)
        console.log(`0 - Voltar`)
        
        let opcao = this.entrada.receberNumero(`Escolha o que deseja editar: `)
        
        switch (opcao) {
            case 1:
                let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
                produto.setNome = novoNome
                console.log(`Nome atualizado com sucesso!`)
                break;
            case 2:
                let novoPreco = this.entrada.receberNumero(`Digite o novo preço: `)
                produto.setPreco = novoPreco
                console.log(`Preço atualizado com sucesso!`)
                break;
            case 0:
                return
            default:
                console.log(`Opção inválida!`)
        }
        console.log(`\nEdição concluída :)\n`);
    }
    
    private listarProdutosParaEdicao(): void {
        console.log(`\nProdutos disponíveis para edição:`);
        this.produtos.forEach(produto => {
            console.log(`Nome: ${produto.getNome} - Preço: R$ ${produto.getPreco.toFixed(2)}`);
        });
        console.log(`--------------------------------------`);
    }
}

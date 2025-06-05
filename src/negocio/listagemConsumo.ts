import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export default class ListagemConsumo {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public listar(): void {
        console.log("\n--- PRODUTOS E SERVIÇOS MAIS CONSUMIDOS ---")

        const consumoProdutos = this.produtos.map(produto => {
            let total = 0
            this.clientes.forEach(cliente => {
                total += cliente.getProdutosConsumidos.filter(p => p.getNome === produto.getNome).length
            })
            return { nome: produto.getNome, tipo: 'Produto', total }
        })

        const consumoServicos = this.servicos.map(servico => {
            let total = 0
            this.clientes.forEach(cliente => {
                total += cliente.getServicosConsumidos.filter(s => s.getNome === servico.getNome).length
            })
            return { nome: servico.getNome, tipo: 'Serviço', total }
        })

        const todosConsumos = [...consumoProdutos, ...consumoServicos]
        todosConsumos.sort((a, b) => b.total - a.total)

        todosConsumos.forEach((item, index) => {
            console.log(`${index + 1} - ${item.tipo}: ${item.nome} (${item.total} consumos)`)
        })

        if (todosConsumos.length === 0) {
            console.log("Nenhum consumo registrado ainda.")
        }
    }
}

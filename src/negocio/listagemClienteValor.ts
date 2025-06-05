import Cliente from "../modelo/cliente"

export default class ListagemClienteValor {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public listar(): void {

        const ranking = this.clientes.map(cliente => {
            const totalProdutos = cliente.getProdutosConsumidos.reduce((acc, produto) => acc + produto.getPreco, 0)
            const totalServicos = cliente.getServicosConsumidos.reduce((acc, servico) => acc + servico.getPreco, 0)
            return {
                cliente,
                total: totalProdutos + totalServicos
            }
        })

        ranking.sort((a, b) => b.total - a.total)

        console.log("\n--- TOP 5 CLIENTES POR VALOR GASTO ---")
        ranking.slice(0, 5).forEach((item, index) => {
            console.log(
                `${index + 1} - ${item.cliente.nome} (CPF: ${item.cliente.getCpf.getValor}) - R$ ${item.total.toFixed(2)}`
            )
        })
        if (ranking.length === 0) {
            console.log("Nenhum consumo registrado ainda.")
        }
    }
}

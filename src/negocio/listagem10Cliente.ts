import Cliente from "../modelo/cliente"

export default class Listagem10Cliente {
    private clientes: Array<Cliente>

    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }

    public listar(): void {
        const ranking = this.clientes.map(cliente => {
            const total = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            return {
                cliente,
                total
            }
        })
        ranking.sort((a, b) => b.total - a.total)

        console.log("\n--- TOP 10 CLIENTES POR QUANTIDADE DE CONSUMO ---")
        ranking.slice(0, 10).forEach((item, index) => {
            console.log(
                `${index + 1} - ${item.cliente.nome} (CPF: ${item.cliente.getCpf.getValor}) - ${item.total} itens consumidos`
            )
        })
        if (ranking.length === 0) {
            console.log("Nenhum consumo registrado ainda.")
        }
    }
}

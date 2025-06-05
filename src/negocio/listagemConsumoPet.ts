import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export default class ListagemConsumoPet {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
    }

    public listar(): void {
        console.log("\n--- CONSUMO POR TIPO E RAÇA DE PETS ---")

        const consumoPorPet = new Map<string, {
            produtos: Map<string, number>,
            servicos: Map<string, number>
        }>()

        // Processar consumos
        this.clientes.forEach(cliente => {
            cliente.getPets.forEach(pet => {
                const key = `${pet.getTipo} - ${pet.getRaca}`
                
                if (!consumoPorPet.has(key)) {
                    consumoPorPet.set(key, {
                        produtos: new Map<string, number>(),
                        servicos: new Map<string, number>()
                    })
                }

                const consumos = consumoPorPet.get(key)!

                // Contar produtos
                cliente.getProdutosConsumidos.forEach(produto => {
                    const count = consumos.produtos.get(produto.getNome) || 0
                    consumos.produtos.set(produto.getNome, count + 1)
                })

                // Contar serviços
                cliente.getServicosConsumidos.forEach(servico => {
                    const count = consumos.servicos.get(servico.getNome) || 0
                    consumos.servicos.set(servico.getNome, count + 1)
                })
            })
        })

        // Exibir resultados
        consumoPorPet.forEach((consumos, key) => {
            console.log(`\nPet: ${key}`)
            
            // Produtos
            console.log("  Produtos mais consumidos:")
            const produtosOrdenados = Array.from(consumos.produtos.entries())
                .sort((a, b) => b[1] - a[1])
            
            produtosOrdenados.slice(0, 5).forEach(([nome, quantidade], index) => {
                console.log(`  ${index + 1}. ${nome} (${quantidade}x)`)
            })

            // Serviços
            console.log("\n  Serviços mais consumidos:")
            const servicosOrdenados = Array.from(consumos.servicos.entries())
                .sort((a, b) => b[1] - a[1])
            
            servicosOrdenados.slice(0, 5).forEach(([nome, quantidade], index) => {
                console.log(`  ${index + 1}. ${nome} (${quantidade}x)`)
            })

            console.log("--------------------------------------")
        })

        if (consumoPorPet.size === 0) {
            console.log("Nenhum consumo registrado por pets ainda.")
        }
    }
}

import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Produto from "../modelo/produto"
import Servico from "../modelo/servico"

export default class RegistroConsumo {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    private entrada: Entrada

    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public registrar(): void {
        console.log("\n--- Clientes ---")
        
        this.clientes.forEach((cliente, i) => {
            console.log(`${i + 1} - ${cliente.nome} (CPF: ${cliente.getCpf.getValor})`)
        })
        let indiceCliente = this.entrada.receberNumero("Selecione o cliente (número): ") - 1
        let cliente = this.clientes[indiceCliente]
        if (!cliente) {
            console.log("Cliente não encontrado!")
            return
        }

        
        console.log("1 - Registrar consumo de produto")
        console.log("2 - Registrar consumo de serviço")
        let tipo = this.entrada.receberNumero("Escolha uma opção: ")

        if (tipo === 1) {
        
            this.produtos.forEach((produto, i) => {
                console.log(`${i + 1} - ${produto.getNome} (R$ ${produto.getPreco.toFixed(2)})`)
            })
            let indiceProduto = this.entrada.receberNumero("Selecione o produto (número): ") - 1
            let produto = this.produtos[indiceProduto]
            if (!produto) {
                console.log("Produto não encontrado!")
                return
            }
            let quantidade = this.entrada.receberNumero("Quantidade: ")
            for (let i = 0; i < quantidade; i++) {
                cliente.getProdutosConsumidos.push(produto)
            }
            console.log("Consumo de produto registrado com sucesso!")
        } else if (tipo === 2) {
        
            this.servicos.forEach((servico, i) => {
                console.log(`${i + 1} - ${servico.getNome} (R$ ${servico.getPreco.toFixed(2)})`)
            })
            let indiceServico = this.entrada.receberNumero("Selecione o serviço (número): ") - 1
            let servico = this.servicos[indiceServico]
            if (!servico) {
                console.log("Serviço não encontrado!")
                return
            }
            let quantidade = this.entrada.receberNumero("Quantidade: ")
            for (let i = 0; i < quantidade; i++) {
                cliente.getServicosConsumidos.push(servico)
            }
            console.log("Consumo de serviço registrado com sucesso!")
        } else {
            console.log("Opção inválida!")
        }
    }
}

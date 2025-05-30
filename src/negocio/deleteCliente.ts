import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"

export default class DeleteCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public remover(): void {
        console.log(`\nInício da remoção de cliente`);
        this.listarClientesParaRemocao()
        
        let cpf = this.entrada.receberTexto(`Digite o CPF do cliente que deseja remover: `)
        let indice = this.clientes.findIndex(c => c.getCpf.getValor === cpf)
        
        if (indice === -1) {
            console.log(`Cliente não encontrado!`)
            return
        }
        
        let cliente = this.clientes[indice]
        console.log(`Cliente encontrado: ${cliente.nome}`)
        
        let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja remover este cliente? (s/n): `)
        
        if (confirmacao.toLowerCase() === 's') {
            this.clientes.splice(indice, 1)
            console.log(`Cliente removido com sucesso!`)
        } else {
            console.log(`Remoção cancelada.`)
        }
        console.log(`\nOperação concluída :)\n`);
    }
    
    private listarClientesParaRemocao(): void {
        console.log(`\nClientes disponíveis para remoção:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome} - CPF: ${cliente.getCpf.getValor}`);
        });
        console.log(`--------------------------------------`);
    }
}

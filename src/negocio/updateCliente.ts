import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import CPF from "../modelo/cpf"

export default class UpdateCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public atualizar(): void {
        console.log(`\nInício da edição de cliente`);
        this.listarClientesParaEdicao()
        
        let cpf = this.entrada.receberTexto(`Digite o CPF do cliente que deseja editar: `)
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpf)
        
        if (!cliente) {
            console.log(`Cliente não encontrado!`)
            return
        }
        
        console.log(`Cliente encontrado: ${cliente.nome}`)
        console.log(`1 - Editar nome`)
        console.log(`2 - Editar nome social`)
        console.log(`0 - Voltar`)
        
        let opcao = this.entrada.receberNumero(`Escolha o que deseja editar: `)
        
        switch (opcao) {
            case 1:
                let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
                cliente.nome = novoNome
                console.log(`Nome atualizado com sucesso!`)
                break;
            case 2:
                let novoNomeSocial = this.entrada.receberTexto(`Digite o novo nome social: `)
                cliente.nomeSocial = novoNomeSocial
                console.log(`Nome social atualizado com sucesso!`)
                break;
            case 0:
                return
            default:
                console.log(`Opção inválida!`)
        }
        console.log(`\nEdição concluída :)\n`);
    }
    
    private listarClientesParaEdicao(): void {
        console.log(`\nClientes disponíveis para edição:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome} - CPF: ${cliente.getCpf.getValor}`);
        });
        console.log(`--------------------------------------`);
    }
}

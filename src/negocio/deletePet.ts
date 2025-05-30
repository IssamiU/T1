import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"

export default class DeletePet {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public remover(): void {
        console.log(`\nInício da remoção de pet`);
        this.listarClientesComPets()
        
        let cpf = this.entrada.receberTexto(`Digite o CPF do dono do pet: `)
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpf)
        
        if (!cliente || cliente.getPets.length === 0) {
            console.log(`Cliente não encontrado ou sem pets cadastrados!`)
            return
        }
        
        console.log(`\nPets do cliente ${cliente.nome}:`)
        cliente.getPets.forEach((pet, index) => {
            console.log(`${index + 1} - ${pet.getNome} (${pet.getTipo})`)
        })
        
        let indicePet = this.entrada.receberNumero(`Escolha o pet para remover (número): `) - 1
        
        if (indicePet < 0 || indicePet >= cliente.getPets.length) {
            console.log(`Pet não encontrado!`)
            return
        }
        
        let pet = cliente.getPets[indicePet]
        console.log(`Pet selecionado: ${pet.getNome}`)
        
        let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja remover este pet? (s/n): `)
        
        if (confirmacao.toLowerCase() === 's') {
            cliente.getPets.splice(indicePet, 1)
            console.log(`Pet removido com sucesso!`)
        } else {
            console.log(`Remoção cancelada.`)
        }
        
        console.log(`\nOperação concluída :)\n`);
    }
    
    private listarClientesComPets(): void {
        console.log(`\nClientes com pets:`);
        this.clientes.forEach(cliente => {
            if (cliente.getPets.length > 0) {
                console.log(`${cliente.nome} - CPF: ${cliente.getCpf.getValor} (${cliente.getPets.length} pets)`)
            }
        });
        console.log(`--------------------------------------`);
    }
}

import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Pet from "../modelo/pet"

export default class UpdatePet {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public atualizar(): void {
        console.log(`\nInício da edição de pet`);
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
        
        let indicePet = this.entrada.receberNumero(`Escolha o pet (número): `) - 1
        
        if (indicePet < 0 || indicePet >= cliente.getPets.length) {
            console.log(`Pet não encontrado!`)
            return
        }
        
        let pet = cliente.getPets[indicePet]
        console.log(`Pet selecionado: ${pet.getNome}`)
        
        let novoNome = this.entrada.receberTexto(`Digite o novo nome (atual: ${pet.getNome}): `)
        if (novoNome.trim()) {
            let novoTipo = this.entrada.receberTexto(`Digite o novo tipo (atual: ${pet.getTipo}): `) || pet.getTipo
            let novaRaca = this.entrada.receberTexto(`Digite a nova raça (atual: ${pet.getRaca}): `) || pet.getRaca
            let novoGenero = this.entrada.receberTexto(`Digite o novo gênero (atual: ${pet.getGenero}): `) || pet.getGenero
            
            cliente.getPets[indicePet] = new Pet(novoNome, novaRaca, novoGenero, novoTipo)
            console.log(`Pet atualizado com sucesso!`)
        }
        
        console.log(`\nEdição concluída :)\n`);
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

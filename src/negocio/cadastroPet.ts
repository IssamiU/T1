import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Pet from "../modelo/pet"

export default class CreatePet {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    
    public cadastrar(): void {
        console.log(`\nInício do cadastro de pet`);
        this.listarClientes()
        
        let cpf = this.entrada.receberTexto(`Digite o CPF do dono do pet: `)
        let cliente = this.clientes.find(c => c.getCpf.getValor === cpf)
        
        if (!cliente) {
            console.log(`Cliente não encontrado!`)
            return
        }
        
        console.log(`Cliente encontrado: ${cliente.nome}`)
        
        let nome = this.entrada.receberTexto(`Digite o nome do pet: `)
        let tipo = this.entrada.receberTexto(`Digite o tipo do pet (cão, gato, etc.): `)
        let raca = this.entrada.receberTexto(`Digite a raça do pet: `)
        let genero = this.entrada.receberTexto(`Digite o gênero do pet: `)
        
        let pet = new Pet(nome, raca, genero, tipo)
        cliente.getPets.push(pet)
        
        console.log(`\nPet cadastrado com sucesso :)\n`);
    }
    
    private listarClientes(): void {
        console.log(`\nClientes disponíveis:`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ${cliente.nome} - CPF: ${cliente.getCpf.getValor}`);
        });
        console.log(`--------------------------------------`);
    }
}

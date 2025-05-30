import Cliente from "../modelo/cliente"

export default class ReadPets {
    private clientes: Array<Cliente>
    
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    
    public listar(): void {
        console.log(`\nLista de todos os pets:`);
        let temPets = false
        
        this.clientes.forEach(cliente => {
            if (cliente.getPets.length > 0) {
                temPets = true
                console.log(`\nDono: ${cliente.nome}`)
                cliente.getPets.forEach(pet => {
                    console.log(`  Pet: ${pet.getNome}`)
                    console.log(`  Tipo: ${pet.getTipo}`)
                    console.log(`  Raça: ${pet.getRaca}`)
                    console.log(`  Gênero: ${pet.getGenero}`)
                    console.log(`  ----------------------`)
                })
            }
        })
        
        if (!temPets) {
            console.log(`Nenhum pet cadastrado.`)
        }
        console.log(`\n`);
    }
}

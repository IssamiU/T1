import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class DeleteServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public remover(): void {
        console.log(`\nInício da remoção de serviço`);
        this.listarServicosParaRemocao()
        
        if (this.servicos.length === 0) {
            console.log(`Nenhum serviço cadastrado!`)
            return
        }
        
        let nomeServico = this.entrada.receberTexto(`Digite o nome do serviço que deseja remover: `)
        let indice = this.servicos.findIndex(s => s.getNome === nomeServico)
        
        if (indice === -1) {
            console.log(`Serviço não encontrado!`)
            return
        }
        
        let servico = this.servicos[indice]
        console.log(`Serviço encontrado: ${servico.getNome} - R$ ${servico.getPreco.toFixed(2)}`)
        
        let confirmacao = this.entrada.receberTexto(`Tem certeza que deseja remover este serviço? (s/n): `)
        
        if (confirmacao.toLowerCase() === 's') {
            this.servicos.splice(indice, 1)
            console.log(`Serviço removido com sucesso!`)
        } else {
            console.log(`Remoção cancelada.`)
        }
        console.log(`\nOperação concluída :)\n`);
    }
    
    private listarServicosParaRemocao(): void {
        console.log(`\nServiços disponíveis para remoção:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.getNome} - Preço: R$ ${servico.getPreco.toFixed(2)}`);
        });
        console.log(`--------------------------------------`);
    }
}

import Entrada from "../io/entrada"
import Servico from "../modelo/servico"

export default class UpdateServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    
    public atualizar(): void {
        console.log(`\nInício da edição de serviço`);
        this.listarServicosParaEdicao()
        
        if (this.servicos.length === 0) {
            console.log(`Nenhum serviço cadastrado!`)
            return
        }
        
        let nomeServico = this.entrada.receberTexto(`Digite o nome do serviço que deseja editar: `)
        let servico = this.servicos.find(s => s.getNome === nomeServico)
        
        if (!servico) {
            console.log(`Serviço não encontrado!`)
            return
        }
        
        console.log(`Serviço encontrado: ${servico.getNome} - R$ ${servico.getPreco.toFixed(2)}`)
        console.log(`1 - Editar nome`)
        console.log(`2 - Editar preço`)
        console.log(`0 - Voltar`)
        
        let opcao = this.entrada.receberNumero(`Escolha o que deseja editar: `)
        
        switch (opcao) {
            case 1:
                let novoNome = this.entrada.receberTexto(`Digite o novo nome: `)
                servico.setNome = novoNome
                console.log(`Nome atualizado com sucesso!`)
                break;
            case 2:
                let novoPreco = this.entrada.receberNumero(`Digite o novo preço: `)
                servico.setPreco = novoPreco
                console.log(`Preço atualizado com sucesso!`)
                break;
            case 0:
                return
            default:
                console.log(`Opção inválida!`)
        }
        console.log(`\nEdição concluída :)\n`);
    }
    
    private listarServicosParaEdicao(): void {
        console.log(`\nServiços disponíveis para edição:`);
        this.servicos.forEach(servico => {
            console.log(`Nome: ${servico.getNome} - Preço: R$ ${servico.getPreco.toFixed(2)}`);
        });
        console.log(`--------------------------------------`);
    }
}

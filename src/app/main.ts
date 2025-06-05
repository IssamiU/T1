import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import UpdateCliente from "../negocio/updateCliente";
import DeleteCliente from "../negocio/deleteCliente";
import CreateProduto from "../negocio/cadastroProduto";
import CreateServico from "../negocio/cadastroServico";
import ReadProdutos from "../negocio/listagemProdutos";
import ReadServicos from "../negocio/listagemServicos";
import UpdateProduto from "../negocio/updateProduto";
import UpdateServico from "../negocio/updateServico";
import DeleteProduto from "../negocio/deleteProduto";
import DeleteServico from "../negocio/deleteServico";
import CreatePet from "../negocio/cadastroPet";
import ReadPets from "../negocio/listagemPets";
import UpdatePet from "../negocio/updatePet";
import DeletePet from "../negocio/deletePet";
import RegistroConsumo from "../negocio/registroConsumo"; 
import Listagem10Cliente from "../negocio/listagem10Cliente";
import ListagemConsumo from "../negocio/listagemConsumo";
import ListagemConsumoPet from "../negocio/listagemConsumoPet";
import ListagemClienteValor from "../negocio/listagemClienteValor";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`
+================================================================+
|                        MENU PRINCIPAL                          |
+================================================================+
|                                                                |
|  CLIENTES                          PETS                        |
|  1 - Cadastrar cliente             5 - Cadastrar pet           |
|  2 - Listar clientes               6 - Listar pets             |
|  3 - Editar cliente                7 - Editar pet              |
|  4 - Remover cliente               8 - Remover pet             |
|                                                                | 
|  PRODUTOS                          SERVICOS                    |
|  9  - Cadastrar produto            13 - Cadastrar servico      |
|  10 - Listar produtos              14 - Listar servicos        |
|  11 - Editar produto               15 - Editar servico         |
|  12 - Remover produto              16 - Remover servico        |
|                                                                |
|  17 - Registrar consumo (produto/servico)                      |
|  18 - Listar top 10 clientes por quantidade de consumo         |
|  19 - Listar produtos e servicos mais consumidos               |
|  20 - Listar consumo por tipo e raça de pets                   |
|  21 - Listar top 5 clientes por valor de consumo               |
|                                                                |
|  0 - Sair                                                      |
|                                                                |
+================================================================+`
);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opcao: `)

    switch (opcao) {
        case 1:
            console.log(`\n--- CADASTRO DE CLIENTE ---`);
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            console.log(`\n--- LISTAGEM DE CLIENTES ---`);
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 3:
            console.log(`\n--- EDICAO DE CLIENTE ---`);
            let editarCliente = new UpdateCliente(empresa.getClientes)
            editarCliente.atualizar()
            break;
        case 4:
            console.log(`\n--- REMOCAO DE CLIENTE ---`);
            let removerCliente = new DeleteCliente(empresa.getClientes)
            removerCliente.remover()
            break;
        case 5:
            console.log(`\n--- CADASTRO DE PET ---`);
            let cadastrarPet = new CreatePet(empresa.getClientes)
            cadastrarPet.cadastrar()
            break;
        case 6:
            console.log(`\n--- LISTAGEM DE PETS ---`);
            let listarPets = new ReadPets(empresa.getClientes)
            listarPets.listar()
            break;
        case 7:
            console.log(`\n--- EDICAO DE PET ---`);
            let editarPet = new UpdatePet(empresa.getClientes)
            editarPet.atualizar()
            break;
        case 8:
            console.log(`\n--- REMOCAO DE PET ---`);
            let removerPet = new DeletePet(empresa.getClientes)
            removerPet.remover()
            break;
        case 9:
            console.log(`\n--- CADASTRO DE PRODUTO ---`);
            let cadastrarProduto = new CreateProduto(empresa.getProdutos)
            cadastrarProduto.cadastrar()
            break;
        case 10:
            console.log(`\n--- LISTAGEM DE PRODUTOS ---`);
            let listarProdutos = new ReadProdutos(empresa.getProdutos)
            listarProdutos.listar()
            break;
        case 11:
            console.log(`\n--- EDICAO DE PRODUTO ---`);
            let editarProduto = new UpdateProduto(empresa.getProdutos)
            editarProduto.atualizar()
            break;
        case 12:
            console.log(`\n--- REMOCAO DE PRODUTO ---`);
            let removerProduto = new DeleteProduto(empresa.getProdutos)
            removerProduto.remover()
            break;
        case 13:
            console.log(`\n--- CADASTRO DE SERVICO ---`);
            let cadastrarServico = new CreateServico(empresa.getServicos)
            cadastrarServico.cadastrar()
            break;
        case 14:
            console.log(`\n--- LISTAGEM DE SERVICOS ---`);
            let listarServicos = new ReadServicos(empresa.getServicos)
            listarServicos.listar()
            break;
        case 15:
            console.log(`\n--- EDICAO DE SERVICO ---`);
            let editarServico = new UpdateServico(empresa.getServicos)
            editarServico.atualizar()
            break;
        case 16:
            console.log(`\n--- REMOCAO DE SERVICO ---`);
            let removerServico = new DeleteServico(empresa.getServicos)
            removerServico.remover()
            break;
        case 17:
            console.log(`\n--- REGISTRO DE CONSUMO ---`);
            let registroConsumo = new RegistroConsumo(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
            );
            registroConsumo.registrar();
            break;
        case 18:
            let listagemTopClientes = new Listagem10Cliente(empresa.getClientes)
            listagemTopClientes.listar()
            break; 
        case 19:
            let listagemMaisConsumidos = new ListagemConsumo(
            empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            listagemMaisConsumidos.listar()
            break;
        case 20:
            let listagemConsumoPet = new ListagemConsumoPet(
            empresa.getClientes,
            empresa.getProdutos,
            empresa.getServicos
            )
            listagemConsumoPet.listar()
            break;
        case 21:
            let listagemClienteValor = new ListagemClienteValor(empresa.getClientes)
            listagemClienteValor.listar()
            break;
        case 0:
            execucao = false
            console.log(`
+========================================================+
|    *                                              *    |
|         <===    ATÉ MAIS, VOLTE SEMPRE!    ===>        |
|    *                                              *    |
+========================================================+
`)
            break;
        default:
            console.log(`Operacao nao entendida :(`)
    }
}

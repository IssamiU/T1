# Atividade 1 – c4p

## Descrição do Projeto

Esta atividade consiste em uma aplicação Node.js simples, focada em entrada de dados pelo terminal utilizando a biblioteca `prompt-sync`. O projeto foi desenvolvido para rodar em ambiente local, com dependências mínimas e tipagem TypeScript para melhor experiência de desenvolvimento.

---

## Estrutura do Projeto

```
/
├── out/
│   └── app/
│       └── main.js
├── src/
│   └── ... (caso utilize TypeScript)
├── package.json
└── ...
```

---

## Versões Importantes Utilizadas

| Dependência          | Versão          |
|----------------------|-----------------|
| Node.js              | 18.x (obrigatório) |
| prompt-sync          | ^4.2.0          |
| @types/prompt-sync   | ^4.2.0          |
| @types/node          | ^18.11.9        |

---

## Pré-requisitos

- **Node.js:** Versão 18.x (obrigatório)
- **npm:** Compatível com Node 18.x

> **Atenção:**  
> O projeto foi desenvolvido e testado com Node.js 18.x. O uso de versões diferentes (como Node 16.x ou 20.x/22.x) pode causar erros de compatibilidade, especialmente com dependências de tipos e bibliotecas de entrada de dados.  
>  
> Se necessário, utilize o [nvm](https://github.com/coreybutler/nvm-windows) (Windows) ou [nvm-sh/nvm](https://github.com/nvm-sh/nvm) (Linux/macOS) para instalar e alternar entre versões do Node.js.

---

## Instalação e Execução

1. **Clone o repositório:**

```
git clone https://github.com/IssamiU/T1
```

2. **Instale as dependências:**

```
npm install
```

3. **Compile o projeto:**

```
npx tsc
```

> Certifique-se de que o arquivo de saída (`main.js`) está em `out/app/main.js` conforme o `package.json`.

4. **Execute o programa:**

```
node out/app/main.js
```


---

## Observações Importantes

- **Versão do Node.js:**  
O uso de uma versão diferente da 18.x pode resultar em erros de execução ou incompatibilidade de tipos.
- **Entrada de Dados:**  
O projeto utiliza `prompt-sync` para entrada de dados via terminal. Certifique-se de executar no terminal/console.
- **Scripts Disponíveis:**  
- Não há script de start configurado no package.json; execute diretamente pelo Node.
- O script `test` é apenas um placeholder e não executa testes reais.
- **TypeScript:**  
Se utilizar arquivos `.ts`, lembre-se de compilar antes de rodar o projeto.

---

## Contato

Em caso de dúvidas ou sugestões, entre em contato com o responsável pela atividade.

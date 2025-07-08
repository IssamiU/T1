# T1

## Estrutura do Projeto

```
/
├── out/
│   └── app/
│       └── main.js
├── src/
│   └── ... 
├── package.json
└── ...
```

---

## Versões Importantes Utilizadas

| Dependência          | Versão          |
|----------------------|-----------------|
| Node.js              | 16.x (obrigatório) |
| prompt-sync          | ^4.2.0          |
| @types/prompt-sync   | ^4.2.0          |
| @types/node          | ^18.11.9        |

---

## Pré-requisitos

- **Node.js:** Versão 16.x (obrigatório)
- **npm:** Compatível com Node 16.x

> **Atenção:**  
> O projeto foi desenvolvido e testado com Node.js 16.x. O uso de versões diferentes (como Node 20.x ou 22.x) pode causar erros de compatibilidade, especialmente com dependências de tipos e bibliotecas de entrada de dados.  

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
O uso de uma versão diferente da 16.x pode resultar em erros de execução ou incompatibilidade de tipos.
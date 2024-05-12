# Code Challenge: Ganho de Capital

# Contexto  
- Esta aplicação calcula o imposto a ser pago sobre lucros ou prejuízos de operações no mercado financeiro de ações.

- **Funcionamento**
- Há dois tipos de operações que a aplicação pode receber:
    - `buy`: Compra de ações, onde se calcula o preço médio ponderado das ações.
    - `sell`: Venda de ações, onde a aplicação calcula o valor de impostos sobre lucros ou prejuízos de operações.

- Em cada operação deve retornar o valor do imposto da operação seguindo as seguintes regras:
    - O percentual de imposto pago é de 20% sobre o lucro obtido na operação.
    - Os prejuízos passados são deduzidos dos lucros futuros, até que todo prejuízo seja deduzido.
    - Somente são cobrados impostos de operações de venda maiores que R$20.000,00, que tiverem obtidos lucros.

# Estrutura do sistema
- Para o desenvolvimento desse projeto foi escolhido a linguagem Javascript em um ambiente de execução NodeJS.
    - Essa escolha facilita a criação dos testes e ajuda a manter a estrutura do código padronizada.
- Aplicando alguns conceitos de SOLID, Clean architecture e testes o sistema está estruturado da seguinte forma:
    - Basicamente toda aplicação fica na pasta `src/` onde começa sua execução. Os módulos criados foram:
        - `application`: Nesse módulo é onde ficam as regras de negócio principais.
        - `operations`: Em operation estão as funções que executam ações do sistema.
        - `utils`: As funções utilizadas para fazer os cálculos, `funções puras`, ficam no módulo utils.
    - Cada módulo é testado separdamente
- Foi implementado um teste de integração que está na pasta `teste/` onde todos os casos do enunciado são testado como entradas e são comparados com as saídas esperadas.  

## Executando os testes

- Foi utilizada a framework `jest` para os testes da aplicação,

- Os **testes unitários** estão nas pastas `test/` dentro da pasta de cada módulo
- Os **testes de integração** estão estão presentes na pasta `test/` na raiz do projeto
  - Os testes de integração utilizam os inputs que estão em arquivos na pasta `test/input/` e seus respectivos resultados esperados (pasta `test/output`)

```shell
# Instalar dependências
npm install

# Rodar script de teste
npm run test
```

## Executando a aplicação

### Localmente

- Requisitos:
  - Ambiente: [Nodejs 20.13](https://nodejs.org/en/download/)
  - Gerenciador de pacotes: [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

```shell
# Para instalar as dependências do projeto
npm install

# Rodar a aplicação com cases de entrada (stdin)
# É possível testar todos os cases de 1 a 8  

#unix e mac
node src/index.js < "test/input/case8"

#windows
Get-Content "test/input/case7" | node src/index.js
```

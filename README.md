# Code Challenge: Ganho de Capital

# Contexto  
- Esta aplicação calcula o imposto a ser pago sobre lucros ou prejuízos de operações no mercado financeiro de ações.

- **Funcionamento**
- Há dois tipos de operações que a aplicação pode receber:
    `buy`: Compra de ações, onde se calcula o preço médio ponderado das ações.
    `sell`: Venda de ações, onde a aplicação calcula o valor de impostos sobre lucros ou prejuízos de operações.

- Em cada operação deve retornar o valor do imposto da operação seguindo as seguintes regras:
    O percentual de imposto pago é de 20% sobre o lucro obtido na operação.
    Os prejuízos passados são deduzidos dos lucros futuros, até que todo prejuízo seja deduzido.
    Somente são cobrados impostos de operações de venda maiores que R$20.000,00, que tiverem obtidos lucros.
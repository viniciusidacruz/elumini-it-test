# elumini-it-test

Projeto front-end sênior com foco em mostrar habilidades técnicas de um desenvolvimento de software.

## Segurança (Repositório)
Para garantir a segurança do projeto, foi adotada a prática de assinatura de commits, assegurando que apenas o usuário Vinicius Italo da Cruz (Eu) seja autorizado a realizar commits neste repositório.

## Gitflow e Conventional commits:
Também, considerando o processo e o fluxo de trabalho, optei por utilizar os commits convencionais, que atualmente são padrão no mercado para proporcionar uma melhor legibilidade nos commits realizados. O mesmo princípio se aplica à nomenclatura de branches, empregando sufixos como: feat, fix, test, chore, docs, styles, ci, entre outros, e seguindo o processo: 

![WebApp](https://i.imgur.com/kf8XC7A.jpg)

## Continuous Integration (Integração continua)
Antes de abordar a arquitetura do projeto, priorizei em estabelecer maior confiabilidade nas alterações que são enviadas para as branches "develop" e "main". Para isso, foi implementado uma pipeline que avalia os testes unitários da aplicação como um todo.

<br>

# Bora começar... 🚀
Antes de iniciar o projeto, você pode encontrar um erro ao tentar instalar as dependências, o qual ocorre porque o projeto foi configurado para requerer as seguintes configurações mínimas:

| Ferramentas  | Versão |
| ------------- | ------------- |
| node  | 18.8.0  |
| npm  |  8.1.0 |
| yarn  |  não funcionara |
| pnpm  |  não funcionara |

Recomendado: utilizar um gerenciador do Node, como por exemplo o nvm. Com isso instalado, você pode executar o seguinte comando:


```
nvm use
```


## Inicialização

Primeiramente, uma vez que as configurações estejam conforme desejado, basta executar o seguinte comando:

```
npm install && npm run dev
```

## Finalização
E, por último, após realizar todo o fluxo manualmente no projeto e confirmar que está correto, é possível executar também os testes unitários do mesmo:

```
npm run test
```
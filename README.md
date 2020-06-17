# investments-chart

Uma aplicação para acompanhar o rendimento de seus investimentos através de um gráfico de área. A API base do projeto está na seguinte [url](https://gist.githubusercontent.com/AgtLucas/a67c345e15c2eb3d4668c9b7e330ac44/raw/1de2450cbe69fde065bca9e498aaaaafcca61257/mock-data.js).

## Modelagem da solução

A aplicação é totalmente estática [SPR](https://vercel.com/blog/serverless-pre-rendering), todos os estáticos são servidos em uma CDN e o `data rendering` é dinâmico. O build final servido na CDN para o usuário contém já os valores da API e assim ganhamos tempo no request, isso é somente possível atráves do [`Cache-Control: stale-while-revalidate`](https://vercel.com/blog/serverless-pre-rendering#cache-control-%60stale-while-revalidate%60).

### Tecnologias

As seguintes tecnologias são usadas nesse projeto:

#### Front End

- [React](https://reactjs.org/)
- [Reakit](https://reakit.io/docs/get-started/) (Componentes acessíveis [WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria/))
- [Victory](https://formidable.com/open-source/victory/) (Componentes de gráfico]
- [Testing Library](https://testing-library.com/docs/intro) (React testes)
- [Jest](https://jestjs.io/) (Javascript testes)

#### Testes

A aplicação tem três tipos de testes: Unidade, Integração e End-to-end. Todos os testes estão dentro do seu contexto na pasta `__tests__`.

#### Deploy

A plataforma de deploy escolhida, foi a [Vercel](https://vercel.com) (Deploy estático e JAMstack, CDN global).

Para realizar deploy em produção, é necessário que todos os passos do CI sejam checados (corretos), logo após o deploy é iniciado para produção.

Durante o período de build, é possível ter uma url de preview das suas alterações. Basta estar entrar na PR e olhar o último comentário.

#### Acessibilidade

A aplicação foi desenhada para ser totalmente acessível aos usuários, a navegação pela aplicação pode ser feita totalmente através do teclado.

Exemplo, no filtro de períodos é possível realizar a seguinte ação: <kbd>Tab</kbd> para dar foco no menu e <kbd>↑</kbd> + <kbd>↓</kbd> + <kbd>←</kbd> + <kbd>→</kbd> para navegar entre os itens do menu.

#### UI/UX

O design da aplicação foi feito no [Framer](https://framer.com/share/Investments-chart-3Z0nww2xDAprVfzec34m) seguindo todas as boas práticas de UX.

Logo após a conclusão da tela, o resultado final foi disponibilizado no [Dribbble](https://dribbble.com/shots/12015001-Investments-chart).

## Usando localmente

#### Necessário

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

#### Rodando

1. Clone o projeto

- `git clone git@github.com:murillo94/investments-chart.git`

2. Instale as dependências:

- `$ yarn`

3. Optando por um ambiente de desenvolvimeto:

- `$ yarn dev`

4. Abra um navegador com a url `http://localhost:3000`

#### Alguns outros comandos

Caso opte por um ambiente de produção ao invés de desenvolvimeto:

- `$ yarn build`
- `$ yarn start`

Caso queira rodar os testes:

- `$ yarn test`

## Como contruibuir

Você pode abrir um Pull-Request e Issues a qualquer momento e todas elas são bem vindas. Para algumas ideias talvez seja interessante que você abra uma issue antes de realizar um PR, para que possamos debater sobre a sua ideia e achar a melhor solução.

1. Para rodar localmente, siga os passos da [seção "Usando localmente"](#Usando-localmente)

2. Para subir um PR, aprenda os passos do [guia de contribuição](./CONTRIBUTING.md).

## url

https://investments-chart-alpha.vercel.app/

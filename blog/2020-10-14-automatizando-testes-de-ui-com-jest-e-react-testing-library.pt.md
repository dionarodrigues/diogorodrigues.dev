---
title: 'Automatizando testes de UI com Jest e React Testing Library'
date: '2020-10-14 01:21:23'
description: "Que código complexo não é fácil de debugar, todo desenvolvedor sabe. Mas nem todos os desenvolvedores sabem como usar o poder dos testes automatizados para verificar o comportamento do aplicativo. Portanto, nesse artigo, mostrarei como evitar perder muito tempo tentando encontrar bugs de IU e também certificando-se de que o programa funcione conforme o esperado."
category: 'Web design'
background: '#353b48'
featuredImage: '/assets/img/blog/automating-ui-tests-with-jest-and-react-testing-library.jpg'
---

> “The more your tests resemble the way your software is used, the more confidence they can give you.” - [Kent C. Dodds](https://twitter.com/kentcdodds/status/977018512689455106), creator of React Testing Library

_Tradução: Quanto mais seus testes se assemelham à forma como o software é usado, mais confiança eles podem lhe dar._

**Os testes se tornaram um requisito importante para os projetos React atualmente. E isso porque essa técnica proporciona mais confiança à equipe e ajuda a colocar o projeto em produção rapidamente, já que o código é mais confiável.**

[Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/) são duas ferramentas que nos ajudam muito a criar testes para nossos componentes React. Se você não sabe do que estou falando ou se quer saber mais sobre isso, fique comigo. 😁✨

## Visão geral sobre os testes

Embora o teste no front-end esteja crescendo com a popularidade do React, não vejo isso como uma tendência, mas como uma parte que deveria ser obrigatória em qualquer tipo de projeto que envolva o desenvolvimento de códigos de interação do usuário final.

### Vantagens de escrever testes

- Ajuda a detectar bugs mais cedo
- Fornece nossa própria documentação sobre o código
- Nos obriga a escrever um código melhor ao construir pequenos componentes com responsabilidade única
- Garante que o código seja mais consistente em toda a equipe
- Nos dá mais confiança porque torna o aplicativo fácil de manter, permitindo que os desenvolvedores refatorem o código com segurança

### Tipos de testes

- **Testes unitários:** é usado para validar a operação das menores unidades de código do sistema. A ideia é que esse tipo de teste deve ser simples e sem qualquer dependência de funcionalidades externas - claro, existem algumas exceções onde o componente precisa trabalhar com dados do banco de dados ou de alguma outra fonte, casos em que usamos mock (vamos ver mais sobre isso adiante).
- **Testes funcionais:** verifica se várias unidades funcionam quando executadas em conjunto.

### Como identificar testes unitários e funcionais

Vamos imaginar um campo de busca que, ao ser clicado, se expande. Ao digitar algo, uma caixa de sugestão é exibida com dados de uma API; e se não houver sugestões, uma mensagem de feedback será exibida.

Os testes unitários podem ser: verificar se o campo de pesquisa se expandirá ao receber o foco; verificar se, ao digitar algo, o método de busca da API é chamado; verificar se não há sugestões, uma mensagem de feedback é exibida...

Os testes functionais podem ser: simulação do usuário clicando, digitando, excluindo...

### Como pensar testando

Há uma boa prática chamada desenvolvimento orientado a teste (test-driven development - TDD) que é usada para garantir que nossos testes abrangerão todas as funcionalidades que o componente deve ter antes de criar o próprio componente. Dessa forma, garantimos que o código será agnóstico, ou seja, tudo deve funcionar independentemente de como o código foi implementado.

**Basicamente, o processo é:**

- Primeiro, precisamos criar todos os testes e todos falharão
- Em seguida, fornecemos uma solução simples para todos os testes passarem
- E finalmente, nós refatoramos a solução da melhor maneira possível

**Por que é importante criar os testes antes do código do componente?**

Se os testes são criados por último, tendemos a escrever os testes de acordo com o código que foi implementado, ao invés do problema que deve ser resolvido. Ou seja, o teste pode ser orientado para a implementação ao invés da funcionalidade, o que pode ser um problema se a solução/implementação mudar no futuro.

## Como testar componentes React

Existem várias ferramentas para implementar os testes, como você pode ver nesta [pesquisa de JavaScript](https://2019.stateofjs.com/testing/) que as colocam em um ranking de interesse e satisfação dos desenvolvedores.

Nesse artigo, vamos nos concentrar em duas dessas ferramentas de teste que são muito bem-sucedidas na comunidade React e das quais sou um grande fã: jest e react testing library.

### Frameworks de teste Jest

> “Jest is a delightful JavaScript Testing Framework with a focus on simplicity.” - [Jest](https://jestjs.io/)

_Tradução: "Jest é uma estrutura de teste de JavaScript agradável com foco na simplicidade."_

**[Jest](https://jestjs.io/) é um executor de testes que executa muitas tarefas usando poucas funcionalidades**. Se você já trabalhou com o Gulp, pode imaginar algo semelhante quando nos referimos ao Jest, mas muito mais fácil de configurar e focado em testes.

Esta biblioteca é de código aberto, mantida pelo Facebook (o mesmo criador do React) e pode ser usada para testar não apenas os componentes do React, mas qualquer tipo de código JavaScript: Typescript, Node, Vue...

#### Vantagens de usar Jest em projetos React:

- Fácil de entender e usar
- Configuração zero (ou apenas o mínimo necessário)
- Bem documentado
- [Snapshot testing](https://jestjs.io/docs/en/snapshot-testing ) para evitar mudanças acidentais de interface do usuário
- Mock para trabalhar com dados falsos que devem ser fornecidos por um banco de dados ou outra fonte qualquer
- Framework extensível - podemos integrar outras ferramentas para trabalhar com ele
- Rápido e focado no desempenho - testes são executados em paralelo
- Informações de cobertura de código para garantir que todo o código está sendo testado.

#### Assista o vídeo abaixo para entender melhor Jest através exemplos práticos

https://www.youtube.com/watch?v=NHMIn723hQY&ab_channel=LogRocket

### React Testing Library (RTL)

> “React Testing Library is a set of helpers that let you test React components without relying on their implementation details.” - [React team](https://reactjs.org/docs/testing.html )

_Tradução: "React Testing Library é um conjunto de helpers que permitem testar componentes React sem depender de seus detalhes de implementação."_

Você pode testar a IU dos componentes do React usando apenas a estrutura de teste Jest, é claro, mas **[React Test Library (RTL)](https://testing-library.com/) fornece funções utilitárias extra leves para Jest trabalhar com componentes React, economizando seu tempo e incentivando as melhores práticas de teste** - ele força seu aplicativo a ser mais acessível.

Se você já trabalhou com Enzyme (outra biblioteca de testes criada pelo AirBnb), provavelmente pode imaginar os benefícios da RTL. A diferença é que a RTL é mais moderna e poderosa para lidar com a interface gráfica do usuário: renderize o componente, selecione-o usando o atributo aria-label e verifique sua cor, por exemplo.

#### Benefícios da React Test Library:

- RTL nos incentiva a escrever melhores componentes por meio de práticas de acessibilidade
- Se concentra em como os componentes se parecem e se comportam no DOM em vez de propriedades e estados
- Excelente integração com o Jest (inclusive, Jest é recomendação de uso da equipe do React, pois esta biblioteca precisa funcionar com um executor de testes)

RTL é incrível, podemos criar testes baseados em elementos DOM usando diferentes [queries](https://testing-library.com/docs/dom-testing-library/api-queries), em seguida, criar um snapshot do componente para evitar quaisquer alterações inesperadas da IU. Portanto, sempre que o teste em execução identificar quaisquer alterações, os testes falharão. Assim, você pode tomar a decisão de atualizar o snapshot ou corrigir seu código para que nenhuma diferença seja encontrada. Também podemos usar eventos para simular as interações do usuário - como cliques e preenchimentos de formulários, por exemplo. Não é fantástico?

#### Assista o vídeo tutorial abaixo para entender melhor a React Testing Library através exemplos práticos

https://www.youtube.com/watch?v=NE_aorvSeSQ&ab_channel=MaksimIvanov

RTL é construído em cima de [DOM Testing Library](https://github.com/kentcdodds/dom-testing-library-with-anything) que tem bibliotecas específicas para trabalhar com muitos tipos de framework.

### Bônus - Jest Styled Components

[Jest Styled Components](https://github.com/styled-components/jest-styled-components ) é uma dependência do Jest que possui um conjunto de helpers para testar Styled Components: media-queries, theme…

## Conclusion

**Como você pode ver, ao usar testes no React, podemos ter certeza de que o código da IU faz o que esperamos e eles serão projetados para focar primeiros nas necessidades (TDD) e no comportamento do usuário (acessibilidade).**

Percebo que muitos desenvolvedores e empresas veem os testes apenas como uma ideia adorável. Mas eu acho que precisamos **parar de perder tempo com debugging e aproveitar os testes para ganhar mais confiança, manter o código consistente em toda a equipe e melhorar nosso código seguindo as melhores práticas e convenções**. ✌😁✨

Você já experimentou essas ferramentas ou ainda não? Você está usando uma abordagem diferente para aplicar testes nos projetos React?

---
title: 'Automatizando o workflow do Github para qualquer projeto'
date: '2020-09-08 01:21:23'
description: "Neste artigo, vou compartilhar com vocês três ferramentas incríveis do GitHub que uso para automatizar processos para todos os meus projetos desde o início. Isso me ajuda a lidar com um dos maiores desafios para desenvolvedores de software: gerenciar alterações de código."
category: Development
background: '#353b48'
featuredImage: '/assets/img/blog/automating-the-github-workflow-for-any-project.jpg'
---

**Não importa se você está desenvolvendo um aplicativo rico em recursos ou apenas um pequeno projeto, você sabe que o Github é o melhor lugar para controle de versão do seu código, certo?** Recentemente, comecei a definir um workflow para os meus projetos que me fez economizar muito tempo - além de garantir que o código seja mais confiável, é claro.

**Portanto, existem 3 ferramentas do GitHub para melhorar e automatizar o workflow dos nossos projetos:**

- **GitHub Project Management**: semelhante ao Trello, mas muito mais avançado, é uma ferramenta do Github gratuita para gerenciar todas as tarefas do projeto. E como você deve estar imaginando, essa ferramenta é totalmente integrada com issues e pull requests.
- **Github Actions**: este é o segredo de todo o fluxo de trabalho automatizado do Github. Ao usar esse recurso, o Github é capaz de testar o código após um pull request e fazer o deploy dele em produção, por exemplo.
- **Dependabot**: adquirida recentemente pelo Github, esta ferramenta garante que todas as dependências do projeto estejam atualizadas automaticamente através de pull requests.

A seguir, falarei um pouco mais sobre cada uma dessas ferramentas brilhantes e mostrarei como você pode utilizá-las em seus projetos. Vamos lá?

## GitHub Project Management

Eu acredito fortemente que todos os projetos começam com planejamento, certo? (Ou deveria, pelo menos)

**A ferramenta [GitHub Project Management](https://github.com/features/project-management/) nos ajuda a relatar bugs, discutir tarefas, propor ideias, priorizar trabalhos e monitorar o progresso de maneira semelhante ao Trello. Mas a diferença aqui é que tudo está integrado as issues e os pull requests.**

### Vantagens do Github Project Management

Existem muitas vantagens em usar esta ferramenta e abaixo você poderá algumas das mais importantes:

- **Podemos criar um Kanban automatizado**. Então, quando você cria um Pull Request, ele move automaticamente uma issue referenciada da coluna In Progress para a coluna To-do, por exemplo.
- **Atribua issues a uma pessoa ou pessoas específicas** responsáveis por resolvê-las.
- **Aplique labels personalizadas** a uma issue para categorizá-la por recurso, prioridade ou qualquer outro contexto.
- Por último, mas não menos importante,**GitHub rastreia as mudanças que você faz e as mostra na própria issue**, então tudo é transparente e completo para histórico e discussões.

Contudo, nós ainda podemos usar [milestones](https://docs.github.com/en/github/managing-your-work-on-github/about-milestones ) para agrupar issues relacionadas e obter pull requests em torno de uma meta ou prazo compartilhado (como um lançamento de uma feature ou um recurso importante) e verificar todo o progresso deles juntos. É muito bom para se ter uma visão geral do processo de desenvolvimento.

### Como usar GitHub Project Management

Este tutorial vai te dar uma boa ideia de como você pode usar o Gerenciamento de Projetos do GitHub e confesso que aplico quase as mesmas configurações para meus projetos.

https://www.youtube.com/watch?v=ff5cBkPg-bQ&ab_channel=goobar

## GitHub Actions

Automação é uma das melhores maneiras de aumentar a produtividade em um projeto de software e [GitHub Actions](https://github.com/features/actions) fornece uma maneira fácil de melhorar a qualidade de nosso código e tornar a vida mais produtiva.

**Cada vez que um evento acontece com o repositório (merge ou pull request, por exemplo), podemos fazer uma trigger para um workflow automatizado: testar o código, fazer deploy do código para produção... É quando [GitHub Actions](https://github.com/features/actions) aparece.**

### Vantagen do Github Actions

Você já ouviu a frase: “O céu é o limite”? Portanto, ao usar o GitHub Actions, você tem muitas possibilidades. Abaixo estão alguns delas:

- **Continuous Integration (CI)**: podemos criar um conjunto de testes para executar a qualquer momento que os desenvolvedores enviarem seus códigos para a master. Se tudo passar com sucesso, o PR será feito, caso contrário, o GitHub fornecerá um log para ver o que houve de errado.
- **Continuous Deployment (CD)**: usando Actions, podemos fazer o deploy do projeto para produção sempre que a master receber um novo merge. Se você já trabalhou com Netlify, ou GitHub Pages, já deve ter tido essa experiência.
- **Integração com outras ferramentas além do GitHub**: sabe aquela ferramenta de comunicação que você usa? Talvez seja possível integrá-la com o seu projeto do GitHub. Por exemplo, no Slack você pode obter atualizações sobre o que está acontecendo no GitHub sem sair da ferramenta. Você também pode integrar o Jira, Trell... Existem muitas possibilidades aqui.

### Como usar Github Actions

Todo o que você precisa fazer é criar um arquivo com a extensão `.yml` no diretório `.github/workflows` contendo as instruções necessárias para as actions. No vídeo abaixo você verá como fazer isso. E você também pode ver a [ documentacão do GitHub Actions aqui](https://docs.github.com/en/actions).

https://www.youtube.com/watch?v=eB0nUzAI7M8&ab_channel=Fireship

Apesar da simplicidade da implementação das Actions, em vez de escrever suas próprias regras do zero, você pode usar algumas [GitHub Actions desenvolvidas pela comunidade](https://github.com/marketplace?type=actions ).

## Dependabot

Manter as dependências atualizadas é muito importante para melhorar a segurança, desempenho e correção de bugs, não concorda? Leia mais sobre isso [neste artigo](https://dependabot.com/blog/why-bother/).

**[Dependabot](https://dependabot.com/) é outra excelente ferramenta gratuita adquirida no início de 2019 para o GitHub. Ela fornece uma maneira rápida e fácil de gerenciar as dependências do projeto, enviando automaticamente pull requests para o seu repositório sempre que ele fizer uma atualização. Em seguida, você poderá revisar e fazer o merge do PR na master.**

### Vantagens da Dependabot

Confira abaixo as principais vantagens dessa ferramenta e não se surpreenda ao pensar "Por que ainda não a uso?"

- Monitora as dependências do projeto quanto às suas vulnerabilidades e cria pull requests automáticos para corrigir vulnerabilidades de segurança à medida que forem encontradas.
- Mantém o código atualizado, o que melhora o desempenho e correções de bugs.
- Dependabot mostra uma CI pass rate usando uma badge no pull request. Portanto, você pode verificar se há alguma alteração significativa antes de fazer o merge da atualização com mais confiança.
- Atualmente suporta JavaScript, Python, Ruby, PHP, Docker, GitHub Actions e muito mais.

### Como usar Dependabot

Você verá como é fácil configurar o Dependabot para seus projetos no vídeo abaixo. Você também pode criar uma configuração personalizada com mais detalhes sobre como essa ferramenta deve se comportar, dependendo das necessidades do seu projeto.

https://www.youtube.com/watch?v=7sHwEN5UNus&ab_channel=EmberMap

## Conclusão

**Embora não haja um workflow universal para o gerenciamento de alterações de código, podemos melhorar muitos fluxos de trabalho de desenvolvimento apenas usando algumas ferramentas excelentes e gratuitas do GitHub para automatizar alguns processos e garantir um código mais confiável, como você pôde ver.**

Eu recomendo fortemente que você experimente essas ferramentas e descubra o poder que elas podem trazer para seus projetos.

E, como sempre, deixe-me um comentário se este post foi útil para você e me diga se você utiliza alguma outra ferramenta para automatizar os processos em seus trabalhos. Vejo você na próxima vez! ✌

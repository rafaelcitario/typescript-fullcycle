# Documentação do projeto && Timeline

## Preparação do ambiente de desenvolvimento

- todo este projeto esta rodando dentro do wsl - imagem ubunto.
- inicio o projeto criando documentos de configuração docker.
- em `Dockerfile` adiciono as informações sobre a imagem das dependencias do projeto, neste caso `Node:20.5.1-slim`
  É de suma importancia que o arquivo se chame `Dockerfile` com D maiúsculo.
- faço a configuração do arquivo docker-compose.yaml, onde defino as configs do projeto, tal como diretórios e portas.
- crio um arquivo `start.sh` na raiz do projeto, este arquivo servira para inicialização do proj. Ele instalará todas as dependencias com `npm install` e outros comandos. Neste arquivo rodaremos comandos bash usando `#!/bin/bash`
- feita as configurações inicializamos nosso container usando `docker compose up`.
- para facilitar nossa navegação dentro do container instalamos `Dev Container`. Neste momento é onde se vale a importancia do arquivo `Dockerfile` estar com a inicial D maiúscula, pois se estiver diferente disso teremos erro `ENOENT`.
- Realizo o comando `Ctrl + Shift + p` no vscode e digito `Dev container open folder` e inicio minhas configs a partir de meu documento docker-compose.yaml mas poderia realizar outras configs personalizadas.
- Neste momento é gerado um diretório `.devcontainer` nele se encontra outro arquivo `docker-compose.yml` podemos realizr um merge deste arquivo com nosso arquivo base, talve falaremos disso mais afrente. Também se encontra deste diretório um arquivo `devcontainer.json` onde mudaremos nossa config
- Realizo `dev container rebuild` e estou dentro do container pronto para desenvolver

- Realizo a instalação das dependencias:
  - `typescript`
  - `jest`
  - `@swc/core` `@swc/cli` `@swc/jest`
  - `@types/jest`
  - `ts-node`

- Aqui estou utilizando jest para realizar os testes, mas poderia utilizar node. Node já esta com uma boa base/config de teste que base de frente com jest e outros frameworks.
No arquivo `jest.config.ts` abilito o `transform` e passo este regex `'^.+\\.(t|j)sx?$': '@swc/jest'`.
Também abilito o `rootDir` passando a diretorio `src`
- swc é uma ferramenta que estou utilizando para compilação dos arquivos ts, swc é construido em rust e dis-se que é 20x mais rapido de babel.
- @types/jest pois jest não é criado em ts, logo preciso adicionar as tipagens typescript.

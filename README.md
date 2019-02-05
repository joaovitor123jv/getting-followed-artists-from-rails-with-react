# Instruções de uso

Esse projeto compõe somente a parte 'front-end' da aplicação. Caso queira executá-la, é fortemente recomendável que execute simultâneamente o servidor responsável pelo gerenciamento do 'back-end'. No caso desse projeto, o código desse servidor se encontra em https://github.com/joaovitor123jv/getting-followed-artists-with-rails

## Overview

### Para executar o código desse repositório você vai precisar de:

  1. Clonar o repositório 'front-end' (esse)

  2. Instalar as dependências do 'front-end'

  3. Clonar o repositório 'back-end' (https://github.com/joaovitor123jv/getting-followed-artists-with-rails)

  4. Instalar dependências do 'back-end'

  5. Configurar o servidor 'back-end'

  6. Executar o servidor do 'back-end'

  7. Executar o servidor do 'front-end'

  8. Verificar o resultado em algum Browser

### Clonando o repositório 'front-end'

   1. Se não tiver instalado, instale o "GIT"

   2. Abra um terminal

   3. Execute o comando `git clone https://github.com/joaovitor123jv/getting-followed-artists-from-rails-with-react`

   4. Aguarde a conclusão do download

   5. Mantenha esse terminal aberto, chamarei ele de FRONT_TERM

### Instalando dependências do 'front-ent'

   1. Se não tiver instalado, instale:

       * 'Node' de versão 10.15 ou mais recente

       * 'npm', numa versão maior que 5 (preferencialmente 6.4.1)

   3. No FRONT_TERM, acesse o diretório obtido, com `cd getting-followed-artists-from-rails-with-react`

   4. Execute o comando `npm install`

   5. Aguarde a conclusão do download e mantenha o terminal aberto

### Clonando o repositório 'back-end'

   1. Abra outro terminal, preferencialmente em outra localização

   2. Clone o repositório 'back-end' com `git clone https://github.com/joaovitor123jv/getting-followed-artists-with-rails`

   3. Aguarde a conclusão do download

   4. Mantenha esse terminal aberto, chamarei ele de BACK_TERM

### Instalando dependências do 'back-end'

   1. Se não tiver instalado, instale:

      * Interpretador Ruby (versão 2.5 ou superior)

	  * ruby-bundler (versão 2.0 ou superior)

   2. No BACK_TERM, acesse o diretório obtido com `cd getting-followed-artists-with-rails`

   3. Instale as dependências (gems) do ruby com `sudo bundle install`

   4. Caso houver algum erro, tenha certeza de ter instalado em seu sistema os itens a seguir e repira o passo 3:

      * Interpretador Ruby

      * Ruby Bundler

	  * PostgreSQL

	  * PostgreSQL-dev (debian)

	  * libpq-dev (debian)

	  * sqlite3 (debian)

	  * libsqlite3-dev

    5. Aguarde a finalização do processo de instalação, mantenha o terminal aberto

### Configurando o servidor 'back-end'

   1. Obtenha acesso à API de desenvolvedores do Spotify (https://developer.spotify.com)

		1. Crie sua conta:
			1. No Menu superior do website, clique em 'Dashboard'

			2. Abaixo de 'Create & manage your Spotify integrations.' clique em "LOG IN" (se já não estiver logado)

			3. Caso necessário, preencha os dados requisitados e prossiga

		2. Obtenha Client_ID e Client_Secret:

			1. Clique em "CREATE A CLIENT ID"

			2. Preencha as informações necessárias, não se esqueça de marcar o item 'Website'

			3. Clique em "NEXT"

			4. Em "Are you developing a commercial integration?", se não estiver desenvolvendo uma aplicação comercial, clique em "NO"

			5. Confirme os três termos de compromisso

			6. Clique em "SUBMIT"

			7. Na tela que abrir, procure o item "Client ID"

			8. Guarde essa informação, precisaremos em breve

			9. Clique em "SHOW CLIENT SECRET"

			10. Teoricamente, apareceu um "Client Secret", guarde essa informação, precisaremos dela também.
		
		3. Especifique rotas para a aplicação:

			1. Clique em "EDIT SETTINGS"

			2. No campo "Redirect URIs", coloque: `http://localhost:8000/auth/apotify/callback`

			3. Clique no botão "ADD"

			4. Novamente, no campo "Redirect URIs", adicione mais uma entrada, contendo: `http://localhost:8000/api/v1/callback`

			5. Clique no botão "ADD"

			6. Role um pouco a tela e clique no botão "SAVE"

	2. Insira as informações obtidas em seus respectivos lugares:

	   1. No diretório obtido ao clonar o 'back-end', abra o arquivo './config/initializers/omniauth.rb'

	   2. Na segunda linha, substitua `SPOTIFY_ID_HERE`, pelo conteúdo obtido de `Client ID`

	   3. Na terceira linha, substitua `SPOTIFY_SECRET_HERE`, pelo conteúdo obtido em `Client Secret`

	   4. Salve o arquivo editado

### Executando o servidor 'back-end'

   1. Verifique se tudo está funcionando apropriadamente (opcional)

       1. No BACK_TERM, execute `rails test`

	   2. Se o resultado for 'verde', tudo deve estar funcionando normalmente

    2. Execute o servidor
	   
	   1. No BACK_TERM, execute `rails server`

	   2. Aguarde essas linhas aparecerem no terminal: 
	        
			```
			* Min threads: 5, max threads: 5
			* Environment: development
			* Listening on tcp://0.0.0.0:8000
			Use Ctrl-C to stop

			```

		3. Enquanto estiver utilizando o servidor, mantenha o terminal aberto (pule o passo abaixo)

		4. Encerre o servidor com `CTRL+C`

### Executando o servidor 'front-end'

   1. Agora que a parte 'back-end' da aplicação está executando, iniciaremos o 'front-end'

   2. No terminal FRONT_TERM, execute o comando `npm start`

   3. Se tudo der certo, um navegador ou aba num navegador irá se abrir. Caso o navegador não seja iniciado, aguarde as seguintes linhas aparecerem no seu terminal: 

       ```
		Compiled successfully!

		You can now view imusics-front in the browser.

		Local:            http://localhost:3000/
		On Your Network:  http://SEU_IP_AQUI:3000/

		Note that the development build is not optimized.
		To create a production build, use npm run build.

	   ```

	5. Quando quiser encerrar os servidores, pode usar o comando `CTRL+C` nos dois terminais e fechá-los como quiser.


###	Abra um browser em 'localhost:3000' e divirta-se.


_________________________________________________
_________________________________________________
_________________________________________________




# README parcial do 'react-create-app' (pode ser útil) ↓

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

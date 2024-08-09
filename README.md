# Desafio Corelab

Este é um projeto de gerenciamento de tarefas desenvolvido com React para o front-end e Laravel para o back-end. Este guia descreve como configurar e rodar o projeto localmente.

## Tecnologias Utilizadas

- **Front-end:** React, Vite
- **Back-end:** Laravel
- **Banco de Dados:** MySQL

## Configuração do Ambiente

### 1. Clonar o Repositório

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/yagovysk/desafio-corelab
cd NOME_DA_PASTA. Configuração do Back-end (Laravel)

2 - Instalar Dependências
Navegue para o diretório do back-end e instale as dependências: cd api-php composer install

Configurar o Ambiente
Copie o arquivo .env.example para .env e configure as variáveis de ambiente: cp .env.example .env
Abra o arquivo .env e configure a conexão com o banco de dados:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nome_do_banco
DB_USERNAME=usuario
DB_PASSWORD=senha

Gere uma chave de aplicação para o Laravel: php artisan key:generate
Crie as tabelas no banco de dados: php artisan serve

3 - Configuração do Front-end (React)
Instalar Dependências
Navegue para o diretório do front-end e instale as dependências:
cd ../desafio-corelab
npm install

Configurar o Ambiente
Crie um arquivo .env na raiz do projeto e configure a URL base da API:
VITE_API_URL=http://127.0.0.1:8000


Rodar o Servidor de Desenvolvimento
Inicie o servidor de desenvolvimento do Vite:
npm run dev


Inicie o back-end executando php artisan serve no diretório api-php.
Inicie o front-end executando npm run dev no diretório desafio-corelab.
Acesse http://localhost:5173 no seu navegador para ver o front-end em ação.

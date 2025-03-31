# Sinafite - Plataforma Digital do Sindicato dos Funcionários Integrantes da Carreira de Auditoria Fiscal do Tesouro do Distrito Federal

<p align="center">
  <br>
  Uma plataforma digital moderna para o Sindicato dos Funcionários Integrantes da Carreira de Auditoria Fiscal do Tesouro do Distrito Federal, oferecendo informações institucionais, notícias, serviços e uma área exclusiva para filiados.
  <br>
</p>

## 🚀 Visão Geral

O projeto Sinafite é uma aplicação web full-stack desenvolvida para modernizar a presença digital do sindicato, facilitando o acesso a informações e serviços para seus membros, além de proporcionar uma plataforma de comunicação eficiente e uma área administrativa robusta para gerenciamento de conteúdo.

**Objetivos Principais:**

1.  Criar uma identidade digital moderna para o sindicato.
2.  Facilitar o acesso a informações e serviços para os filiados.
3.  Proporcionar uma plataforma de comunicação eficiente entre o sindicato e seus membros.
4.  Disponibilizar uma área administrativa para gerenciamento de conteúdo.

## 🛠️ Stack Tecnológico

Este projeto foi construído utilizando as seguintes tecnologias:

**Frontend:**

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **TypeScript:** Superset tipado de JavaScript para maior segurança e manutenibilidade.
* **Tailwind CSS:** Framework CSS utilitário para design responsivo e rápido.
* **Shadcn/UI:** Biblioteca de componentes de interface do usuário baseada em Radix UI para consistência e acessibilidade.
* **React Query (TanStack Query):** Biblioteca para gerenciamento eficiente de estado e requisições assíncronas.
* **Wouter:** Biblioteca de roteamento leve para navegação no frontend.
* **React Hook Form:** Biblioteca para simplificar o gerenciamento de formulários complexos.
* **Zod:** Biblioteca para declaração e validação de esquemas de dados.

**Backend:**

* **Node.js:** Ambiente de execução JavaScript no servidor.
* **Express:** Framework web minimalista e flexível para Node.js.
* **Drizzle ORM:** ORM SQL para Node.js e TypeScript, facilitando a interação com o banco de dados.
* **PostgreSQL:** Sistema de gerenciamento de banco de dados relacional robusto e confiável.

**DevOps:**

* **Vite:** Ferramenta de build extremamente rápida para desenvolvimento frontend.
* **npm:** Gerenciador de pacotes para JavaScript.

## 📂 Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:
├── client/                 # Código frontend
│   ├── src/
│       ├── components/     # Componentes React reutilizáveis
│       ├── hooks/          # Hooks personalizados
│       ├── lib/            # Utilitários e configurações
│       ├── pages/          # Componentes de página
│       ├── App.tsx         # Componente principal da aplicação
│       └── main.tsx        # Ponto de entrada da aplicação React
├── server/                 # Código backend
│   ├── db.ts             # Configuração do banco de dados
│   ├── index.ts          # Ponto de entrada do servidor
│   ├── routes.ts         # Definições de rotas da API
│   ├── storage.ts        # Interface de armazenamento
│   └── vite.ts           # Configuração de integração com Vite
└── shared/                 # Código compartilhado entre frontend e backend
└── schema.ts         # Definições de esquema e tipos


## ✨ Funcionalidades Principais

A plataforma Sinafite oferece diversas funcionalidades para diferentes públicos:

**Área Pública:**

* **Página Inicial (Home):** Apresentação do sindicato, serviços destacados, últimas notícias, recursos úteis, newsletter e formulário de contato.
* **Página Sobre:** Informações sobre a história, missão, valores, diretoria e estrutura organizacional do sindicato.
* **Página de Serviços:** Detalhes sobre assessoria jurídica, representação política, capacitação e convênios para filiados.
* **Página de Notícias:** Lista completa de notícias com filtros por categoria e funcionalidade de busca.
* **Página de Contato:** Formulário de contato, informações de contato (telefone, email, endereço) e mapa de localização.

**Área Restrita (Membros):**

* **Autenticação:** Sistema de login seguro e funcionalidade de recuperação de senha.
* **Painel do Membro:**
    * Visualização e edição de dados pessoais.
    * Acesso a documentos exclusivos para filiados.
    * Acesso a boletos de contribuição sindical.
    * Acesso à plataforma de cursos online.

**Área Administrativa:**

* **Gestão de Conteúdo:**
    * Criação, edição e exclusão de notícias.
    * Gerenciamento dos serviços oferecidos.
    * Edição do conteúdo das páginas estáticas.
* **Gestão de Usuários:**
    * Visualização e edição de dados dos filiados.
    * Gestão de usuários administrativos.

## 💾 Banco de Dados

O modelo de dados principal é composto pelas seguintes tabelas:

* **users:** Armazena dados de usuários (filiados e administradores).
* **articles:** Armazena notícias e publicações.
* **services:** Armazena os serviços oferecidos pelo sindicato.
* **contact\_messages:** Armazena mensagens enviadas pelo formulário de contato.
* **subscribers:** Armazena inscritos na newsletter.
* **pages:** Armazena o conteúdo das páginas estáticas.

Os principais relacionamentos incluem:

* `articles` → `users`: Um artigo pertence a um autor (N:1).
* `contact_messages` → `users`: Mensagens podem estar associadas a um usuário (N:1).

## ⚙️ API RESTful

A API fornece os seguintes endpoints para interação com o sistema:

**Endpoints Públicos:**

* `GET /api/articles`: Lista todas as notícias.
* `GET /api/articles/:id`: Detalhes de uma notícia específica.
* `GET /api/articles/category/:category`: Lista notícias por categoria.
* `GET /api/services`: Lista todos os serviços.
* `GET /api/services/:id`: Detalhes de um serviço específico.
* `GET /api/pages/:slug`: Conteúdo de uma página específica.
* `POST /api/contact`: Envio de mensagem de contato.
* `POST /api/newsletter`: Inscrição na newsletter.

**Endpoints Autenticados:**

* `GET /api/member/profile`: Dados do perfil do membro logado.
* `PATCH /api/member/profile`: Atualização dos dados do perfil.
* `GET /api/member/documents`: Lista documentos disponíveis para o membro.

**Endpoints Administrativos:**

* CRUD completo para todos os recursos (articles, services, users, pages, etc.).

## 🔒 Autenticação e Segurança

A segurança da plataforma é uma prioridade, e as seguintes medidas foram implementadas:

* **Autenticação:**
    * Sessão baseada em cookies com `express-session`.
    * Autenticação via `Passport.js` com estratégia local (username e senha).
    * Armazenamento de sessões no banco de dados PostgreSQL.
* **Segurança:**
    * Criptografia de todo o tráfego via HTTPS.
    * Proteção contra ataques CSRF.
    * Hashing seguro de senhas com `bcrypt`.
    * Limitação de taxa para prevenir ataques de força bruta.
    * Políticas de segurança de conteúdo (CSP).
    * Validação robusta de todas as entradas com `Zod`.

## 🎨 Design e Experiência do Usuário

O design e a experiência do usuário foram cuidadosamente considerados:

* **Princípios de Design:**
    * Consistência com a identidade visual do sindicato.
    * Layout responsivo e adaptável a diferentes dispositivos.
    * Conformidade com as diretrizes de acessibilidade WCAG 2.1.
    * Otimização para alta performance de carregamento e renderização.
* **Elementos de UI:**
    * Sistema de tipografia hierárquico e legível.
    * Paleta de cores baseada nas cores institucionais.
    * Sistema de componentes consistente em toda a aplicação.
    * Microinterações para feedback visual.
    * Animações suaves para transições de interface.

## ⚡ Considerações de Desempenho

Foram implementadas diversas otimizações para garantir o desempenho da plataforma:

**Frontend:**

* Code Splitting para carregamento de código sob demanda.
* Lazy Loading de componentes e imagens.
* Memoização com `useMemo` e `useCallback` para evitar renderizações desnecessárias.
* Prefetching de recursos importantes.

**Backend:**

* Cache de resposta de API para requisições frequentes.
* Indexação de banco de dados nas colunas mais consultadas.
* Connection Pooling para reuso de conexões com o banco de dados.

## ☁️ Implantação

A plataforma foi projetada para ser implantada no seguinte ambiente de produção:

* **Banco de Dados:** PostgreSQL hospedado em um serviço gerenciado.
* **Domínio:** Configuração de domínio personalizado.
* **SSL:** Certificados SSL/TLS para comunicação segura.

O processo de implantação inclui:

* Integração Contínua e Entrega Contínua (CI/CD) via GitHub.
* Controle de versão com Git.
* Backup automatizado do banco de dados.
* Monitoramento de erros e desempenho.

## ✨ Recursos Específicos Implementados

Diversas melhorias visuais e de UX foram implementadas:

* **Modo Claro/Escuro:** Suporte para preferências de tema.
* **Animações de Entrada:** Efeitos visuais para melhorar a experiência inicial.
* **Tooltips Informativos:** Dicas contextuais para melhorar a usabilidade.
* **Microtransições:** Feedback visual sutil para interações do usuário.
* **ScrollToTop:** Retorno automático ao topo da página nas navegações.
* **Formulários Inteligentes:** Validação em tempo real e feedback de erros intuitivo.
* **Estado de Carregamento:** Indicadores visuais claros durante o carregamento de dados.
* **Tratamento de Erros:** Mensagens amigáveis e informativas para situações de erro.

## 🛠️ Manutenção e Evolução

O plano de manutenção e o roadmap futuro incluem:

**Plano de Manutenção:**

* Atualizações de segurança regulares das dependências.
* Rotina de backup automatizada do banco de dados.
* Monitoramento contínuo de desempenho e erros.

**Roadmap Futuro:**

* Desenvolvimento de um aplicativo mobile nativo.
* Implementação de uma área de fórum para discussão entre filiados.
* Implementação de um sistema de votação eletrônica.
* Integração com sistemas governamentais relevantes via APIs.

## Conclusão

O projeto Sinafite representa um avanço significativo na presença digital do sindicato, oferecendo uma plataforma moderna, segura e de fácil utilização para todos os seus públicos. A escolha de tecnologias atuais e a atenção aos detalhes de design e performance garantem uma base sólida para o crescimento e a evolução contínua da plataforma.

---

**Desenvolvido por:** Edwan Marques

**Data:** Maio de 2025

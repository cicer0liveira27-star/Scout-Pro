<p align="center"><img src="logo.svg" width="72" alt="Scout Pro"></p>

# Scout Pro

App web de scout e planejamento de elenco, feito para o Departamento de Análise do **Santa Cruz F.C.** (Recife-PE), a partir do Planejamento Estratégico 2026.

**Acesse:** https://cicer0liveira27-star.github.io/scout-pro/

## O que tem
- **Geral:** Início com calendário de eventos (treino, jogo, médico, folga, reunião, viagem), disponibilidade, distribuição por posição e perfil etário.
- **Saúde e performance:** Hub de Performance (prontidão por atleta), Elenco (status médico, dor, filtros), Fisiologia (PSR, PSE/carga e ACWR, CMJ, GPS, comparação, minutagem, histórico), Fisioterapia (painel clínico, atendimentos, lesões, estatísticas), Preparação Física (microciclo semanal, base de sessões, transição) e Nutrição (composição corporal, plano alimentar, hidratação, peso).
- **Inteligência:** Painel de tarefas (kanban), Relatórios de jogo (PDF/vídeo), Mercado (overall por nível da competição, atributos, tags, comparação, equipe sombra), Análise de desempenho (adversários com escudo, jogos, estatísticas), Análise de dados (estudo Série C 2023–2025 e árbitros), Cartões e Diagnóstico do elenco.
- **Gestão:** Visão geral com metas, Gestão de elenco, Comissão técnica, Financeiro, Contratos com alertas e Planejamento 2027.
- **Planilhas:** exportação .xlsx de todas as áreas e backup/restauração .json. Temas Auto, Claro, Escuro e All Black.

## Acesso e banco de dados
O app só abre com login. Cada pessoa entra com o **nickname** ou o **CPF** e a senha. Os dados ficam no **Firebase Firestore** (projeto `scout-pro-736bc`, região São Paulo) e sincronizam em tempo real entre quem está conectado.

No primeiro acesso de cada pessoa, a conta é criada automaticamente quando ela entra com o nickname (ou CPF) e a senha inicial combinada. A sessão não fica salva: ao fechar o navegador é preciso entrar de novo.

**Adicionar uma pessoa:** inclua o nickname em `USUARIOS` no `index.html` (e o hash do CPF em `CPF_HASH`, se ela for entrar pelo CPF) e o e-mail interno `NICKNAME@scoutpro.app` na função `editor()` das regras do Firestore.

Arquivo único: `index.html` (React 18 + htm + SheetJS via CDN).

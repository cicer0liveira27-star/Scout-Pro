<p align="center"><img src="logo.svg" width="72" alt="Scout Pro"></p>

# Scout Pro

App web de scout, análise e gestão de elenco para departamentos de análise de futebol. Não fica preso a um clube: o clube atual (nome, sigla, escudo) é definido em **Cadastro › Time › Meu clube**. Em 2026 o clube é o **Santa Cruz F.C.** (Recife-PE). Os dados começam em 2026.

**Acesse:** https://cicer0liveira27-star.github.io/Scout-Pro/

## Menu (mesmas abas do WilScout)
- **Home**
- **Cadastro:** Usuário, Time, Estádio, Pessoa (jogador, comissão técnica, diretoria, funcionário), Competição, Partida e Anexo (súmula, relatórios do jogo, do adversário e de desempenho, vídeos de transmissão, pré e pós-jogo). Partida do dia manda o link da transmissão para o Ao Vivo.
- **Ao Vivo:** lives de jogo, treino e banco de reservas (link não listado do YouTube), com quem está no banco. Atualizar e encerrar gravam no banco; encerrar guarda a transmissão no histórico e na partida.
- **Jogos:** um jogo por caixinha, com vídeos, súmula e relatórios.
- **Treinos**
- **Elenco:** atletas (editar dados, melhores momentos por jogo), ranking e plantel. Atleta não é apagado: a saída fica registrada com o motivo.
- **Mercado:** Dashboard, Equipes Sombras, Relatórios, Comparativo e Busca Inteligente.
- **Estatísticas**
- **Análise:** Pré Jogo e Pós Jogo (relatórios de jogo, que aparecem em Jogos e no Ao Vivo).
- **Fisioterapia:** Dashboard, Queixa / Dor, Lesões, Atendimentos, Recovery, Histórico, Histórico de Jogador, Status e Condutas.
- **Adm:** Histórico de Login e Painel de Acessos.
- **Conta:** Minha Conta, Trocar Senha e Sair.

## Acesso e banco de dados
O app só abre com login. Cada pessoa entra com o **nickname** ou o **CPF** e a senha. Os dados ficam no **Firebase Firestore** (projeto `scout-pro-736bc`, região São Paulo) e sincronizam em tempo real entre quem está conectado.

No primeiro acesso de cada pessoa, a conta é criada automaticamente quando ela entra com o nickname (ou CPF) e a senha inicial combinada. A sessão não fica salva: ao fechar o navegador é preciso entrar de novo.

**Adicionar uma pessoa:** inclua o nickname em `USUARIOS` no `index.html` (e o hash do CPF em `CPF_HASH`, se ela for entrar pelo CPF) e o e-mail interno `NICKNAME@scoutpro.app` na função `editor()` das regras do Firestore.

Arquivo único: `index.html` (React 18 + htm + SheetJS via CDN).

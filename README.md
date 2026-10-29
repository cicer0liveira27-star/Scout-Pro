<p align="center"><img src="logo.svg" width="72" alt="Scout Pro"></p>

# Scout Pro

App web de scout e planejamento de elenco, feito para o Departamento de Análise do **Santa Cruz F.C.** (Recife-PE), a partir do Planejamento Estratégico 2026.

**Acesse:** https://cicer0liveira27-star.github.io/scout-pro/

## O que tem
- **Painel** com idade, profundidade por posição, composição do elenco e alertas contra o perfil dos 12 acessos da Série C (2023–2025).
- **Elenco 2026** editável (vínculo, salário, contrato, minutagem, gols, nota), em tabela ou por posição.
- **Comissão técnica**: profissionais, funções, contratos, salários e situação 2027.
- **Benchmark Série C** com correlações recalculadas ao vivo e escudos enviados pelo próprio usuário.
- **Planejamento 2027**: decisões por atleta, alvos de mercado, necessidades por posição e teto de folha.
- **Planilhas**: exportação .xlsx e backup/restauração em .json.
- **Temas**: Auto, Claro, Escuro e All Black.

Tudo recalcula na hora.

## Acesso e banco de dados
O app só abre com login. Cada pessoa entra com o **nickname** ou o **CPF** e a senha. Os dados ficam no **Firebase Firestore** (projeto `scout-pro-736bc`, região São Paulo) e sincronizam em tempo real entre quem está conectado.

**Adicionar uma pessoa:**
1. Firebase → Authentication → Usuários → Adicionar usuário: e-mail `NICKNAME@scoutpro.app` e a senha.
2. Firestore → Regras: inclua `NICKNAME@scoutpro.app` na lista da função `editor()` e publique.
3. No `index.html`, inclua o nickname em `USUARIOS` (e o hash do CPF em `CPF_HASH`, se a pessoa for entrar pelo CPF).

Arquivo único: `index.html` (React 18 + htm + SheetJS via CDN).

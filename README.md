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

## Banco de dados (público, como o Capelota)
O app usa **Firebase Firestore**: todos que abrem o site veem os mesmos dados em tempo real (modo leitura), e só **editores** autorizados alteram. Salários e teto de folha ficam num documento separado que só editores leem.

1. Crie um projeto no [console do Firebase](https://console.firebase.google.com) e adicione um **app Web**.
2. Copie a configuração para `firebase-config.js`.
3. **Firestore Database** → Criar banco → modo de produção → região `southamerica-east1 (São Paulo)`.
4. **Regras** do Firestore: cole o conteúdo de `firestore.rules` e publique.
5. **Authentication** → Método de login → ative **E-mail/senha**. Em **Usuários**, crie a conta de cada editor.
6. No Firestore, crie a coleção `scoutpro_config` com o documento `editores` e o campo `emails` (array) com os e-mails dos editores.
7. Abra o site, toque em **Entrar como editor** e faça a primeira alteração: isso cria os dados na nuvem.

Sem a configuração, o app funciona em modo local (dados só no navegador; use o backup .json).

Arquivo único: `index.html` (React 18 + htm + SheetJS via CDN).

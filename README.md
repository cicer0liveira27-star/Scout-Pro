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
O app usa **Firebase Firestore** (projeto `scout-pro-736bc`, região São Paulo): todos que abrem o site veem os mesmos dados em tempo real, em modo leitura. Só **editores** alteram, entrando com a conta Google. Salários e teto de folha ficam num documento separado que só editores leem.

**Adicionar um editor:** no console do Firebase → Firestore → Regras, inclua o e-mail Google da pessoa na lista da função `editor()` e publique.

Arquivo único: `index.html` (React 18 + htm + SheetJS via CDN).

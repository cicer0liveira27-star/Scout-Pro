// Banco compartilhado do Scout Pro (Firebase / Firestore).
// Cole aqui a configuração do app web do seu projeto Firebase (Configurações do projeto → Seus apps → Web).
// Esses dados identificam o projeto e podem ficar no site público; quem protege os dados são as regras do Firestore (firestore.rules).
// Enquanto apiKey estiver vazio, o app funciona em modo local (dados só neste navegador).
window.SCOUTPRO_FIREBASE = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

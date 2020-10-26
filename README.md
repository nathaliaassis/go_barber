# go_barber

# Recuperação de senha

**RF**
 - O usário deve poder recuperar a senha informando o seu e-mail;
 - O usário deve receber um e-mail com instruções de recuperação de senha;
 - O usário deve poder resetar sua senha;

**RNF**
  - Utilizar Mailtrap para testar envios em ambiente de dev;
  - Utilizar Amazon SES para envios em produção;
  - O envio de e-mails deve acontecer em segundo plano (background job);

**RN**
  - O link enviado por e-mail para resetar a senha, deve expirar em 2h;
  - O usuário precisar confirmar a nova senha ao resetar sua senha;


# Atualização do perfil

 **RF**
  - O usuário deve poder atualizar seu nome, e-mail e senha;

 **RNF**
  - O usuário não pode alterar o e-mail para um e-mail já existente no sistema;
  - Para atualizar sua senha, o usuário deve informar a sena antiga;
  - Para atualizar sua senha, o usuário precisa confirmar sua nova senha

 **RN**


# Painel do prestador

 **RF**
 **RNF**
 **RN**

# Agendamento de serviços

 **RF**
 **RNF**
 **RN**

const nodemailer = require('nodemailer')

function transporter() {
  const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false, // true para TLS, false para outras portas
    auth: {
      user: 'geekbid@hotmail.com',
      pass: 'minoxidil123'
    }
  })

  transporter
    .sendMail({
      from: 'GeekBid <geekbid@hotmail.com>',
      to: 'geekbidusuario@hotmail.com',
      subject: 'Validação de Cadastro de Usuário',
      text: 'Seu cadastro foi realizado com sucesso! Por favor, clique no link a seguir para validar seu e-mail: https://geekbid.com/autenticacao'
    })
    .then(() => console.log('Email enviado com sucesso'))
    .catch(err => console.log('Erro ao enviar o email', err))
}
module.exports = transporter

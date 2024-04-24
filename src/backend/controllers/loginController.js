const bcrypt = require('bcryptjs'); 
const Usuario = require('../models/usuarioModel'); 

const loginController = {

    async fazerLogin(req, res) {
        const { email, senha } = req.body;
    
        try {
    
            const usuario = await Usuario.findOne({ where: { email } });
    
            if (!usuario) {
                return res.status(401).json({ message: 'Usuário não encontrado!' });
            }
    
            const senhaValida = await bcrypt.compare(senha, usuario.senhaHash);
    
            if (!senhaValida) {
                return res.status(401).json({ message: 'Senha incorreta!' });
            }
    
            res.json({ message: 'Login bem sucedido!' });
        } catch (err) {
            res.status(500).json({ message: 'Erro no servidor!', error: err.message });
        }
    }
}

module.exports = loginController;
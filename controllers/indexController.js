module.exports = class IndexController {
    static index(req, res){
        //res.send('ola do controller')
        res.render('index')
    }
/*
    static show(req , res){
        res.render('show',{
            id:req.params.id,
            nome:req.query.nome
        })
    }
    static save(req, res){
        //res.send('funcionando')
        res.render('show',{
            email: req.body.email,
            nome:req.query.nome,
            id: req.params.id
        })
    }
*/
    static create(req, res){
        res.render('form')
    }

    
    static store(req, res){
        //salvar no banco
        let nome = req.body.nome
        let email = req.body.email
        let datanasc = req.body.data_nascimento

        console.log(req.body)

        console.log(nome + '' + email + '' + datanasc)
        res.redirect('/')
    }


}
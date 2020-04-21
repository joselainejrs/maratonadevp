const connection = require('../database/connection');

module.exports = {
    async index (request, response) {
           //solicitação de paginação
        const {page = 1} = request.query;

        // mostrar no front o total de caso cadastrado
        const [count] = await connection('incidents').count();

         // continuaçao de solicitação de paginação
        const index = await connection('incidents')
        //conectando os id's iguais
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5)
        .offset((page - 1) * 5)
        .select([
            'incidents.*',
            'ongs.name', 
            'ongs.email', 
            'ongs.whatsapp', 
            'ongs.city', 
            'ongs.uf'
        ]);

        // mostrar no front o total de caso cadastrado
        response.header('X-Total-Count', count['count(*)']);

    // continuaçao de solicitação de paginação
        return response.json(index);
        
    },
    async create( request, reponse){
       const {title, description, value} = request.body;
       const ong_id = request.headers.authorization;

       const [id] = await connection('incidents').insert({
           title,
           description,
           value,
           ong_id,
       });

       return reponse.json({ id });
    },
    async delete(request,reponse){
        const {id } = request.params
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first();

        if (incident.ong_id != ong_id ){
            return reponse.status(401).json({ error: 'Operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        return reponse.status(204).send();

    }
};
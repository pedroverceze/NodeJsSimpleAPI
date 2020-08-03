
module.exports = {
    async index(request, response){
        const ongs = 'pedro';
        console.log(ongs);
        return response.json(ongs);
    },

    async create(request,response){
        const recipe = request.body;

        //const id = crypto.randomBytes(4).toString('HEX');
        
        

        return response.json(recipe);
    }
};
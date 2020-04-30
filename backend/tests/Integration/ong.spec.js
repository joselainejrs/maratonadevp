// const request = require('supertest');
// const app = require('../../src/app');
// const connection = require('../../src/database/connection');

// describe('ONG',() => {
//     beforeEach(async() =>{
//        await connection.migrate.rollback(); 
//        await connection.migrate.latest();
//     });

//     afterAll(async () => {
//         await connection.destroy();
//     });

//     it('create a new ONG', async () => {
//        const response  = await request(app)
//        .post('/ongs')
//        .send({
// 	        name: "BPT",
// 	        email: "contato@gmail.com",
// 	        whatsapp: "11987295762",
// 	        city: "Barueri",
// 	        uf: "SP"
//         });  

//         expect(response.body).toHaveProperty('id');
//         expect(response.body.id).toHaveLength(8);
//     });
// });
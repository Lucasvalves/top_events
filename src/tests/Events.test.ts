import request from 'supertest';
import {App} from '../app';

const app = new App().app
describe('Event test', ()=>{
  it('/POST Event', async()=>{
    const event = {
      title: 'Jorge e Mateus',
      price: [{sector: 'Pista', amount: '20'}],
      description: 'Evento Descrição',
      city: 'Belo Horizonte',
      location:{
        latitude:'-12.9789073',
        longitude: '-38.5093199'
      },
      cupons: [],
      date: new Date(),
      participants: [],
    };
    const response = await request(app)
      .post('/events')
      .field('title', event.title)
      .field('description', event.description)
      .field('city', event.city)
      .field('cupons', event.cupons)
      .field('location[latitude]', event.location.latitude)
      .field('location[longitude]', event.location.longitude)
      .field('price[sector]', event.price[0].sector)
      .field('price[amount]', event.price[1].amount)
      .attach('banner', '/Users/Meu Computador/Downloads/banner.png')
      .attach('flyers', '/Users/Meu Computador/Downloads/flyer1.png')
      .attach('flyers', '/Users/Meu Computador/Downloads/flyer2.png')
      if(response.error){
        console.log('O error', response.error);
      }
      expect(response.status).toBe(201);
      expect(response.body).toEqual({message: 'Evento criado com sucesso.'});
    });
})


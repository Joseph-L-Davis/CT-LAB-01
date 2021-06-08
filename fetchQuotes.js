import request from 'superagent';

export default async () => {
  const response = await request
    .get('http://futuramaapi.herokuapp.com/api/quotes');
  const result = response.body[0];

  const quoteObject = {
    name: result.character,
    text: result.quote,
    image: result.image
  };
  return  quoteObject ;
};


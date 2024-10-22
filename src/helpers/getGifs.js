export const getGifs = async (category) => {

    //enlace a partir de postman y giphy
    const url = `https://api.giphy.com/v1/gifs/search?api_key=5QiT7ENOcZIr4Q2cDI1PpjWa82L50Ywx&q=valorant${category}&limit=10`
  const resp = await fetch(url);
const {data} = await resp.json();

const gifs = data.map(img => ({
    
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

}));

return gifs;
 }


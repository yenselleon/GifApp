

export const getGif = async( category ) => {

    const url = `http://api.giphy.com/v1/gifs/search?api_key=kgwQ2cxgmP3eHEgUpqBwKmSjsy8Bvt6s&q=${ encodeURI(category) }&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json().then(resp => resp.data);
    const gif = await data.map(img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
    });

    

    return gif;
}
import axios from 'axios';
export async function getImages(request, currentPage) {
    const response = await axios.get("https://pixabay.com/api/", {
        params: {
            key: '44332544-4246296cfd54d81c9e369dca1',
            q: request,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: 1,
            per_page: 30,
        }
    });
    return response.data;
}

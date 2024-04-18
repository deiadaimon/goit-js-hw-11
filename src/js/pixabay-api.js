export function fetchRequest(name) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43226276-a07a0c17e428cfffb021b9b05';

    const params = new URLSearchParams({
        key: API_KEY,
        q: name,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
}
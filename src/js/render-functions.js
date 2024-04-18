export function createGalleryMarkup(array) {
    return array
        .map(({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads,
        }) => `
    <li class="gallery-card">
        <a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags}"></a>
        <ul class="description">
            <li><p>Likes</p>
            <p>${likes}</p></li>
            <li><p>Views</p>
            <p>${views}</p></li>
            <li><p>Comments</p>
            <p>${comments}</p></li>
            <li><p>Downloads</p>
            <p>${downloads}</p></li>
        </ul>
    </li>
    `)
        .join('');
}



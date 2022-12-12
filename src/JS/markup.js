export default imgList => {
    return imgList.map(
        ({
            likes,
            views,
            comments,
            downloads,
            tags,
            webformatURL,
            previewURL,
            largeImageURL,
        }) => `
        <div class="photo-card">
        <div class="img-box" largeImageURL="${largeImageURL}">
        <img src="${previewURL}"
        data-src="${webformatURL}" alt="${tags}" data-sizes="auto" class="lazyload"/>
        </div>
        <div class="info">
        <p class="info-item">
        <b>Likes</b>
        ${views}
        </p>
        <p class="info-item">
        <b>Comments</b>
        ${comments}
        </p>
        <p class="info-item">
        <b>Downloads</b>
        ${downloads}
        </p>
        </div>
        </div>`
        )
        .join('');
};
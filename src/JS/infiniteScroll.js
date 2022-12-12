export default (galleryEl, callback) => {
    if (
        galleryEl.offsetHeight + galleryEl.offsetTop - window.pageOffset <=
        document.documentElement.clientHeight
    ) {
        callback();
    }
};
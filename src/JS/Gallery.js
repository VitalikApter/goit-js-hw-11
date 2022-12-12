import axios from "axios";
import notifySender from './notifySender';

const PIXABAY_KEY = '32026559-3f9f047d7f40e5700adb9dfd4';

const URL = 'https://pixabay.com/api/';

const params = {
    key: '',
    q: '',
    per_page: null,
    page: 1,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
};

export default class Gallery {
    #URL = '';
    #params = params;
    constructor() {
        this.#URL = URL;
        this.#params.key = PIXABAY_KEY;
        this.#params.per_page = 40;
    }

    
    getPicturePage() {
        return axios.get(this.#URL, {
            params: this.#params,
            transformResponse: response => {
                try {
                    response = JSON.parse(response);
                    response.hits = response.hits.map(
                        ({
                            likes,
                            views,
                            comments,
                            downloads,
                            tags,
                            webformatURL,
                            previewURL,
                            largeImageURL,
                            totalHits,
                        }) => ({
                            likes,
                            views,
                            comments,
                            downloads,
                            tags,
                            previewURL,
                            webformatURL,
                            largeImageURL,
                            totalHits,
                        })
                        );
                }catch (e) {
                    //заглушка
                }

                return response;
            },
        }).then(response => {
            this.#params.page++;
            return response;
        }).catch(e => {
            return e.response;
        });
    }
    set query(searchQuery) {
        this.#params.q = searchQuery;
    }

    resetPage() {
        this.#params.page = 1;
    }
}
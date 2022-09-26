/*const DOMAIN=`https://malvestida.com`;
const SITE=`${DOMAIN}/wp-json`;
const API_WP=`${SITE}/wp/v2`;
const POSTS=`${API_WP}/posts?_embed`;
const PAGES=`${API_WP}/pages`;
const CATEGORIES=`${API_WP}/categories`;*/

const NAME="malvestida";
const DOMAIN=`https://${NAME}.com`;
const SITE=`${DOMAIN}/wp-json`;
const API_WP=`${SITE}/wp/v2`;
const PER_PAGE=8;
const POSTS=`${API_WP}/posts?_embed&per_page=${PER_PAGE}`;//per_page: para saber cuantos post quieres recibir
const POST=`${API_WP}/posts`;
const CATEGORIES=`${API_WP}/categories`;
const SEARCH=`${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let page=1;

export default{
    NAME,
    DOMAIN,
    SITE,
    API_WP,
    PER_PAGE,
    POSTS,
    POST,
    CATEGORIES,
    SEARCH,
    page
}
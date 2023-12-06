export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => 'articles';
export const getRouteArticleCreate = () => '/articles/create';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

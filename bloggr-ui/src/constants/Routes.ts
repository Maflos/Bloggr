export interface Route {
    title: string;
    path: string;
}

export const AppRoutes: Route[] = [
    { title: 'home', path: '/home' },
    { title: 'contact', path: '/contact' }
];

export const ProfileRoutes: { [key: string]: Route } = {
    profiles: { title: 'profiles', path: '/profiles' },
    profile: { title: 'profile', path: '/profiles/:userId' },
    posts: { title: 'posts', path: '/profiles/:userId/posts' },
    post: { title: 'post', path: '/profiles/:userId/posts/:postId' },
    categories: { title: 'categories', path: '/profiles/:userId/categories' },
    category: { title: 'category', path: '/profiles/:userId/categories/:categoryId' },
    others: { title: 'others', path: '/profiles/:userId/others' }
}
export interface Route {
    title: string;
    path: string;
    children: Route[];
}

export const AppRoutes: Route[] = [
    { title: `home`, path: `/home`, children: [] },
    { title: `contact`, path: `/contact`, children: [] }
];

export const AccountRoute: Route = {
    title: `account`,
    path: `/account`,
    children: [
        { title: `posts`, path: `/posts`, children: [] },
        { title: `tags`, path: `/tags`, children: [] },
        { title: `others`, path: `/others`, children: [] }
    ]
};
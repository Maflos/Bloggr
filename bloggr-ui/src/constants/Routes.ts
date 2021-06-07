export const AppRoutes = [
    { title: `home`, path: `/home` },
    { title: `contact`, path: `/contact` }
];

export const AccountRoutes = [
    {
        title: `account`,
        path: `/account`,
        children: [
            { title: `posts`, path: `/posts` },
            { title: `tags`, path: `/tags` },
            { title: `others`, path: `/others` }
        ]
    },
]
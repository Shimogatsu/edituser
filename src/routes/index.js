import wrapper from './wrapper/index.vue';
import users from './users/index.vue';
import users_edit from './users_edit/index.vue';

export default [
    {
        path: '',
        name: 'wrapper',
        component: wrapper,
        children: [
            {
                path: 'users',
                name: 'users',
                component: users
            },
            {
                path: 'users/:id',
                name: 'users_edit',
                props: true,
                component: users_edit
            },
            {
                path: '*',
                redirect: {name: 'users'}
            }
        ]
    },
    {
        path: '*',
        redirect: {name: 'users'}
    }
]
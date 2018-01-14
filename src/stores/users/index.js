import axios from 'axios';

export default {
    namespaced: true,
    state: {
        list: [],
        loading: false,
        nextPageUrl: '',
        previousPageUrl: ''
    },
    mutations: {
    },
    getters: {
        list(state)    {return state.list},
        loading(state)    {return state.loading},
    },
    actions: {
        load(context, key) {
            context.state.loading = true;
            let url = '/api/users'
            switch(key) {
                case 'next': {
                    url = context.state.nextPageUrl
                    break;
                }
                case 'prev': {
                    url = context.state.previousPageUrl
                    break;
                }
            }
            
            context.state.nextPageUrl = '';
            context.state.previousPageUrl = '';

            return axios.get(url).then(r=>{
                context.state.list = r.data.result;
                if(r.data.nextPageUrl !== undefined) {
                    context.state.nextPageUrl = r.data.nextPageUrl;
                }
                if(r.data.previousPageUrl !== undefined) {
                    context.state.previousPageUrl = r.data.previousPageUrl;
                }
                context.state.loading = false;
            }).catch(r=>{
                context.state.list = [
                    {id: '1', name: 'test', avatarUrl: 'test'},
                    {id: '2', name: 'test1'},
                    {id: '3', name: 'test2', avatarUrl: 'test2'},
                ];
                context.state.loading = false;
            });
        }
    }
}
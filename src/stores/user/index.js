import axios from 'axios';

export default {
    namespaced: true,
    state: {
        id: null,
        avatar: '',
        name: '',
        loading: false
    },
    mutations: {
        set_user(state, data) {
            if(data.avatarUrl !== undefined) {
                state.avatar = data.avatarUrl;
            }
            state.name = data.name;
            state.id = data.id;
        },
        set_name(state, v) {state.name = v}
    },
    getters: {
        item(state) {return {name: state.name, avatar: state.avatar, id: state.id}},
        loading(state)    {return state.loading},
    },
    actions: {
        load(context, id) {
            context.state.loading = true;

            return axios.get('/api/user/'+id).then(r=>{
                context.commit('set_user', r.data.result);
                context.state.loading = false;
            }).catch(r=>{
                let list = {
                    '1': {id: '1', name: 'test', avatarUrl: 'test'},
                    '2': {id: '2', name: 'test1'},
                    '3': {id: '3', name: 'test2', avatarUrl: 'test2'},
                };
                context.commit('set_user', list[id]);
                context.state.loading = false;
            });
        },
        save(context) {
            return axios.post('/api/user/'+context.state.id, {
                name: context.state.name,
                avatarUrl: context.state.avatar
            })
        }
    }
}
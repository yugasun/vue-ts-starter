import { defineStore } from 'pinia';

interface UserInfo {
    username: string;
    [prop: string]: any;
}

interface UserState {
    userInfo: UserInfo | null;
}

export const useUserStore = defineStore({
    id: 'user',
    state(): UserState {
        return {
            userInfo: null,
        };
    },
    getters: {
        isLogin: (state: UserState) => !!state.userInfo,
    },
    actions: {
        updateUser(userInfo: UserInfo | null) {
            this.userInfo = userInfo;
        },
    },
});

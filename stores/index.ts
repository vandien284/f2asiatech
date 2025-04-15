import { defineStore } from 'pinia'

export const useCommonStore = defineStore("commonStore", {
    state: () => {
        return {
            language: "EN"
        }
    },
    actions: {
        setLanguage({ language }: { language: string }) {
            this.language = language;
        },
    }
})
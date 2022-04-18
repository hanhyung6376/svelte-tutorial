import { writable } from "svelte/store";

const createTodo = () => {
    const { subscribe, set, update } = writable([]);

    return {
        subscribe,
        insert: (item) => update(n => [...n, item]),
        delete: (idx) => update(n => n.filter((todo, index) => index !== idx)),
        reset: () => set([])
    }
}

export const todos = createTodo()
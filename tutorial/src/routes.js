import Counter from './Counter.svelte'
import Test from './Test.svelte'
import WritableCounter from "./WritableCounter.svelte";

const routes = {
    '/': Test,
    '/count': Counter,
    '/writable-count': WritableCounter
}

export default routes
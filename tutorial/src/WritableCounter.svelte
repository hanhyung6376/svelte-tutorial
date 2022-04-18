<script>
    import { count } from './store/count'
</script>

<h1>The count is {$count}</h1>

<button on:click={count.increase}>+1</button>
<button on:click={count.decrease}>-1</button>
<button on:click={count.reset}>reset</button>

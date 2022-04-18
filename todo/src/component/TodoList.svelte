<script>
    import {todos} from "../store/todo";
    import TodoItem from "./TodoItem.svelte";
</script>

<div class="TodoList">
    {#each $todos as todo, index}
        <TodoItem text={todo} index={index}/>
    {/each}
</div>

<style lang="scss">
  .TodoList {
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
  }
</style>
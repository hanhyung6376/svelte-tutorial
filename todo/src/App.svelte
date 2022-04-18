<script>
	import TodoInsert from './component/TodoInsert.svelte'
    import TodoList from "./component/TodoList.svelte";
</script>

<div class="TodoTemplate">
    <div class="app-title">TODO List</div>
    <div class="content">
        <TodoInsert/>
        <TodoList/>
    </div>
</div>

<style>
    .TodoTemplate {
        width: 512px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 6rem;
        border-radius: 4px;
        overflow: hidden;
    }

    .app-title {
        background: #22b8cf;
        color: white;
        height: 4rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        background: white;
    }
</style>


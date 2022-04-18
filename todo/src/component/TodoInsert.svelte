<script>
    import CalendarPlus from 'svelte-material-icons/CalendarPlus.svelte'
    import { todos } from '../store/todo'

    let todo = ''
    function onChange(e) {
        todo = e.target.value
    }

    function onSubmit() {
        todos.insert(todo)
        todo = ''
    }

</script>

<form class="TodoInsert" on:submit|preventDefault={onSubmit}>
    <input placeholder="TODO" on:input={onChange} bind:value={todo}/>
    <button>
        <CalendarPlus/>
    </button>
</form>

<style lang="scss">
    .TodoInsert {
      display: flex;
      background: #495057;

      input {
        background: none;
        outline: none;
        border: none;
        padding: 0.5rem;
        font-size: 1.125rem;
        line-height: 1.5;
        color: white;

        &::placeholder {
          color: #dee2e6;
        }

        flex: 1;
      }

      button {
        background: none;
        outline: none;
        border: none;
        background: #868e96;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: 0.1s background ease-in;

        &:hover {
          background: #adb5bd;
        }
      }
    }
</style>
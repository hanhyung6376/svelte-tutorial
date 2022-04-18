<script>
    import {todos} from "../store/todo";

    export let text
    export let index

    function onRemove() {
        todos.delete(index)
    }
</script>

<div class="TodoItem-virtualized">
    <div class="TodoItem">
        <div class="CheckBox">
            <div class="Text">{text}</div>
        </div>
        <div class="remove" on:click={onRemove}>
            -
        </div>
    </div>
</div>

<style lang="scss">
    .TodoItem {
      padding: 1rem;
      display: flex;
      align-items: center;
      &:nth-child(even) {
        background: #f8f9fa;
      }
      .checkbox {
        cursor: pointer;
        flex: 1;
        display: flex;
        align-items: center;
        svg {
          font-size: 1.5rem;
        }
        .text {
          margin-left: 0.5rem;
        }
        &.checked {
          svg {
            color: #22b8cf;
          }
          .text {
            color: #adb5bd;
            text-decoration: line-through;
          }
        }
      }
      .remove {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #ff6b6b;
        cursor: pointer;
        &:hover {
          color: #ff8787;
        }
      }

      & + & {
        border-top: 1px solid #dee2e6;
      }
    }

    .TodoItem-virtualized {
      & + & {
        border-top: 1px solid #dee2e6;
      }
      &:nth-child(even) {
        background: #f8f9fa;
      }
    }
</style>
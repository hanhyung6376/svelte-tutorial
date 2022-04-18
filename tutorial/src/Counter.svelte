<script>
    let count = 0

    function onIncrease() {
        count += 1
    }

    function onDecrease() {
        count -= 1
    }
</script>

<main>
    <p>{count}</p>
    <button on:click={onIncrease}>
        +1
    </button>
    <button on:click={onDecrease}>
        -1
    </button>
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
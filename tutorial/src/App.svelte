<script>
	import Router from 'svelte-spa-router'
    import Header from "./Header.svelte";
    import routes from './routes'

    console.log(routes)
</script>

<Header/>
<Router {routes}/>

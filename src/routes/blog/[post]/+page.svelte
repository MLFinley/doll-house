<script>
// @ts-nocheck

    export let data;

    // load blog/{data.post}.md 
    // and render it as HTML
    import { onMount } from 'svelte';
    import { marked } from 'marked';

    /**
     * @type {any}
     */
    let html;

    onMount(async () => {
        const response = await fetch(`/${data.post}.md`);
        // if 404 then redirect to 404 page
        if (response.status === 404) {
            window.location.href = '/404';
        }
        console.log(response.status);
        const text = await response.text();
        
        html = marked(text);
    });


</script>

<!-- render html -->
{@html html}


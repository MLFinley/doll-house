<script>
    import { onMount } from 'svelte';
  
    /**
     * @type {any[]}
     */
    let files = [];
    
    onMount(async () => {
      const modules = import.meta.glob('/static/*.md');

  
      files = Object.keys(modules).map((path) => {
        return path.replace('/static/', '').replace('.md', '');
      });
    });
  </script>
  
{#each files as file (file)}
    <a href="/blog/{file}">
      {file}
    </a>
{/each}
  
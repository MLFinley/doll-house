<script>
    import { onMount } from 'svelte';
  
    /**
     * @type {any[]}
     */
    let files = [];
    
    onMount(async () => {
      const modules = import.meta.glob('/static/music/*.md');

  
      files = Object.keys(modules).map((path) => {
        return path.replace('/static/music/', '').replace('.md', '');
      });
    });
  </script>
  
{#each files as file (file)}
    <a href="/music/{file}">
      {file}
    </a>
    <br>
    <br>
{/each}
  
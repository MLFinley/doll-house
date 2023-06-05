<nav style = "background-color: #f1f1f1; padding: 1rem; display: flex; justify-content: space-around; align-items: center; align: center;">
    <a href="/" style="text-decoration: none; color: black; font-weight: bold; text-shadow: 0;">Home</a>
    <a href="/socials" style="text-decoration: none; color: black; font-weight: bold; text-shadow: 0;">Social</a>
</nav>
<!-- 500px of black that fades to transparent -->
<img src="/MollyNew.png" alt="Svelte logo" style = "position: fixed; top: 0; height:100vh; left: 100%; z-index: -2; transform: translate(-100%, 0);">
<div style="background: linear-gradient(to right, rgba(0,0,0,0.8) 375px, rgba(0,0,0,0) 1000px); width: 100%; height: 200vh; position: fixed; top: 0; right: 0; z-index: -1; overflow: visible;"></div>
<!-- <div style="background: rgba(0,0,0,0.8); width: 500px; height: 100%; position: fixed; top: 0; left: 0; z-index: -1;"></div> -->

<!-- width should be the total width - 700px, or 500px if 500px is bigger -->
<div style="width: calc(max(min(500px, 100%), 100% - 300px));">
<slot></slot>
</div>
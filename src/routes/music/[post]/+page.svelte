<script>
    export let data;
</script>

<!-- render html -->

<h1 style="text-align: center; font-size: 1.5em;">
    {data.title}
</h1>

<div class="post">
    {@html data.html}
</div>

<style>
    .post {
        padding: 0 10%;
        text-align: left;
        font-size: 30px;
    }

</style>
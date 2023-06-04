<script>
    export let color = "#000000";
    export let text_color = "#ffffff";
    export let text = "Social: MollyFnly";
    export let link = "https://google.com";
    export let path = "";
</script>
<a
    class="entry"
    href="{link}"
    style="background-color: {color}; display: flex; align-items: center; black margin: 0 auto; margin-top: 2vh; margin-bottom: 2vh; border-radius: 5px; padding: 15px 15px;text-decoration: none; color: {text_color}; font-weight: bold; text-shadow: 0;"
>
    <svg
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        style="fill:{text_color}; padding: 0px 10px;"
    >
        <path
            d="{path}"
        />
    </svg>
    {text}
</a>

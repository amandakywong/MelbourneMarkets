<script>
   import { onMount } from 'svelte';
   import { db } from '../../stores.js'
   let posts = []
   db.subscribe((value) => {
    posts = value;
  });
  // console.log(posts)
  
  let index;
   import { storedIndex } from '../../stores.js'
   onMount(() => {
    index = $storedIndex;
  });
</script>

{#await $storedIndex}
<p>loading...</p>
{:then index}
<section>
    <div>
        <hr style="border: none; border-top: 1px solid #000; margin: 2rem 0;">
        <h1 class="p-4 text-center text-5xl mt-12">{posts[index].title}</h1>
        <div style="height: 38vw">
            <img id="bannerImg" src="{posts[index].image}" alt="bannerImg" style="width: 100%; height: 100%; object-fit: cover; object-position:center;"/>
        </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 my-16 gap-6" style="padding-left: 12%; padding-right: 12%">
        <div class="leading-loose md:flex md:flex-col text-center">
            <div class="md:text-left">
                <p class="font-bold pt-4" id="address">{posts[index].address}</p>
            </div>
            <div class="my-3 md:my-9 md:text-left">
                <p class="font-bold ">When:</p>
                <p>{@html posts[index].dates}</p>
            </div>
            <div class="my-3 underline break-words md:my-9 md:text-left">
                <a href="{posts[index].website}">{posts[index].website}</a>
            </div>
        </div>
        <div class="col-span-2">
            <p>{@html posts[index].full}</p>
        </div>
    </div>
    <div>
        <iframe
        title="googleMaps"
        width="100%"
        height="450"
        style="border:0"
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAJlEjH5W9wrIS0SEERQ4o2A1a5Mb2Uw-0&q={posts[index].map}">
        </iframe>           
    </div>
</section>
{/await}
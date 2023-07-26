<script>
  /** @type {import('./$types').PageData} */
//get database data and store in global posts
  export let data;
  const posts = data.body.posts;
  //console.log(posts);
  import { db } from '../../stores.js'
  db.set(posts)

//to find and store index of clicked card
  import { storedIndex } from '../../stores.js'
  function indexOfPost(postTitle) {
  const index = posts.findIndex((post) => {
    return post.title === postTitle;
  });
    storedIndex.set(index);
  }

//filter logic
let selectedTypes = []
let selectedAreas = []
function selectTypeButton(type) {
  return selectedTypes.push(type)
}
function selectAreaButton(area){
  return  selectedAreas.push(area)
}




//toggle active status
function toggle() {
  const element = event.target;
    element.classList.toggle('active');
  }
</script>

<!-- Filter section -->
<section class="text-gray-50 py-6 px-8 font-bold" style="background-image: url(Filterbackground.png); background-size:cover; background-position: center;">
  <h2>What are you looking for?</h2>
  <div
    id="typeFilters"
    class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 py-9"
  >
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    > 
      <img class="buttonimg" alt="Arts and craft button" src="flowericon.png"/>
      <button
        on:click={toggle}
        class="typefilterbutton"
      >
      Arts and craft
      </button>
    </div>
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    >
      <img class="buttonimg" alt="fresh produce button" src="flowericon.png"/>
      <button
        on:click={toggle}
        class="typefilterbutton right-3.5"
      >
      Fresh Produce
      </button>
    </div>
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    >
      <img class="buttonimg"  alt="Bric-a-brac button" src="flowericon.png"/>
      <button
      on:click={toggle}
      class="typefilterbutton right-3.5"
      >
      Bric-a-brac
      </button>
    </div>
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    >
      <img class="buttonimg"  alt="Farmers market button" src="flowericon.png">
      <button
      on:click={toggle}
      class="typefilterbutton right-3.5"
      >
      Farmers Market
      </button>
    </div>
  </div>
  <div id="areaFilters" class="w-full flex justify-around">
    <p class="py-5 font-bold">Where are you going?</p>
    <div 
    class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-4 py-9"
    >
      <button

      onclick="filter('Central')"
      id="Central" class="areafilter cursor-pointer text-black hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 mb-2">
      Central Melbourne
      </button>
      <button
      onclick="filter('North')"
      id="North" class="areafilter cursor-pointer text-black hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 mb-2">
      North
      </button>
      <button
      onclick="filter('South')"
      id="South" class="areafilter cursor-pointer text-black hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 mb-2">
      South
      </button>
      <button
      onclick="filter('East')"
      id="East" class="areafilter cursor-pointer text-black hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 mb-2">
      East
      </button>
      <button
      onclick="filter('West')"
      id="West" class="areafilter cursor-pointer text-black hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 mb-2">
      West
      </button>
      <button
      onclick="filter('Regional')"
      id="Regional" class="areafilter cursor-pointer text-black hover:bg-white font-medium rounded-full text-lg px-5 py-2.5 mb-2">
      Regional
      </button>
    </div>
  </div>
  <div id="dateFilters">
    <p class="py-5 font-bold">When is it on?</p>
  </div>
</section>


<!-- Cards section -->
<div id="cardsContainer">
{#each posts as post, index}
    <a href="../details" class="card-shell" on:click={() => indexOfPost(post.title)}>
      <div class="card {post.type}">
        <div class="image-container">
          <img src={post.image} alt="img"/>
        </div>
        <div class="container">
          <h5>{post.title}</h5>
          <h6>📍 {post.location}</h6>
          <h6>{post.description}</h6>
        </div>
      </div>
    </a>

{/each}
</div>
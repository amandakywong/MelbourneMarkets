<script>

  //get database data and store in global posts
  export let data;
  const posts = data.body.posts;
  //console.log(posts);
  import { db } from "../../stores.js";
  db.set(posts);

  //to find and store index of clicked card
  import { storedIndex } from "../../stores.js";
  function indexOfPost(postTitle) {
    const index = posts.findIndex((post) => {
      return post.title === postTitle;
    });
    storedIndex.set(index);
  }

  //filter logic
  let selectedTypes = [];
  let selectedAreas = [];

  //toggle active and filters
  function toggle(filter) {
    const element = event.target;
    element.classList.toggle("active");
    //add selected filters into selectedTypes array
    if (filter === "craft") {
      if (selectedTypes.includes(filter)) {
        selectedTypes = selectedTypes.filter((e) => e !== filter);
      } else {
        selectedTypes = selectedTypes.concat(filter);
      }
    }
    if (filter === "food") {
      if (selectedTypes.includes(filter)) {
        selectedTypes = selectedTypes.filter((e) => e !== filter);
      } else {
        selectedTypes = selectedTypes.concat(filter);
      }
    }
    if (filter === "bricabrac") {
      if (selectedTypes.includes(filter)) {
        selectedTypes = selectedTypes.filter((e) => e !== filter);
      } else {
        selectedTypes = selectedTypes.concat(filter);
      }
    }
    if (filter === "farmers") {
      if (selectedTypes.includes(filter)) {
        selectedTypes = selectedTypes.filter((e) => e !== filter);
      } else {
        selectedTypes = selectedTypes.concat(filter);
      }
    }
    //add selected filters into selectedAreas
    if (filter === "Central") {
      if (selectedAreas.includes(filter)) {
        selectedAreas = selectedAreas.filter((e) => e !== filter);
      } else {
        selectedAreas = selectedAreas.concat(filter);
      }
    }
    if (filter === "North") {
      if (selectedAreas.includes(filter)) {
        selectedAreas = selectedAreas.filter((e) => e !== filter);
      } else {
        selectedAreas = selectedAreas.concat(filter);
      }
    }
    if (filter === "South") {
      if (selectedAreas.includes(filter)) {
        selectedAreas = selectedAreas.filter((e) => e !== filter);
      } else {
        selectedAreas = selectedAreas.concat(filter);
      }
    }
    if (filter === "East") {
      if (selectedAreas.includes(filter)) {
        selectedAreas = selectedAreas.filter((e) => e !== filter);
      } else {
        selectedAreas = selectedAreas.concat(filter);
      }
    }
    if (filter === "West") {
      if (selectedAreas.includes(filter)) {
        selectedAreas = selectedAreas.filter((e) => e !== filter);
      } else {
        selectedAreas = selectedAreas.concat(filter);
      }
    }
    if (filter === "Regional") {
      if (selectedAreas.includes(filter)) {
        selectedAreas = selectedAreas.filter((e) => e !== filter);
      } else {
        selectedAreas = selectedAreas.concat(filter);
      }
    }
    //create new array of posts that is filtered
    filteredPosts = posts.filter(isCardVisible);
  }

  function isCardVisible(post) {
    let typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.some((type) => post.type === type);
    let areaMatch =
      selectedAreas.length === 0 ||
      selectedAreas.some((area) => post.area === area);
    return typeMatch && areaMatch;
  }

  // Initialize the filtered posts based on the initial posts and selected filters
  let filteredPosts = posts.filter(isCardVisible);
</script>

<!-- Filter section -->
<section
  class="text-gray-50 py-6 px-8 font-bold"
  style="background-image: url(Filterbackground.png); background-size:cover; background-position: center;"
>
  <h2>What are you looking for?</h2>
  <div
    class="typeFilters grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 py-9"
  >
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    >
      <span class="buttonimgcontainer">
        <img
          class="buttonimg py-1"
          alt="Arts and craft button"
          src="artsandcrafticon.png"
        />
      </span>
      <button on:click={() => toggle("craft")} class="typefilterbutton">
        Arts and craft
      </button>
    </div>
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    >
      <span class="buttonimgcontainer">
        <img
          class="buttonimg py-1"
          alt="fresh produce button"
          src="freshproduceicon.png"
        />
      </span>
      <button on:click={() => toggle("food")} class="typefilterbutton">
        Fresh Produce
      </button>
    </div>
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    >
      <span class="buttonimgcontainer">
        <img
          class="buttonimg shortimage"
          alt="Bric-a-brac button"
          src="bricabracicon.png"
        />
      </span>
      <button on:click={() => toggle("bricabrac")} class="typefilterbutton">
        Bric-a-brac
      </button>
    </div>
    <div
      class="buttoncontainer transition duration-300 ease-in-out hover:scale-110"
    >
      <span class="buttonimgcontainer">
        <img
          class="buttonimg shortimage"
          alt="Farmers market button"
          src="farmersicon.png"
        />
      </span>
      <button on:click={() => toggle("farmers")} class="typefilterbutton">
        Farmers Market
      </button>
    </div>
  </div>
  <div id="areaFilters" class="w-full flex justify-around">
    <p class="py-5 font-bold">Where are you going?</p>
    <div
      class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-6 gap-4 py-9"
    >
      <button on:click={() => toggle("Central")} class="areafilterbutton">
        Central Melbourne
      </button>
      <button on:click={() => toggle("North")} class="areafilterbutton">
        North
      </button>
      <button on:click={() => toggle("South")} class="areafilterbutton">
        South
      </button>
      <button on:click={() => toggle("East")} class="areafilterbutton">
        East
      </button>
      <button on:click={() => toggle("West")} class="areafilterbutton">
        West
      </button>
      <button on:click={() => toggle("Regional")} class="areafilterbutton">
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
  {#each filteredPosts as post, index}
    <a
      href="../details"
      class="card-shell"
      on:click={() => indexOfPost(post.title)}
    >
      <div class="card {post.type}">
        <div class="image-container">
          <img src={post.image} alt="img" />
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

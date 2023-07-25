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
</script>


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
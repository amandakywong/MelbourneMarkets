<script>
  import {fade} from 'svelte/transition'
  export let img1 = []
  export let img2 = []
  export let img3 = []
  export let img4 = []
  let carouselImgs = [
    {
      path: img1,
      id: "img1",
    },
    {
      path: img2,
      id: "img2",
    },
    {
      path: img3,
      id: "img3",
    },
    {
      path: img4,
      id: "img4",
    },
    // {path: "https://images.unsplash.com/photo-1568808880686-d7f08f37ddfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    //   id: "img5",
    // },
  ];

  const rotateLeft = (e) => {
    carouselImgs = [carouselImgs[carouselImgs.length -1],...carouselImgs.slice(0, carouselImgs.length - 1)]
  };

  const rotateRight = (e) => {
    carouselImgs = [...carouselImgs.slice(1, carouselImgs.length), carouselImgs[0]]
  };


</script>

<!-- to add component into page: <Carousel carouselImgs = {imagesfromDB}/> -->
<div id="carousel-container">
    {#each carouselImgs as image (image)}
  <div id="carousel-images" animate:fade>
      <img 
        src={image.path}
        alt={image.id}
        id={image.id}
      />
  </div>
  {/each}
  <div>
    <button on:click={rotateLeft} id='left'><img src='./left-arrow.png' alt='left-arrow'/></button>
    <button on:click={rotateRight} id='right'><img src='./right-arrow.png' alt='right-arrow'/></button>
  </div>
</div>

  <style>
    #carousel-container {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
        height: 60vh;
      overflow-y: hidden;
    }
    #carousel-images {
      display: flex;
      justify-content: center;
      align-items: center;
        height: 60vh;
      flex-wrap: nowrap;
    }
    #carousel-images img{
        width:100%;
        height: 60vh;
        object-position: center;
        object-fit:cover;
    }
    #left, #right {
        position: absolute;
        top: 50%;
        width: 30px;
        height: 9%;
        justify-content: center;
        border-radius: 9999px;
        background-color: whitesmoke;
    }
    #left {
        left: 10px;
    }
    #right {
        right: 10px;
    }
  </style>

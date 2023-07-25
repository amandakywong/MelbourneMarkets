<script>
    import "../styles.css";
  </script>
  
  <svelte:head>
    <title>Explore Victorian Markets</title>
  
    <!-- Gogole Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Mate&family=Ysabeau+Office:wght@200&display=swap"
      rel="stylesheet"
    />
  
    <!-- Tailwind -->
    <!-- Tailwind -->
    <script src="https://cdn-tailwindcss.vercel.app/"></script>
  
    <style>
      section {
        font-family: "Poppins", sans-serif;
      }
    </style>
  </svelte:head>
  <!-- Nav bar -->
  <div
    class="py-4 flex flex-wrap items-center justify-around bg-white text-black"
    style="font-family: Poppins"
  >
    <a href="./home" class="hover:underline, cursor-pointer">-Home-</a>
    <a href="./posts" class="hover:underline, cursor-pointer">-Markets-</a>
    <a href="." class="hover:underline, cursor-pointer">-About-</a>
  </div>
  
  <!-- Header -->
  <div>
    <a href="./home" class="cursor-pointer"
      ><h2
        style="
        font-family: 'Ysabeau Office', sans-serif;
        font-size: 6vw;
        text-align: center;
      "
      >
        ✿MELBOURNE MARKETS
      </h2></a
    >
  </div>
  
  <slot />
  
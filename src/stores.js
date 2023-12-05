import { writable } from "svelte/store";

export const db = writable([])


// export const storedIndex = writable(
//     (typeof window !== 'undefined') && (localStorage.getItem("storedIndex") || 0)
// );

// storedIndex.subscribe((val) => (typeof window !== 'undefined') && localStorage.setItem("storedIndex", val))


export const storedIndex = writable(
    (typeof window !== 'undefined') ? parseInt(localStorage.getItem("storedIndex")) : 0
  );
  
  // Subscribe to storedIndex changes and update localStorage
  storedIndex.subscribe((val) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("storedIndex", val.toString());
    }
  });
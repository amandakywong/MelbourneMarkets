import pkg from 'pg';
const {Pool} = pkg;
import express from "express";
import cors from 'cors'
const app = express();

const pool = new Pool({
    host: "localhost",
    user: "chris",
    port: 5432,
    database: "marketdb"
})

// //middleware
// app.use(cors());
// //     //gets us access for reqest.body
// app.use(express.json());


export async function load() {
      const client = await pool.connect();
      try {
        const result = await client.query("SELECT * FROM posts");
        let posts = (result.rows);
        //console.log(posts) 
        return {
          body: {
            posts,
          },
        };
      } catch (err) {
        console.error("Error:", err);
      }
      
    }

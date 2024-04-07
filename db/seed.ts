import { db, Comment, Author } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Author).values([
    { name: "Dheeraj", id: 1 },
    { name: "Ritesh", id: 2 },
  ]);
  await db.insert(Comment).values([
    { author: "Dheeraj", body: "This is a comment", likes: 0, authorId: 1 },
    { author: "Ritesh", body: "This is awesome", likes: 4, authorId: 2 },
  ]);
}

import {db} from "./server/db.js";
async function main() {
    await db.user.create({
      data: {
        emailAddress: "test@example.com",
        firstName: "John",
        lastName: "Doe"
      }
    });
  }
  
  
  main().catch(console.error);
  console.log("Hello, world!");
  
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request) {
  return new Response("GET: Hello, Next.js!");
}

// export async function POST(request: Request) {
// return new Response("POST: Hello, Next.js!");
// }

// export async function DELETE(request: Request) {
// return new Response("DELETE: Hello, Next.js!");
// }

// export async function UPDATE(request: Request) {
// return new Response("UPDATE: Hello, Next.js!");
// }

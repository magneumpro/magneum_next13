import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request, response: Response) {
  return new Response("GET: Hello, Next.js!");
}

// export async function POST(request: Request, response: Response) {
// return new Response("POST: Hello, Next.js!");
// }

// export async function DELETE(request: Request, response: Response) {
// return new Response("DELETE: Hello, Next.js!");
// }

// export async function UPDATE(request: Request, response: Response) {
// return new Response("UPDATE: Hello, Next.js!");
// }

import { Server } from "https://deno.land/std@0.117.0/http/server.ts";

// サイトの通りに書いても動かなかったので、
// https://deno.land/std@0.117.0/http/server.ts
// のリンク先のコメントに書いてある方法で実施した。

const handler = (request: Request) => {
  const body = `Your user-agent is:\n\n${request.headers.get(
  "user-agent",
  ) ?? "Unknown"}`;

  return new Response(body, { status: 200 });
};

const server = new Server({ handler });
const listener = Deno.listen({ port: 4505 });

console.log("server listening on http://localhost:4505");

await server.serve(listener);

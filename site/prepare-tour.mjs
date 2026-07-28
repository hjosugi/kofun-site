import { cp, rm } from "node:fs/promises";

// The tour is language-repository source: its compiler.mjs is a browser port of
// bootstrap/wasm/compiler.c that kofun's own `make tour` gate pins byte for
// byte. This site publishes it, it does not own it.
const source = new URL("../kofun/docs/tour/", import.meta.url);
const target = new URL("../public/tour/", import.meta.url);

await rm(target, { force: true, recursive: true });
await cp(source, target, { recursive: true });

console.log("PREPARED: kofun/docs/tour -> public/tour");

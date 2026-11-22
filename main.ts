// SPDX-License-Identifier: MIT
// Entry program for the make.fun bounty
// "the-plan-make-fun-will-carry-20261122-2138".
// Node 22+, standard library only, no network.
// Writes the one plan (<=280 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const PLAN =
  "Day 1: list 50 clinics/salons with no online booking (Google Maps). Email each: $199 AI booking chatbot, built in 1 day, n8n free tier. $100: domain + Apollo credits. Close 3 by day 10 = $597. Repeat daily, upsell $49/mo. Drop leads silent 3 days; no build before $99 deposit.";

const length = [...PLAN].length;
if (length < 1 || length > 280 || PLAN.trim().length === 0) {
  throw new Error(`Plan must be 1-280 non-blank characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PLAN, "utf8");
console.log(`Wrote /output/entry.txt (${[...PLAN].length} chars)`);

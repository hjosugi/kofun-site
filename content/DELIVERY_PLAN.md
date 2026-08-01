# Delivery plan

Status: generated read-only planning snapshot. This is a capacity forecast, not
a promise that unresolved or externally blocked work will complete by a date.

Repository: [`hjosugi/kofun`](https://github.com/hjosugi/kofun)

As of: `2026-08-01`

## Capacity and scope

- Maximum four agents: three writer lanes plus one review/integration lane.
- Work in progress is capped at three implementation issues.
- Planning umbrellas are counted but never scheduled as implementation work.
- `33` curated issues are scheduled and
  `19` are deferred or externally blocked.

| Metric | Count |
|---|---:|
| All issues | 677 |
| Open issues | 61 |
| Open curated | 52 |
| Open planning umbrellas | 9 |
| Scheduled curated | 33 |
| Unscheduled curated | 19 |

## Forecast

| Scenario | Finish | Interpretation |
|---|---|---|
| 4-agent capacity plan | 2026-11-03 | Deterministic lane simulation with one serial reviewer. |
| Conservative +25% buffer | 2026-11-26 | Allows for refinement, rework, and integration variance. |
| Observed completion pace, intake frozen | 2026-08-07 | Optimistic extrapolation; it freezes intake and may include retrospective tracker closure. |
| Observed net issue burn | — | No finish date: curated intake equals or exceeds completed work in the observation window. |

Confidence is **low** until missing sizes, refinement
states, external blockers, and future intake are resolved. Over the trailing
`14` days, curated intake was
`80.5`/week and completion was
`54`/week; issues closed as
`not_planned` are excluded from completion throughput.

## Critical dependency chains

### Self-host fixed point and independent reproduction

Lane: `writer-a`

| Issue | Tracker state | Priority | Start | Delivered |
|---|---|---|---|---|
| [#618](https://github.com/hjosugi/kofun/issues/618) | needs-detail | P0 | 2026-08-03 | 2026-08-18 |
| [#622](https://github.com/hjosugi/kofun/issues/622) | blocked | P0 | 2026-08-19 | 2026-08-25 |
| [#271](https://github.com/hjosugi/kofun/issues/271) | blocked | P0 | 2026-08-26 | 2026-09-01 |
| [#272](https://github.com/hjosugi/kofun/issues/272) | blocked | P0 | 2026-09-02 | 2026-09-08 |
| [#274](https://github.com/hjosugi/kofun/issues/274) | blocked | P1 | 2026-09-09 | 2026-09-15 |

### Compiler-native Decimal delivery

Lane: `writer-b`

| Issue | Tracker state | Priority | Start | Delivered |
|---|---|---|---|---|
| [#721](https://github.com/hjosugi/kofun/issues/721) | closed | P1 | — | — |
| [#722](https://github.com/hjosugi/kofun/issues/722) | closed | P1 | — | — |
| [#723](https://github.com/hjosugi/kofun/issues/723) | closed | P1 | — | — |
| [#724](https://github.com/hjosugi/kofun/issues/724) | closed | P1 | — | — |
| [#725](https://github.com/hjosugi/kofun/issues/725) | blocked | P2 | 2026-08-03 | 2026-08-14 |
| [#726](https://github.com/hjosugi/kofun/issues/726) | closed | P2 | — | — |

## Scheduled curated work

Writer end is implementation complete; delivered is after the single reviewer
lane finishes integration.

| Issue | Lane | State | Priority | Size | Start | Writer end | Delivered | Confidence | Title |
|---|---|---|---|---|---|---|---|---|---|
| [#618](https://github.com/hjosugi/kofun/issues/618) | `writer-a` | needs-detail | P0 | L | 2026-08-03 | 2026-08-14 | 2026-08-18 | low | Self-host profile: freeze the smallest honest compiler S and coverage manifest |
| [#725](https://github.com/hjosugi/kofun/issues/725) | `writer-b` | blocked | P2 | L | 2026-08-03 | 2026-08-12 | 2026-08-14 | conditional | Decimal slice 6: state scale guarantees truthfully now, and add Fixed[scale] when const generics exist |
| [#637](https://github.com/hjosugi/kofun/issues/637) | `writer-c` | in-progress | P1 | M | 2026-08-03 | 2026-08-06 | 2026-08-07 | medium | Discovery query v1: project inferred types and callable operations from semantic facts |
| [#855](https://github.com/hjosugi/kofun/issues/855) | `writer-c` | in-progress | P1 | — | 2026-08-07 | 2026-08-13 | 2026-08-19 | low | native aggregate Core does not enforce its documented 10..99 print bound when the value comes from a list index |
| [#625](https://github.com/hjosugi/kofun/issues/625) | `writer-c` | needs-decision | P1 | M | 2026-08-14 | 2026-08-24 | 2026-08-26 | low | Function-call ergonomics: labelled arguments and one trailing-lambda rule |
| [#27](https://github.com/hjosugi/kofun/issues/27) | `writer-b` | needs-detail | P1 | M | 2026-08-17 | 2026-08-24 | 2026-08-27 | low | Sample: end-to-end JSON API service |
| [#622](https://github.com/hjosugi/kofun/issues/622) | `writer-a` | blocked | P0 | M | 2026-08-19 | 2026-08-24 | 2026-08-25 | conditional | Self-host compiler driver: args, file I/O, and compiling S to deterministic C11 |
| [#276](https://github.com/hjosugi/kofun/issues/276) | `writer-b` | needs-detail | P1 | L | 2026-08-25 | 2026-09-07 | 2026-09-10 | low | Reduce boilerplate: derive, and generated members |
| [#281](https://github.com/hjosugi/kofun/issues/281) | `writer-c` | needs-detail | P1 | M | 2026-08-25 | 2026-09-01 | 2026-09-02 | low | Position paper: what replacing C and Rust actually requires |
| [#271](https://github.com/hjosugi/kofun/issues/271) | `writer-a` | blocked | P0 | M | 2026-08-26 | 2026-08-31 | 2026-09-01 | conditional | Bootstrap: produce C1/A1 and self-compile S into C2/A2 |
| [#272](https://github.com/hjosugi/kofun/issues/272) | `writer-a` | blocked | P0 | M | 2026-09-02 | 2026-09-07 | 2026-09-08 | conditional | Bootstrap fixed point: produce C3/A3, compare three generations, close B4/B5 |
| [#533](https://github.com/hjosugi/kofun/issues/533) | `writer-c` | needs-detail | P1 | L | 2026-09-02 | 2026-09-15 | 2026-09-17 | low | Show where ownership goes: LSP hover, inlay hints, and diagnostics |
| [#554](https://github.com/hjosugi/kofun/issues/554) | `writer-b` | needs-detail | P1 | S | 2026-09-08 | 2026-09-11 | 2026-09-14 | low | Backend strategy: reject MLIR, keep the self-hosted backend — with measured costs |
| [#274](https://github.com/hjosugi/kofun/issues/274) | `writer-a` | blocked | P1 | M | 2026-09-09 | 2026-09-14 | 2026-09-15 | conditional | Reproducible bootstrap B6: independent clean builder reproduces the fixed point |
| [#555](https://github.com/hjosugi/kofun/issues/555) | `writer-b` | needs-detail | P1 | S | 2026-09-14 | 2026-09-17 | 2026-09-18 | low | Concurrency: scoped parallelism needs no new machinery; ownership helps here |
| [#556](https://github.com/hjosugi/kofun/issues/556) | `writer-a` | needs-detail | P1 | S | 2026-09-16 | 2026-09-21 | 2026-09-22 | low | Effect systems: ship pure/impure first; multi-shot continuations are unsound with take |
| [#557](https://github.com/hjosugi/kofun/issues/557) | `writer-c` | needs-detail | P1 | S | 2026-09-16 | 2026-09-21 | 2026-09-23 | low | Reading list for the type checker: what to copy, what to skip |
| [#569](https://github.com/hjosugi/kofun/issues/569) | `writer-b` | needs-detail | P1 | S | 2026-09-18 | 2026-09-23 | 2026-09-24 | low | Austral: make authority explicit with affine capability values |
| [#570](https://github.com/hjosugi/kofun/issues/570) | `writer-a` | needs-detail | P1 | S | 2026-09-22 | 2026-09-25 | 2026-09-28 | low | Austral: propagate ownership kind structurally through generics and ADTs |
| [#571](https://github.com/hjosugi/kofun/issues/571) | `writer-c` | needs-detail | P1 | S | 2026-09-22 | 2026-09-25 | 2026-09-29 | low | Austral/Nim: support zero-copy borrowed results without user-written lifetimes |
| [#573](https://github.com/hjosugi/kofun/issues/573) | `writer-b` | needs-detail | P1 | S | 2026-09-24 | 2026-09-29 | 2026-09-30 | low | Odin: make allocator choice a scoped, effect-tracked capability |
| [#574](https://github.com/hjosugi/kofun/issues/574) | `writer-a` | needs-detail | P1 | S | 2026-09-28 | 2026-10-01 | 2026-10-02 | low | V: generate audited C bindings from Clang AST before attempting source translation |
| [#710](https://github.com/hjosugi/kofun/issues/710) | `writer-c` | needs-detail | P1 | L | 2026-09-28 | 2026-10-09 | 2026-10-13 | low | Compiler-native Decimal: implement the accepted language design across all backends |
| [#847](https://github.com/hjosugi/kofun/issues/847) | `writer-b` | in-progress | P2 | M | 2026-09-30 | 2026-10-05 | 2026-10-06 | medium | Benchmark report producer: canonical v1 bytes and deterministic summaries in Kofun |
| [#859](https://github.com/hjosugi/kofun/issues/859) | `writer-a` | in-progress | P2 | S | 2026-10-02 | 2026-10-05 | 2026-10-07 | medium | Benchmark summary slice: deterministic Samples8 quantiles and MAD in Stage 2 |
| [#735](https://github.com/hjosugi/kofun/issues/735) | `writer-a` | needs-decision | P2 | M | 2026-10-06 | 2026-10-14 | 2026-10-15 | low | One-shot effect handlers: affine resumptions with a runtime double-resume backstop |
| [#736](https://github.com/hjosugi/kofun/issues/736) | `writer-b` | needs-decision | P2 | M | 2026-10-06 | 2026-10-14 | 2026-10-16 | low | Deterministic structured concurrency: versioned schedule traces, strict replay, and bounded exploration |
| [#740](https://github.com/hjosugi/kofun/issues/740) | `writer-c` | needs-decision | P2 | M | 2026-10-12 | 2026-10-20 | 2026-10-21 | low | Term-level semantic identity: evaluate rename-stable hashes, caches, and structural diffs |
| [#784](https://github.com/hjosugi/kofun/issues/784) | `writer-a` | needs-decision | P2 | M | 2026-10-15 | 2026-10-23 | 2026-10-26 | low | ownership: an affine handle whose owned state cannot be duplicated (#644) |
| [#791](https://github.com/hjosugi/kofun/issues/791) | `writer-b` | needs-decision | P2 | M | 2026-10-15 | 2026-10-23 | 2026-10-27 | low | Codegen contract stage 2: unify Operand and FrameLayout so the materialisation layer can be shared |
| [#572](https://github.com/hjosugi/kofun/issues/572) | `writer-c` | needs-detail | P2 | S | 2026-10-21 | 2026-10-26 | 2026-10-28 | low | Nim: infer last-use moves and add a compile-time move assertion |
| [#576](https://github.com/hjosugi/kofun/issues/576) | `writer-a` | needs-detail | P2 | S | 2026-10-26 | 2026-10-29 | 2026-10-30 | low | Koka: reuse matched ADT constructors in place when storage is unique |
| [#648](https://github.com/hjosugi/kofun/issues/648) | `writer-b` | needs-detail | P2 | M | 2026-10-26 | 2026-11-02 | 2026-11-03 | low | Time-zone data v1: versioned tiny tzdb reader with gap and fold resolution |

## Weekly calendar

| Week of | Active issues | Delivered | Writer load |
|---|---|---|---:|
| 2026-08-03 | #618, #637, #725, #855 | #637 | 15/15 |
| 2026-08-10 | #618, #625, #725, #855 | #725 | 13/15 |
| 2026-08-17 | #27, #618, #622, #625, #855 | #618, #855 | 13/15 |
| 2026-08-24 | #27, #271, #276, #281, #622, #625 | #27, #622, #625 | 14/15 |
| 2026-08-31 | #271, #272, #276, #281, #533 | #271, #281 | 14/15 |
| 2026-09-07 | #272, #274, #276, #533, #554 | #272, #276 | 14/15 |
| 2026-09-14 | #274, #533, #554, #555, #556, #557, #569 | #274, #533, #554, #555 | 14/15 |
| 2026-09-21 | #556, #557, #569, #570, #571, #573 | #556, #557, #569 | 15/15 |
| 2026-09-28 | #570, #571, #573, #574, #710, #847, #859 | #570, #571, #573, #574 | 15/15 |
| 2026-10-05 | #710, #735, #736, #847, #859 | #847, #859 | 15/15 |
| 2026-10-12 | #710, #735, #736, #740, #784, #791 | #710, #735, #736 | 15/15 |
| 2026-10-19 | #572, #740, #784, #791 | #740 | 15/15 |
| 2026-10-26 | #572, #576, #648, #784, #791 | #572, #576, #784, #791 | 10/15 |
| 2026-11-02 | #648 | #648 | 1/15 |

## Not scheduled

No finish date is assigned when the tracker itself says the work is deferred or
has an external blocker outside the represented serial chains.

| Issue | State | Reason |
|---|---|---|
| [#277](https://github.com/hjosugi/kofun/issues/277) | deferred | deferred outside the active delivery scope |
| [#278](https://github.com/hjosugi/kofun/issues/278) | deferred | deferred outside the active delivery scope |
| [#279](https://github.com/hjosugi/kofun/issues/279) | deferred | deferred outside the active delivery scope |
| [#280](https://github.com/hjosugi/kofun/issues/280) | deferred | deferred outside the active delivery scope |
| [#314](https://github.com/hjosugi/kofun/issues/314) | blocked | blocked without a dependency represented by a scheduled chain |
| [#424](https://github.com/hjosugi/kofun/issues/424) | deferred | deferred outside the active delivery scope |
| [#536](https://github.com/hjosugi/kofun/issues/536) | deferred | deferred outside the active delivery scope |
| [#537](https://github.com/hjosugi/kofun/issues/537) | deferred | deferred outside the active delivery scope |
| [#538](https://github.com/hjosugi/kofun/issues/538) | deferred | deferred outside the active delivery scope |
| [#539](https://github.com/hjosugi/kofun/issues/539) | deferred | deferred outside the active delivery scope |
| [#540](https://github.com/hjosugi/kofun/issues/540) | deferred | deferred outside the active delivery scope |
| [#584](https://github.com/hjosugi/kofun/issues/584) | blocked | blocked without a dependency represented by a scheduled chain |
| [#585](https://github.com/hjosugi/kofun/issues/585) | blocked | blocked without a dependency represented by a scheduled chain |
| [#644](https://github.com/hjosugi/kofun/issues/644) | blocked | blocked without a dependency represented by a scheduled chain |
| [#645](https://github.com/hjosugi/kofun/issues/645) | blocked | blocked without a dependency represented by a scheduled chain |
| [#646](https://github.com/hjosugi/kofun/issues/646) | blocked | blocked without a dependency represented by a scheduled chain |
| [#647](https://github.com/hjosugi/kofun/issues/647) | blocked | blocked without a dependency represented by a scheduled chain |
| [#738](https://github.com/hjosugi/kofun/issues/738) | deferred | deferred outside the active delivery scope |
| [#741](https://github.com/hjosugi/kofun/issues/741) | deferred | deferred outside the active delivery scope |

## Assumptions

- No new issues enter the scheduled scope.
- Three writer lanes and one review/integration lane are continuously available on business days.
- Known dependency chains are serial and their blocked members remain conditional.
- S/M/L use 2/4/8 writer days; unknown size uses 5; refinement and decision states receive extra time.
- The calendar models weekdays only; public holidays, leave, incidents, and new intake are outside the lane simulation.
- The conservative date adds a 25% business-day buffer after the simulated review bottleneck.

Regenerate this document and
`site/plan-snapshot.json` with `node site/sync-plan.mjs`. Use
`node site/sync-plan.mjs --check` in CI to detect semantic drift without
rewriting files.

---
description: Entry point for ThirdLove’s HotWax Commerce implementation documentation.
---

# Introduction

This repo documents ThirdLove’s HotWax Commerce implementation.

## Business Model

ThirdLove operates an e-commerce business and is expanding its owned-and-operated retail footprint. During discovery, ThirdLove was transitioning retail operations from a third-party managed model to an in-house team.

## Retail Domain

ThirdLove is a specialty retailer with a limited store footprint today and plans to expand the number of stores over the next few years.

## Operations Scale

- Current stores: `2` (San Francisco / Fillmore and Walnut Creek / Broadway Plaza)
- Retail expansion: aggressive multi-year rollout plan (3-year horizon mentioned)

## Tech Stack

- **E-commerce platform:** Shopify
- **POS:** Shopify POS (stores use iPads)
- **ERP / system of record:** NetSuite
- **3PL:** fulfills transfer orders and updates NetSuite fulfillment data (store receiving depends on this)
- **Order sync:** Shopify orders already sync to NetSuite and fulfillments sync back (Phase 1 does not change this)

## Implementation Scope

Phase 1 focuses on store inventory management, with NetSuite remaining the system of record.

- In scope: transfer order receiving, cycle counts, inventory adjustments, and damaged inventory workflows.
- Out of scope (for now): ship-from-store, BOPIS/pickup experience changes, Shopify payout reconciliation.
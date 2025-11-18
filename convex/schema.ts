import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  productTable: defineTable({
    img: v.string(),
    label: v.optional(v.string()),
    name: v.string(),
    description: v.string(),
    category: v.string(),
    price: v.number(),
  }),
});

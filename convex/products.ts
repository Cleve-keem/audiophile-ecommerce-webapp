import { query } from "./_generated/server";
import { v } from "convex/values";

export const getAllProduct = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("productTable").collect();
  },
});

export const getProductById = query({
  args: { productId: v.id("productTable") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.productId);
  },
});

export const getProductByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    const products = await ctx.db
      .query("productTable")
      .filter((q) => q.eq(q.field("category"), args.category))
      .collect();

    return products;
  },
});

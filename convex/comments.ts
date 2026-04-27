import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("comments").collect();
  },
});

export const create = mutation({
  args: { text: v.string(), username: v.string() },
  handler: async (ctx, args) => {
    const newCommentId = await ctx.db.insert("comments", {
      text: args.text,
      username: args.username,
    });
    return newCommentId;
  },
});

import { v } from 'convex/values'
import { mutation, query } from './_generated/server'

export const generateUploadUrl = mutation(async (ctx) => {
  return await ctx.storage.generateUploadUrl()
})

export const sendImage = mutation({
  args: { storageId: v.id('_storage'), vehicleId: v.id('vehicles') },
  handler: async (ctx, args) => {
    await ctx.db.insert('images', {
      storageId: args.storageId,
      vehicleId: args.vehicleId,
    })
  },
})

export const list = query({
  args: {},
  handler: async (ctx) => {
    const images = await ctx.db.query('images').collect()
    return await Promise.all(
      images.map(async (image) => ({
        ...image,
        url: await ctx.storage.getUrl(image.storageId),
      })),
    )
  },
})

export const deleteById = mutation({
  args: {
    storageId: v.id('_storage'),
    imageId: v.id('images'),
  },
  handler: async (ctx, args) => {
    await Promise.all([
      ctx.storage.delete(args.storageId),
      ctx.db.delete(args.imageId),
    ])
  },
})

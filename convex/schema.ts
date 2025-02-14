import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  vehicles: defineTable({
    make: v.string(),
    model: v.string(),
    odometer: v.string(),
    year: v.number(),
    description: v.string(),
  }),
})

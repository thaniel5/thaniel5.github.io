import { authTables } from '@convex-dev/auth/server'
import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  ...authTables,
  vehicles: defineTable({
    make: v.string(),
    model: v.string(),
    odometer: v.string(),
    year: v.number(),
    description: v.string(),
  }),
  images: defineTable({
    storageId: v.id('_storage'),
    vehicleId: v.id('vehicles'),
  }),
})

import { integer, pgTable, text, timestamp, uniqueIndex, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  clerkId: text("clerk_id").notNull().unique(),
  name: text("name").notNull(),
  imageUrl: text("image-url").notNull(),
  createdAt: timestamp("created-at").notNull().defaultNow(),
  updatedAt: timestamp("updated-at").notNull().defaultNow(),
},(t)=>[uniqueIndex("clerk_id_idx").on(t.clerkId)]);


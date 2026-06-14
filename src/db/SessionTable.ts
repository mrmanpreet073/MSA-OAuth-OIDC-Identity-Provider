import {uuid, pgTable,varchar,text,boolean,timestamp,} from "drizzle-orm/pg-core";
import { usersTable } from "./UserTable.js";

export const sessionsTable = pgTable(
  "sessions",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    sessionId: text("session_id")
      .notNull()
      .unique(),

    userId: uuid("user_id")
      .notNull()
      .references(() => usersTable.id),

    expiresAt: timestamp("expires_at")
      .notNull(),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull()
  }
);
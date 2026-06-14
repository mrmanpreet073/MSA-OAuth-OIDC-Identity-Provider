import {pgTable,uuid,text,timestamp} from "drizzle-orm/pg-core";
import { oauthClientsTable } from "./ClientTable.js";
import { usersTable } from "./UserTable.js";

export const refreshTokensTable = pgTable("refresh_tokens",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .notNull()
      .references(() => usersTable.id),

    clientId: text("client_id")
      .notNull()
      .references(() => oauthClientsTable.clientId),

    tokenHash: text("token_hash")
      .notNull(),

    expiresAt: timestamp("expires_at")
      .notNull(),

    createdAt: timestamp("created_at")
      .defaultNow()
      .notNull()
  }
);
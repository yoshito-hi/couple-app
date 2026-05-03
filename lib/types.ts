import { Database } from "./database.types";

export type Event = Database["public"]["Tables"]["events"]["Row"];
export type Comic = Database["public"]["Tables"]["comics"]["Row"];

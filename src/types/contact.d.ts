/* ===== ENUMS ===== */

export enum ContactType {
  QUESTION = "QUESTION",
  FEEDBACK = "FEEDBACK",
  SUPPORT = "SUPPORT"
}

/* ===== MODELS ===== */

export interface Contact {
  id: string
  name?: string | null
  email?: string | null
  contactType: ContactType
  text?: string | null

  createdAt: Date
  updatedAt: Date
}
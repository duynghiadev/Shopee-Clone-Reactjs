import crypto from "crypto"

export const hashValue = (value: string) => {
   return crypto.createHash("sha256")
   .update(value)
   .digest("hex")
}

export const compareValue = (plainText: string, hash: string) => {
   return hashValue(plainText) === hash
}
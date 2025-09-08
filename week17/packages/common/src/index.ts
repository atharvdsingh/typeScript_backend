import z, { string } from "zod"


export const backed_url="https:api.endpoitn.com"
const url=z.object(string)

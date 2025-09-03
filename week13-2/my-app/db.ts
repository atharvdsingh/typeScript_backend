import { PrismaClient } from "@prisma/client";

const prismaClientInstance = () => {
  return new PrismaClient();
};

// Extend the global object so TypeScript knows prisma may exist
declare global {
  // This makes TypeScript happy about globalThis.prisma
  // and avoids multiple instantiations during dev
  // eslint-disable-next-line no-var
  var prisma: ReturnType<typeof prismaClientInstance> | undefined;
}

// Use existing prisma if available, otherwise create new
const prisma = globalThis.prisma ?? prismaClientInstance();

// Only set global prisma in dev (so hot reload doesn’t create multiple)
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;

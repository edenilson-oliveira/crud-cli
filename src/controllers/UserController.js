import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const UserGet = async (req,res) => {
  const user = await prisma.findMany
  res.send(user).status(200)
}

export const UserAdd = (req,res) => {
  const user = prisma.create(req.body)
}

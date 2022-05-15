import { prisma } from "../../../utils/db";

export default async function handler(req, res) {
  const { id } = req.query;
  console.log(req.query)
  const restaurant = await prisma.restaurant.findUnique({ where: { id: id } });
  prisma.$disconnect();
  return res.json({ restaurant: restaurant });
}

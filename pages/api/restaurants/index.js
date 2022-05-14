import { prisma } from "../../../utils/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const restaurants = await prisma.restaurant.findMany();
    prisma.$disconnect();
    res.status(200).json({ restaurants: restaurants });
  } else {
    return;
  }
}

import { prisma } from "../../../utils/db";

export default async function handler(req, res) {
  const { id } = req.query;
  const dishes = await prisma.dish.findMany({
    where: {
      restaurantId: id,
    },
  });
  return res.json({ dishes });
}

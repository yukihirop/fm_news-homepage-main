import { NextApiRequest, NextApiResponse } from "next";
import { Article } from "interfaces/article";

const articles: Article[] = [
  {
    index: 1,
    title: "Reviving Retro PCs",
    desc: "What happens when old PCs are given modern upgrades?",
    image: "./images/image-retro-pcs.jpg",
  },
  {
    index: 2,
    title: "Top 10 Laptops of 2022",
    desc: "Our best picks for various needs and budgets.",
    image: "./images/image-top-laptops.jpg",
  },
  {
    index: 3,
    title: "The Growth of Gaming",
    desc: "How the pandemic has sparked fresh opportunities",
    image: "./images/image-gaming-growth.jpg",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(articles);
}

import { NextApiRequest, NextApiResponse } from "next";
import { News } from "interfaces/news";

const news: News[] = [
  {
    title: "Hydrogen VS Electric Cars",
    desc: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    desc: "What are the possible adverse effects of on-demand All image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    desc: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json(news);
}

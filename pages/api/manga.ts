import https from "https";
import moment from "moment";
import logger from "@/static/logger";
import { v4 as uuidv4 } from "uuid";
import { Manga } from "@shineiichijo/marika";
import type { NextApiRequest, NextApiResponse } from "next";

function shorten(url: any) {
  https.get(
    "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url),
    (res) => {
      res.on("data", (chunk) => {
        return chunk.toString();
      });
    }
  );
}

export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      var manga = new Manga();
      var argument: any = req.query.q;
      var response = await manga.searchManga(argument);
      if (!response.data) {
        return res.status(500).json({
          id: uuidv4(),
          status: false,
          message: "Server error.",
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/manga?q=",
            example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
          },
        });
      }
      let Genres = "";
      let Authors = "";
      for (var i = 0; i < response.data[0].genres.length; i++) {
        Genres += `${response.data[0].genres[i].name}`;
      }
      for (var i = 0; i < response.data[0].authors.length; i++) {
        Authors += `NAME: ${response.data[0].authors[i].name} | TYPE: ${response.data[0].authors[0].type}`;
      }
      return res.status(200).json({
        response: {
          id: uuidv4(),
          status: true,
          timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        },
        meta: {
          topic: "MANGA: finder",
          query: argument,
          title: response.data[0].title,
          chapters: response.data[0].chapters,
          published_on: response.data[0].published.from,
          score: response.data[0].scored,
          popularity: response.data[0].popularity,
          favorites: response.data[0].favorites,
          url: response.data[0].url,
          genres: Genres || null,
          authors: Authors || null,
          background: response.data[0].background || null,
          image: response.data[0].images.jpg.large_image_url,
          description: response.data[0].synopsis,
        },
      });
    } else
      return res.status(500).json({
        id: uuidv4(),
        status: false,
        message: "Arguments not satisfied.",
        timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/manga?q=",
          example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
        },
      });
  } catch (error: any) {
    logger.error(error.message);
    return res.status(500).json({
      id: uuidv4(),
      status: false,
      timestamp: moment().format("DD-MM-YYYY hh:mm:ss"),
      message: error.message,
    });
  }
}

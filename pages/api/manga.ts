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
      if (!response) {
        res.send({
          status: "Failed with error code 911",
          message: "Parameters requirement not met.",
          date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/manga?q=",
            example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
          },
        });
      } else {
        let Genres = "";
        let Authors = "";
        for (var i = 0; i < response.data[0].genres.length; i++) {
          Genres += `${response.data[0].genres[i].name}`;
        }
        for (var i = 0; i < response.data[0].authors.length; i++) {
          Authors += `name=>${response.data[0].authors[i].name} | type=>${response.data[0].authors[0].type}`;
        }
        var _Found = [
          {
            status: true,
            uuid: uuidv4(),
            date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
            topic: "Manga Search",
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
            image: shorten(response.data[0].images.jpg.large_image_url),
            description: response.data[0].synopsis,
          },
        ];
        logger.info(_Found);
        return res.send(_Found);
      }
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _message: "Parameters requirement not met.",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          endpoint: "/api/manga?q=",
          example: "/api/manga?q=My Hero Academia by Kohei Horikoshi",
        },
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
}

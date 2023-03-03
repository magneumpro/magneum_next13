import https from "https";
import moment from "moment";
import logger from "@/static/logger";
import { v4 as uuidv4 } from "uuid";
const validUrl = require("valid-url");
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
      if (validUrl.isUri(req.query.q)) {
        var Found = [
          {
            status: true,
            uuid: uuidv4(),
            date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
            topic: "Shorten Url",
            query: req.query.q,
            url: await shorten(req.query.q),
          },
        ];
        logger.info(Found);
        return res.send(Found);
      } else {
        res.send({
          status: "Failed with error code 911",
          message: "Parameters requirement not met.",
          uuid: uuidv4(),
          date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
          usage: {
            endpoint: "/api/shorten?q=",
            example: "/api/shorten?q=https://google.com",
          },
        });
      }
    } else {
      return res.send({
        status: "Failed with error code 911",
        message: "Parameters requirement not met.",
        uuid: uuidv4(),
        date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        usage: {
          endpoint: "/api/shorten?q=",
          example: "/api/shorten?q=https://google.com",
        },
      });
    }
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

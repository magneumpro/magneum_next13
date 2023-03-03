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
var _Found = [
{
_status: "🎊success",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_topic: "Shorten Url",
_query: req.query.q,
_url: await shorten(req.query.q),
},
];
logger.info(_Found);
return res.send(_Found);
} else {
res.send({
_status: "Failed with error code 911",
_message: "Parameters requirement not met.",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_usage: {
_endpoint: "/api/shorten?q=",
_example: "/api/shorten?q=https://google.com",
},
});
}
} else {
return res.send({
_status: "Failed with error code 911",
_message: "Parameters requirement not met.",
_uuid: uuidv4(),
_date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
_usage: {
_endpoint: "/api/shorten?q=",
_example: "/api/shorten?q=https://google.com",
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

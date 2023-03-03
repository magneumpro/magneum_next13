import moment from "moment";
import logger from "@/static/logger";
import { v4 as uuidv4 } from "uuid";
import type { NextApiRequest, NextApiResponse } from "next";

// Local Storage For imports of all local.jsons
import ls_awoo from "@/db/sfw/awoo.json";
import ls_bite from "@/db/sfw/bite.json";
import ls_blush from "@/db/sfw/blush.json";
import ls_bonk from "@/db/sfw/bonk.json";
import ls_bully from "@/db/sfw/bully.json";
import ls_cringe from "@/db/sfw/cringe.json";
import ls_cry from "@/db/sfw/cry.json";
import ls_cuddle from "@/db/sfw/cuddle.json";
import ls_dance from "@/db/sfw/dance.json";
import ls_glomp from "@/db/sfw/glomp.json";
import ls_handhold from "@/db/sfw/handhold.json";
import ls_happy from "@/db/sfw/happy.json";
import ls_highfive from "@/db/sfw/highfive.json";
import ls_hug from "@/db/sfw/hug.json";
import ls_kick from "@/db/sfw/kick.json";
import ls_kill from "@/db/sfw/kill.json";
import ls_kiss from "@/db/sfw/kiss.json";
import ls_lick from "@/db/sfw/lick.json";
import ls_megumin from "@/db/sfw/megumin.json";
import ls_neko from "@/db/sfw/neko.json";
import ls_nom from "@/db/sfw/nom.json";
import ls_pat from "@/db/sfw/pat.json";
import ls_poke from "@/db/sfw/poke.json";
import ls_shinobu from "@/db/sfw/shinobu.json";
import ls_slap from "@/db/sfw/slap.json";
import ls_smile from "@/db/sfw/smile.json";
import ls_smug from "@/db/sfw/smug.json";
import ls_waifu from "@/db/sfw/waifu.json";
import ls_wave from "@/db/sfw/wave.json";
import ls_wink from "@/db/sfw/wink.json";
import ls_yeet from "@/db/sfw/yeet.json";

let Found: any;
export default async function test(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.query.q) {
      switch (req.query.q) {
        case "waifu":
          var __waifu = ls_waifu[Math.floor(Math.random() * ls_waifu.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: yeet",
              query: req.query.q,
              url: __waifu,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "neko":
          var __neko = ls_neko[Math.floor(Math.random() * ls_neko.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: neko",
              query: req.query.q,
              url: __neko,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "shinobu":
          var __shinobu =
            ls_shinobu[Math.floor(Math.random() * ls_shinobu.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: shinobu",
              query: req.query.q,
              url: __shinobu,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "megumin":
          var __megumin =
            ls_megumin[Math.floor(Math.random() * ls_megumin.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: megumin",
              query: req.query.q,
              url: __megumin,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "bully":
          var __bully = ls_bully[Math.floor(Math.random() * ls_bully.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: bully",
              query: req.query.q,
              url: __bully,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "cuddle":
          var __cuddle =
            ls_cuddle[Math.floor(Math.random() * ls_cuddle.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: cuddle",
              query: req.query.q,
              url: __cuddle,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "cry":
          var __cry = ls_cry[Math.floor(Math.random() * ls_cry.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: cry",
              query: req.query.q,
              url: __cry,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "hug":
          var __hug = ls_hug[Math.floor(Math.random() * ls_hug.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: hug",
              query: req.query.q,
              url: __hug,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "awoo":
          var __awoo = ls_awoo[Math.floor(Math.random() * ls_awoo.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: awoo",
              query: req.query.q,
              url: __awoo,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "kiss":
          var __kiss = ls_kiss[Math.floor(Math.random() * ls_kiss.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: kiss",
              query: req.query.q,
              url: __kiss,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "lick":
          var __lick = ls_lick[Math.floor(Math.random() * ls_lick.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: lick",
              query: req.query.q,
              url: __lick,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "pat":
          var __pat = ls_pat[Math.floor(Math.random() * ls_pat.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: yeet",
              query: req.query.q,
              url: __pat,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "smug":
          var __smug = ls_smug[Math.floor(Math.random() * ls_smug.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: smug",
              query: req.query.q,
              url: __smug,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "bonk":
          var __bonk = ls_bonk[Math.floor(Math.random() * ls_bonk.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: bonk",
              query: req.query.q,
              url: __bonk,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "yeet":
          var __yeet = ls_yeet[Math.floor(Math.random() * ls_yeet.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: yeet",
              query: req.query.q,
              url: __yeet,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "blush":
          var __blush = ls_blush[Math.floor(Math.random() * ls_blush.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: blush",
              query: req.query.q,
              url: __blush,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "smile":
          var __smile = ls_smile[Math.floor(Math.random() * ls_smile.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: smile",
              query: req.query.q,
              url: __smile,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "wave":
          var __wave = ls_wave[Math.floor(Math.random() * ls_wave.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: wave",
              query: req.query.q,
              url: __wave,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "highfive":
          var __highfive =
            ls_highfive[Math.floor(Math.random() * ls_highfive.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: highfive",
              query: req.query.q,
              url: __highfive,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "handhold":
          var __handhold =
            ls_handhold[Math.floor(Math.random() * ls_handhold.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: handhold",
              query: req.query.q,
              url: __handhold,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "nom":
          var __nom = ls_nom[Math.floor(Math.random() * ls_nom.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: nom",
              query: req.query.q,
              url: __nom,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "bite":
          var __bite = ls_bite[Math.floor(Math.random() * ls_bite.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: bite",
              query: req.query.q,
              url: __bite,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "glomp":
          var __glomp = ls_glomp[Math.floor(Math.random() * ls_glomp.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: glomp",
              query: req.query.q,
              url: __glomp,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "slap":
          var __slap = ls_slap[Math.floor(Math.random() * ls_slap.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: slap",
              query: req.query.q,
              url: __slap,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "kill":
          var __kill = ls_kill[Math.floor(Math.random() * ls_kill.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: kill",
              query: req.query.q,
              url: __kill,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "kick":
          var __kick = ls_kick[Math.floor(Math.random() * ls_kick.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: kick",
              query: req.query.q,
              url: __kick,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "happy":
          var __happy = ls_happy[Math.floor(Math.random() * ls_happy.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: happy",
              query: req.query.q,
              url: __happy,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "wink":
          var __wink = ls_wink[Math.floor(Math.random() * ls_wink.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: wink",
              query: req.query.q,
              url: __wink,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "poke":
          var __poke = ls_poke[Math.floor(Math.random() * ls_poke.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: poke",
              query: req.query.q,
              url: __poke,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "dance":
          var __dance = ls_dance[Math.floor(Math.random() * ls_dance.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: dance",
              query: req.query.q,
              url: __dance,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        case "cringe":
          var __cringe =
            ls_cringe[Math.floor(Math.random() * ls_cringe.length)];
          Found = [
            {
              status: true,
              uuid: uuidv4(),
              date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
              topic: "[ SFW IMAGES ]: cringe",
              query: req.query.q,
              url: __cringe,
            },
          ];
          logger.info(Found);
          res.send(Found);
          break;
        default:
          res.send({
            status: "Failed with error code 911",
            message: "Parameters requirement not met.",
            date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
            usage: {
              endpoint: "/api/sfw?q=",
              example: "/api/sfw?q=waifu",
              querry: [
                "waifu",
                "neko",
                "shinobu",
                "megumin",
                "bully",
                "cuddle",
                "cry",
                "hug",
                "awoo",
                "kiss",
                "lick",
                "pat",
                "smug",
                "bonk",
                "yeet",
                "blush",
                "smile",
                "wave",
                "highfive",
                "handhold",
                "nom",
                "bite",
                "glomp",
                "slap",
                "kill",
                "kick",
                "happy",
                "wink",
                "poke",
                "dance",
                "cringe",
              ],
            },
          });
          break;
      }
    } else {
      return res.send({
        _status: "Failed with error code 911",
        _message: "Parameters requirement not met.",
        _date_create: moment().format("DD-MM-YYYY hh:mm:ss"),
        _usage: {
          endpoint: "/api/sfw?q=",
          example: "/api/sfw?q=waifu",
          querry: [
            "waifu",
            "neko",
            "shinobu",
            "megumin",
            "bully",
            "cuddle",
            "cry",
            "hug",
            "awoo",
            "kiss",
            "lick",
            "pat",
            "smug",
            "bonk",
            "yeet",
            "blush",
            "smile",
            "wave",
            "highfive",
            "handhold",
            "nom",
            "bite",
            "glomp",
            "slap",
            "kill",
            "kick",
            "happy",
            "wink",
            "poke",
            "dance",
            "cringe",
          ],
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

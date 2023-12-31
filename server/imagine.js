require("dotenv").config();
const { Midjourney } = require("../libs");
/**
 *
 * a simple example of how to use the imagine command
 * ```
 * node example/imagine.js
 * ```
 */
export default  async function getImagineUrl(keyword) {
  const client = new Midjourney({
    ServerId: process.env.SERVER_ID,
    ChannelId: process.env.CHANNEL_ID,
    SalaiToken: process.env.SALAI_TOKEN,
    Debug: true,
    SessionId: process.env.SALAI_TOKEN || "8bb7f5b79c7a49f7d0824ab4b8773a81",
  });
  const msg = await client.Imagine(keyword, (uri) => {
    console.log("loading", uri);
  });

  return msg
  // console.log({ msg });
}
// main().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });

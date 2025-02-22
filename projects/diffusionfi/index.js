const { calculateUsdUniTvl } = require("../helper/getUsdUniTvl");

module.exports = {
  misrepresentedTokens: true,
  methodology:
    "Factory address (0x6abdda34fb225be4610a2d153845e09429523cd2) is used to find the LP pairs. TVL is equal to the liquidity on the AMM.",
  evmos: {
    tvl: calculateUsdUniTvl(
      "0x6abdda34fb225be4610a2d153845e09429523cd2",
      "evmos",
      "0xD4949664cD82660AaE99bEdc034a0deA8A0bd517",
      [
        "0x63743ACF2c7cfee65A5E356A4C4A005b586fC7AA", // dai
        "0x5842C5532b61aCF3227679a8b1BD0242a41752f2", //weth
        "0x51e44FfaD5C2B122C8b635671FCC8139dc636E82", //usdc
        "0x7FF4a56B32ee13D7D4D405887E0eA37d61Ed919e", //usdt
        "0xD4949664cD82660AaE99bEdc034a0deA8A0bd517", //wevmos
      ],
      "evmos"
    ),
  },
}; // node test.js projects/diffusionfi/index.js
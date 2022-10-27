import _ from "lodash";
import { setupRoutes } from "./api";
import { getTestServer } from "../test-utils";
import { getTestBrand } from "../test-utils/brand";

describe("api", () => {
  describe("distribute-tokens", () => {
    it("should distribute tokens", async () => {
      const server = getTestServer();
      setupRoutes(server.app);
      const brand = getTestBrand();

      const numberOfTokens = 100;
      const brandID = brand.id;
      const tokensDistributed = distributeTokens(numberOfTokens, brandID);
      expect(tokensDistributed).toEqual(100);
    });
  });
});

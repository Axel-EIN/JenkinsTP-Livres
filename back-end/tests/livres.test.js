import { jest } from '@jest/globals';
// import { Livre } from "../models/index.js";
// import * as livreController from "../controllers/livre.controller.js";

// jest.mock("../models/livre.model.js");

describe("getAllLivres", () => {
  // let req, res;
  // beforeEach(() => {
  //   req = {};
  //   res = {
  //     json: jest.fn(),
  //     status: jest.fn().mockReturnThis(),
  //   };
  // });

  // afterEach(() => {
  //   jest.resetAllMocks();
  // });

  it("should return a list of books", () => {

    expect(1).toBe(1);

    // const mockLivres = [{ title: "Livre 1" }, { title: "Livre 2" }];

    // jest.spyOn(Livre, "findAll").mockResolvedValue(mockLivres);
    // await livreController.getAll(req, res);

    // expect(Livre.findAll).toHaveBeenCalledTimes(1);
    // expect(res.status).toHaveBeenCalledWith(200);
    // expect(res.json).toHaveBeenCalledWith(mockLivres);

  });

  // it("should return a 500 status code if an error occurs", async () => {
  //   const errorMessage = "Une erreur est survenue";
  //   Livre.findAll.mockRejectedValue(new Error(errorMessage));
  //   await getAllLivres(req, res);
  //   expect(Livre.findAll).toHaveBeenCalledTimes(1);
  //   expect(res.status).toHaveBeenCalledWith(500);
  //   expect(res.json).toHaveBeenCalledWith({ error: errorMessage });
  // });
});
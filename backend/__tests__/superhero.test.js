import {
  createSuperhero,
  listSuperheroes,
  Superhero,
} from "../models/superhero";
import db from "../mongoose";

describe("Testing superhero model", () => {
  let backupSuperheroes;
  beforeAll(async () => {
    // grab all superheroes, store in a variable for later
    backupSuperheroes = await listSuperheroes();

    // delete all superheroes
    await Superhero.deleteMany();
  });

  afterAll(async () => {
    console.log("when does this happen");
    await Superhero.deleteMany();

    for (let superhero of backupSuperheroes) {
      await createSuperhero({
        name: superhero.name,
        alterEgo: superhero.alterEgo,
        superpower: superhero.superpower,
        placeOfBirth: superhero.placeOfBirth,
        weakness: superhero.weakness,
      });
    }
    console.log("backup", backupSuperheroes);
    db.connection.close();
  });
  describe("create Superhero", () => {
    it("should return a object with an _id", async () => {
      // setup
      console.log("create");
      const newSuperhero = {
        name: "Spongebob",
        superpower: "Fun",
        weakness: "Immaturity",
        alterEgo: "Sponge",
        placeOfBirth: "Bikini Bottom",
      };
      const createdSuperhero = await createSuperhero(newSuperhero);

      // test
      console.log("create done");
      expect(createdSuperhero).toHaveProperty("_id");
    });
  });
});

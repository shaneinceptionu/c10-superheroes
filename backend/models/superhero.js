import db from "../mongoose.js";

const superheroSchema = db.Schema({
  alterEgo: String,
  superpower: String,
  name: { type: String, required: true, unique: true },
  weakness: String,
  placeOfBirth: String,
});

export const Superhero = db.model("superhero", superheroSchema, "superheroes");

export const createSuperhero = async (newSuperhero) => {
  try {
    const createdSuperhero = await Superhero.create(newSuperhero);
    return createdSuperhero;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Duplicate Error");
    } else {
      throw error;
    }
  }
};

export const listSuperheroes = async () => {
  const allSuperheroes = await Superhero.find();
  return allSuperheroes;
};

export const updateSuperhero = async (id, newSuperheroData) => {
  const response = await Superhero.findByIdAndUpdate(id, newSuperheroData, {
    new: true,
  });
  return response;
};

export const deleteSuperhero = async (id) => {
  const response = await Superhero.findByIdAndDelete(id);
  return response;
};

export const findAllSuperheroesBySuperpower = async (superpower) => {
  const superheroes = await Superhero.find({ superpower });
  return superheroes;
};

export const findOneSuperheroByName = async (name) => {
  const superhero = await Superhero.findOne({ name });
  return superhero;
};

export const findSuperheroById = async (id) => {
  const superhero = await Superhero.findById(id);
  return superhero;
};

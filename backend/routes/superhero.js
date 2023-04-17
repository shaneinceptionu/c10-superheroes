import express from "express";
import {
  createSuperhero,
  deleteSuperhero,
  findAllSuperheroesBySuperpower,
  findOneSuperheroByName,
  findSuperheroById,
  listSuperheroes,
  updateSuperhero,
} from "../models/superhero.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const newSuperhero = req.body;
  try {
    const createdSuperhero = await createSuperhero(newSuperhero);
    res.send(createdSuperhero);
  } catch (error) {
    res.status(403).send({ message: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const allSuperheroes = await listSuperheroes();
    res.send(allSuperheroes);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const superhero = await findSuperheroById(id);
    res.send(superhero);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;
  const newSuperhero = req.body;
  try {
    const updatedSuperhero = await updateSuperhero(id, newSuperhero);
    res.send(updatedSuperhero);
  } catch (error) {
    res.status(403).send(error);
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const deletedSuperhero = await deleteSuperhero(id);
    res.send(deletedSuperhero);
  } catch (error) {
    res.status(403).send(error);
  }
});

router.get("/superpower/:superpower", async (req, res) => {
  const superpower = req.params.superpower;
  try {
    const superheroes = await findAllSuperheroesBySuperpower(superpower);
    res.send(superheroes);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/name/:name", async (req, res) => {
  const name = req.params.name;
  try {
    const superhero = await findOneSuperheroByName(name);
    res.send(superhero);
  } catch (error) {
    res.status(404).send(error);
  }
});

export default router;

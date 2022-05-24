import { Router } from "express";
import { sample_packages, sample_tags } from "../data";

const router = Router();

router.get("/", (req, res) => {
  res.send(sample_packages);
});

router.get("/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const packages = sample_packages.filter((pack) =>
    pack.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(packages);
});

router.get("/tags", (req, res) => {
  res.send(sample_tags);
});

router.get("/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  const packages = sample_packages.filter((pack) =>
    pack.tags?.includes(tagName)
  );
  res.send(packages);
});

router.get("/:packId", (req, res) => {
  const packId = req.params.packId;
  const pack = sample_packages.find((pack) => pack.id == packId);
  res.send(pack);
});

export default router;

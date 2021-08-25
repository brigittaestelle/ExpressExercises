import express from "express";
import shops from "../src/models/shops";
const routes = express.Router();
// API
routes.get("/api/shops", (req, res) => {
  const minRating = Number(req.query.minRating);

  if (minRating) {
    res.json(shops);
  } else {
    res.json(shops.filter((shop) => shop.rating >= minRating));
  }
  //the above is number 3 but we had to add it here
  // filter is a way shorter way to do a loop
  res.json(shops);
});

routes.get("/api/shops/:id", (req, res) => {
  const id = Number(req.params.id);
  const foundShop = shops.find((shop) => shop.id === id); //pulling out the id they gave us
  if (foundShop) {
    res.json(foundShop);
  } else {
    res.json({ error: `Shops not found: ${req.params.id}` });
    // why does this have brackets?
  }
});

// Web App
routes.get("/", (req, res) => {
  res.render("home");
});
routes.get("/shop-list", (req, res) => {
  const minRating = Number(req.query.minRating);
  let filteredShops = shops;

  if (minRating) {
    filteredShops = shops.filter((shops) => shops.rating >= minRating);
  }

  res.render("shop-list", { filteredShops });
});

routes.get("/shop-details/:id", (req, res) => {
  const id = Number(req.params.id);
  // in case there is no match
  const searchedID = req.params.id;
  const shop = shops.find((shop) => shop.id === id);
  res.render("shop-details", { shop, id, searchedID });
});

routes.get("/shop-search-form", (req, res) => {
  res.render("shop-search-form");
});
export default routes;

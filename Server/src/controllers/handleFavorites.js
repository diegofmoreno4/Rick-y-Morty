let myFavorites = [];

const postFav = (req, res) => {
  myFavorites.push(req.body);
  res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  myFavorites = myFavorites.filter((fav) => {
    return Number(req.params.id) !== fav.id;
  });
  res.json(myFavorites);
};

module.exports = { postFav, deleteFav };

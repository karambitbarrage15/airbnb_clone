// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");
const { getFavouriteList } = require("../controllers/storeController");
const { error } = require("console");
const favouriteDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Favourite {
  
  static addToFavourite(id,callback){Favourite.getFavourites((favourites) => {
    if(favourites.includes(homeId)){
      callback("HOMe is alreday marked favourite");
console.log();
    }else{
        favourites.push(this);
         fs.writeFile(favouriteDataPath,JSON.stringify(favourites),callback);
    }
        });
      };
  
  static getFavourites(callback)
  {
    fs.readFile(favouriteDataPath,(error,data)=>{callback(!err?JSON.parse(data):[])})
  }

};
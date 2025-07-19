const Favourite = require("../models/favourite");
const Home = require("../models/home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/index", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index",
    })
  );
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("store/home-list", {
      registeredHomes: registeredHomes,
      pageTitle: "Homes List",
      currentPage: "Home",
    })
  );
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "My Bookings",
    currentPage: "bookings",
  })
};

exports.getFavouriteList = (req, res, next) => {
  Favourite.getFavourites((favourite)=>{
 Home.fetchAll((registeredHomes) =>
  {const favouriteswithDetails=favourite.map(homeId=>registeredHomes.fing(home=>home.id===homeId));
    res.render("store/favourite-list", {
      registeredHomes: registeredHomes,
      pageTitle: "My Favourites",
      currentPage: "favourites",
    })});
  })
 
 
};
exports.postAddToFavourite=(req,res,next)=>{
  console.log("Came to add to Favourite",req.body);
  res.redirect('/favourite')
}
exports.getHomeDetails = (req, res, next) => {
 
  const homeId=req.params.homeId;
  console.log(homeId);
  Home.findById(homeId,home=>{
    if(!home){console.log("HOmenot found");
    
       res.redirect("/homes");}
       else{ res.render("store/home-details", {
        home:home,
      registeredHomes: registeredHomes,
      pageTitle: "Home deatail",
      currentPage: "home-details",
    }
  )
}
   
  })

};
exports.postAddToFavourite(req.body.id,error=>{
if(error){
  console.log("Error while marking favourite",error);
}
res.redirect("/favourites");
  
})


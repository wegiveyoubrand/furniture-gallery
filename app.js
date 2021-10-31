const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;

// Listen to PORT
app.listen(PORT, () => {
  console.log(`Connected to http://localhost:${PORT}`);
});

// Static files
app.use(express.static("assets"));

// Templating Engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  const furnitures = [
    {
      name: "Sofas",
      description:
        "a brief entitled description of the newly made furniture 1 for all and sundry",
      image: "/images/pexels-photo-1866149.jpeg",
    },
    {
      name: "Dining Tables",
      description:
        "a brief entitled description of the newly made furniture 2 for all and sundry",
      image: "/images/855882.jpg",
    },
    {
      name: "Dining Chairs",
      description:
        "a brief entitled description of the newly made furniture 3 for all and sundry",
      image: "/images/351124.jpg",
    },
    {
      name: "Mattresses",
      description:
        "a brief entitled description of the newly made furniture 4 for all and sundry",
      image: "/images/M77397.jpg",
    },
    {
      name: "Bookcases",
      description:
        "a brief entitled description of the newly made furniture 5 for all and sundry",
      image: "/images/A18950s.jpg",
    },
    {
      name: "Shelves",
      description:
        "a brief entitled description of the newly made furniture 6 for all and sundry",
      image: "/images/851741.jpg",
    },
    {
      name: "Stools",
      description:
        "a brief entitled description of the newly made furniture 7 for all and sundry",
      image: "/images/M17021s.jpg",
    },
    {
      name: "Wardrobes",
      description:
        "a brief entitled description of the newly made furniture 7 for all and sundry",
      image: "/images/358761s.jpg",
    },
    {
      name: "Cabinets",
      description:
        "a brief entitled description of the newly made furniture 8 for all and sundry",
      image: "/images/392337.jpg",
    },
    {
      name: "TV Units",
      description:
        "a brief entitled description of the newly made furniture 8 for all and sundry",
      image: "/images/264124.jpg",
    },
  ];
  res.render("index", { furnitures: furnitures });
});

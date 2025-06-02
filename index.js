import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

// Landing page
app.get("/",(req,res)=>{
    res.render("index.ejs");
})

//Random cocktail
app.post("/random",async(req,res)=>{
    try {
        const response= await axios.post("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = response.data;
        const arrIngredients = [];
        for (let i = 1; i <= 15; i++) {
            if (data.drinks[0][`strIngredient${i}`] === null) {
                break;
            }else{
                arrIngredients.push(data.drinks[0][`strIngredient${i}`]);
            }
        }
        console.log(data.drinks[0].strDrink);
        console.log(arrIngredients);
        console.log(data.drinks[0].strInstructions);

        res.render("index.ejs", { 
            name: data.drinks[0].strDrink,
            image: data.drinks[0].strDrinkThumb,
            arrIngredients: arrIngredients,
            instructions: data.drinks[0].strInstructions, 
            error:null });
        } catch (error) {
                console.error(error);
                res.render("index.ejs", {
                    name: null,
                    image: null,
                    instructions: null,
                    arrIngredients: null,
                    error: "Errore nel recupero del cocktail."
                });
        }
});

// Route per la ricerca di un cocktail
app.post("/search", async (req, res) => {
    try {
        const searchItem = req.body.searchInput;
        console.log(searchItem);
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItem}`);
        const data = response.data;

        // verify if the drink exists
        if (data.drinks && data.drinks.length > 0) {
            const arrIngredients = [];
            for (let i = 1; i <= 15; i++) {
                if (data.drinks[0][`strIngredient${i}`] === null) {
                    break;
                } else {
                    arrIngredients.push(data.drinks[0][`strIngredient${i}`]);
                }
            }

            console.log(data.drinks[0].strDrink);
            console.log(arrIngredients);
            console.log(data.drinks[0].strInstructions);

            res.render("index.ejs", {
                name: data.drinks[0].strDrink,
                image: data.drinks[0].strDrinkThumb,
                arrIngredients: arrIngredients,
                instructions: data.drinks[0].strInstructions,
                error: null
            });
        } else {
            // If no drink send an error message
            res.render("index.ejs", {
                name: null,
                image: null,
                instructions: null,
                arrIngredients: null,
                error: "Nessun cocktail trovato con questo nome."
            });
        }
    } catch (error) {
        console.error(error);
        res.render("index.ejs", {
            name: null,
            image: null,
            instructions: null,
            arrIngredients: null,
            error: "Errore nel recupero del cocktail."
        });
    }
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
}
);
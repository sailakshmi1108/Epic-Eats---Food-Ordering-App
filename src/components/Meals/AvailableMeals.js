
import classes from "./AvailableMeals.module.css"
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
      id: "m1",
      name: "Chicken Bagara Biriyani",
      description: "Cashew based masala",
      price: 22.99,
    },
    {
      id: "m2",
      name: "Fried chicken",
      description: "Marinated fried chicken",
      price: 16.5,
    },
    {
      id: "m3",
      name: "Veg Biriyani",
      description: "Layers of aromatic rice",
      price: 12.99,
    },
    {
      id: "m4",
      name: "Hyderabad Paneer Biriyani",
      description: "Paneer cooked in a rich masala",
      price: 18.99,
    },
  ];

const AvailableMeals = () =>{
  const mealsList = DUMMY_MEALS.map ((meal)=>(
  <MealItem
    id={meal.id}
    key ={meal.id}
    name={meal.name}
    description={meal.description}
    price={meal.price}
  />))
   return(
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
   )
};
export default AvailableMeals;
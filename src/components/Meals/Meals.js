import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import Spinner from '../Spinner/Spinner';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useState([]);
    console.log(cart);
    const mealsData = meals.meals;
    useEffect(() => {
        setLoading(true)
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => {
                setMeals(data);
                setLoading(false);
            })
    }, []);

    const handleAddToCart = (meal) => {
        const newCart = [...cart,meal ]
        setCart(newCart);
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>Your Favourite Foods</h1>
            <div className='grid grid-cols-[4fr_1fr] mx-10'>
                <div className='grid grid-cols-3 grow gap-4'>
                    {loading ? <Spinner /> : mealsData && mealsData.map(meal => <Meal handleAddToCart={handleAddToCart} key={meal.idMeal} meal={meal} />)}
                </div>
                <div>
                    <Cart cart={ cart} />
                </div>
            </div>
        </div>
    );
};

export default Meals;
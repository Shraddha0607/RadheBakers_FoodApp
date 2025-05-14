import Product from './Product';
import useHttp from './hooks/useHttp';
import Error from './Error';

const requestConfig = {};

function Meals() {

    const { data: loadedMeals,
        isLoding,
        error
    } = useHttp('http://localhost:3000/meals', requestConfig , []);

    if (isLoding) {
        return <p className='center'> Fetching meals...</p>
    }

    if(error) {
        return <Error title="Failed to fetch meals" message={error} />
    }

    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
                <Product key={meal.id} meal={meal} />
            ))}
        </ul>
    );
}

export default Meals

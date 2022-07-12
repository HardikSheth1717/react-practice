import AvailableMeal from './available-meal';
import MealSummary from './meal-summary';

const Meals = props => {
    return (
        <>
            <MealSummary />
            <AvailableMeal />
        </>
    );
};

export default Meals;
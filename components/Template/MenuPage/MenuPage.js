import Card from '../../Module/Card/Card';
import styles from './MenuPages.module.css';


const MenuPage = ({data}) => {
    const newFood = data.map((food) =>(
        <Card key={food.id} {...food}/>
    ))
    return (
        <div className={styles.container}>
            <h2>Menu</h2>
            <div className={styles.subContainer}>
                {newFood}
            </div>
        </div>
    );
};

export default MenuPage;


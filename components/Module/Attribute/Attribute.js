import Choice from '../../icons/Choice';
import Clock from '../../icons/Clock';
import Fast from '../../icons/Fast';
import Food from '../../icons/Food';
import styles from './Attribute.module.css';


const Attribute = () => {
    return (
        <div className={styles.container}>
            <h3>why us ?</h3>
            <div className={styles.subContainer}>
                <div>
                    <Fast />
                    <p>Fast</p>
                </div>
                <div>
                    <Food />
                    <p>Fast</p>
                </div>
                <div>
                    <Choice />
                    <p>Your Choice</p>
                </div>
                <div>
                    <Clock />
                    <p>24 - 7</p>
                </div>
            </div>
        </div>
    );
};

export default Attribute;
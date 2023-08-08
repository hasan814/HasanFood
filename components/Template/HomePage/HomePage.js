import Attribute from '../../Module/Attribute/Attribute';
import Banner from '../../Module/Banner/Banner';
import Companies from '../../Module/Companies/Companies';
import Deffinition from '../../Module/Deffinition/Deffinition';
import Guid from '../../Module/Guide/Guid';
import Instruction from '../../Module/Instruction/Instruction';
import Restriction from '../../Module/Restriction/Restriction';
import styles from './HomePage.module.css';



const HomePage = () => {
    return (
        <div className={styles.container}>
            <Banner />
            <Attribute />
            <Deffinition />
            <Companies />
            <Instruction />
            <Guid />
            <Restriction />
        </div>
    );
};



export default HomePage;
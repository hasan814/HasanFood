import styles from './Instruction.module.css';


const Instruction = () => {
    return (
        <div className={styles.container}>
            <h3>how to order ? </h3>
            <ul>
                <li>sign in (or create an account) and set your delivery address .</li>
                <li>choose the restaurant you want to order from.</li>
                <li>to place your order, select (view cart) or (checkout)</li>
                <li>review your order and tap (place order) ...</li>
                <li>track your order progresss .</li>
            </ul>
        </div>
    );
};


export default Instruction;
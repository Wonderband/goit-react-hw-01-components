import PropTypes from "prop-types";
import styles from './StatItem.module.css';
const StatItem = ({ type, percent }) => (
    <li className={styles.item}>
        <span className={styles.label}>{type}</span>
        <span className={styles.percentage}>{percent}%</span>        
    </li>            
);
export default StatItem;

// I'm not shure that we should double check these properties, 'cos we have checked them in Statistics component
StatItem.propTypes = {
    type: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,    
};
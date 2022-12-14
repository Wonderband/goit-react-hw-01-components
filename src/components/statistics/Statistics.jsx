import PropTypes from "prop-types";
import styles from './Statistics.module.css';
import StatItem from '../statitem/StatItem';

const Statistics = ({ title, stats }) => (
    <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <ul className={styles.statList}>
            {stats.map(item =>
                <StatItem
                key={item.id}                
                type={item.label}
                percent={item.percentage}               
                />
            )}            
        </ul>
    </section>
);
export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
                percentage: PropTypes.number.isRequired,
            }
        )    
    ).isRequired,    
};
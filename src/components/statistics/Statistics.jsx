import PropTypes from "prop-types";
import StatItem from '../statitem/Statitem';

const Statistics = ({ title, stats }) => (
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
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
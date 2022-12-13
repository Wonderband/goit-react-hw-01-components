import PropTypes from "prop-types";
const StatItem = ({type, percent}) => (    
    <li className="item">
        <span className="label">{type}</span>
        <span className="percentage">{percent}</span>        
    </li>            
);
export default StatItem;

// I'm not shure that we should double check these properties, 'cos we have checked them in Statistics component
StatItem.propTypes = {
    type: PropTypes.string.isRequired,
    percent: PropTypes.number.isRequired,    
};
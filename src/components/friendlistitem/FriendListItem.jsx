import PropTypes from "prop-types";
const FriendListItem = ({avatar, name, isOnline}) => (    
    <li className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>         
);
export default FriendListItem;

// I'm not shure that we should double check these properties, 'cos we have checked them in FriendList component
FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired, 
    isOnline: PropTypes.bool.isRequired,
};

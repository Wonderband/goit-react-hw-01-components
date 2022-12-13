import PropTypes from "prop-types";
import FriendListItem from "components/friendlistitem/FriendListItem";

const FriendList = ({friends}) =>     
     <ul className="friend-list">
        {friends.map(friend =>
            <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
            />)
        }; 
    </ul>

export default FriendList;

FriendList.propTypes = {    
    friends: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number.isRequired,
                avatar: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                isOnline: PropTypes.bool.isRequired,
            }
    )    
    ).isRequired   
};
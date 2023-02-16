import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return(`
        <ul>
            <li class="list-group-item p-1 ps-2">
                <b>Who to follow</b>
            </li>
             ${
                who.map(who => {
                    return(WhoToFollowListItem(who));
                }).join('')
            }
        </ul>
   `);
}

export default WhoToFollowList;
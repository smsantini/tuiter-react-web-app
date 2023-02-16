const WhoToFollowListItem = (who) => {
    return(`
    <li class="list-group-item">
        <div class="d-print-grid">
            <div class="wd-col-1">
                <img class="wd-logo rounded-circle" src=${who.avatarIcon}/>
            </div>
            <div class="wd-col-3">
                <button class="btn btn-primary rounded-pill fa-pull-right flex-nowrap">
                    Follow
                </button>
            </div>
            <div class="wd-col-2">
                <div class="ps-1">
                    <div class="wd-font">
                        <b>${who.userName}</b> <i class="fa fa-check-circle"></i>
                    </div>
                    <div class="wd-font text-secondary wd-font wd-font-size-15">@${who.handle}</div>
                </div>
            </div>  
        </div>
    </li>
    `);
}

export default WhoToFollowListItem;
const NavigationSidebar = () => {
    return(`
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fab fa-twitter"></i></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-home"></i>
            <span class="d-none d-xl-inline">
                Home</span></a>
        <a href="#" class="list-group-item list-group-item-action active">
            <i class="fa fa-hashtag"></i>
            <span class="d-none d-xl-inline">
                Explore</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-bell"></i>
            <span class="d-none d-xl-inline">
                Notifications</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-envelope"></i>
            <span class="d-none d-xl-inline">
                Messages</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-bookmark"></i>
            <span class="d-none d-xl-inline">
                Bookmarks</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-list-ul"></i>
            <span class="d-none d-xl-inline">
                Lists</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-user"></i>
            <span class="d-none d-xl-inline">
                Profile</span></a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-ellipsis-h"></i>
            <span class="d-none d-xl-inline">
                More</span></a>
    </div>
<!--            tweet button-->
            <div class="d-grid pt-2">
                <button class="btn btn-primary rounded-pill">
                    Tuit</button>
            </div>
 `);
}
export default NavigationSidebar;
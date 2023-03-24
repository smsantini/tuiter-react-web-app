import PostSummaryList from "./PostSummaryList";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="col-11">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-white wd-search-bar-left">
                            <i class="fa fa-search p-2 text-secondary"></i>
                        </span>
                    </div>
                    <input type="text" class="form-control wd-font wd-search-bar-right" placeholder="Search Tuiter">
                </div>
            </div>
            <div class="col-1">
                <a href="#">
                    <i class="fa fa-cog fa-2x"></i>
                </a>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="#">For You</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Sports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link d-none d-md-grid" href="#">Entertainment</a>
            </li>
        </ul>
        <div class="row card border-0 bg-transparent pt-2">
            <img src="../../images/starship.webp"/>
            <div class="text-light card-img-overlay p-0 ps-4 d-flex flex-column justify-content-end">
                <h2><b>SpaceX's Starship</b></h2>
            </div>
        </div>
        <div>
            ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;

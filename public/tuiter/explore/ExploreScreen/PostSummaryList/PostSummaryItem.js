const PostSummaryItem = (post) => {
    return (`
        <div class="p-3">
            <div class="row">
                <div class="col">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    <div class="wd-font">
                        <b>${post.userName}</b> <i class="fa fa-check-circle"></i>
                        <span class="text-secondary">
                            - ${post.time}
                        </span>
                    </div>
                    <div>
                        <b>${post.title}</b>
                    </div>
                </div>
                <div class="col-3">
                    <img class="wd-article-image" src=${post.image}/>
                </div>
            </div>
        </div>
    `);
}

export default PostSummaryItem;
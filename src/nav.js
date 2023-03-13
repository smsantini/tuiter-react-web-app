import {Link} from "react-router-dom";

function Nav() {
    return (
        <div>
            <Link to="/">Labs</Link> |
            <Link to="/hello">Hello</Link> |
            <Link to="/tuiter">Tuiter</Link> |
            <Link to="/exam1">Exam</Link> |
            <Link to="/test">Test</Link>
        </div>
    )
}

export default Nav;
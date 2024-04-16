import "../../css/play_animation.scss";

const Play_animation = () => {
    return (
        <div className="playing">
            <div className="now playing" id="music">
                <span className="bar n1">A</span>
                <span className="bar n2">B</span>
                <span className="bar n3">c</span>
            </div>
        </div>
    );
}

export default Play_animation;
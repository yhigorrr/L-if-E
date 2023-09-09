import { Component, createRef } from "react";
import p5 from "p5";

export default class Pathfinder extends Component {
    constructor(props) {
        super(props);
        this.myRef = createRef();
    }

    sketch(p) {
        p.setup = () => {
            p.createCanvas(window.innerWidth, window.innerHeight);
        };

        p.draw = () => {
            p.background(255, 130, 20);
            p.ellipse(100, 100, 100);
            p.ellipse(300, 100, 100);
        };

        p.windowResized = () => {
            p.resizeCanvas(window.innerWidth, window.innerHeight);
        };
    }

    componentDidMount() {
        this.myP5 = new p5(this.sketch, this.myRef.current);
    }

    componentDidUpdate() {}

    componentWillUnmount() {
        this.myP5.remove();
    }

    render() {
        return <div ref={this.myRef}></div>;
    }
}

import { Component } from "react";
import Sketch from "react-p5";

export default class DummyReactP5 extends Component {
    setup = (p5, canvasParentRef) => {
        p5.createCanvas(500, 400).parent(canvasParentRef);
    };

    draw = (p5) => {
        p5.background(255, 130, 20);
        p5.ellipse(100, 100, 100);
        p5.ellipse(300, 100, 100);
    };

    render() {
        return <Sketch setup={this.setup} draw={this.draw} />;
    }
}

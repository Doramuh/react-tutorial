import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import logo from "../resources/logo.gif";
import "./ParallaxComp.css";

const ParallaxComp = () => {
  return (
    <>
      <Parallax pages={3}>
        <ParallaxLayer
          sticky={{
            start: 0,
            end: 3,
          }}
        >
          <h2
            style={{
              fontSize: 100,
            }}
          >
            HELLO
          </h2>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.5}
          speed={0.00001}
          sticky={{ start: 1.0, end: 1.6 }}
          factor={6}
        >
          <div className="leopardRunning">
            <img src={logo}></img>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.6}>
          <h2
            style={{
              translate: 300,
            }}
          >
            WORLD
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <h2
            style={{
              translate: 300,
            }}
          >
            MEOW
          </h2>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default ParallaxComp;

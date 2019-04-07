import React from "react";
import { Transition, animated } from "react-spring";

interface HeaderFaderProps {
  items: string[];
  time: number;
}

class HeaderFader extends React.Component<HeaderFaderProps> {
  state = { textItems: [`Hello`], index: 0, timer: true };

  faderInterval: any = null;

  setFaderInterval = () => {
    this.faderInterval = setInterval(() => {
      if (!this.state.timer) return;
      let i = this.state.index;
      i++;
      i = i % this.state.textItems.length;
      this.setState({ index: i });
    }, this.props.time || 2000);
  };

  componentDidMount() {
    this.setState({ textItems: this.props.items, timer: true });
    this.setFaderInterval();
  }

  componentWillMount() {
    this.setState({ timer: false });
    clearInterval(this.faderInterval);
  }

  render() {
    return (
      <div style={{ perspective: `400px` }}>
        {this.state.textItems.map((text, i) => {
          return (
            <Transition
              items={this.state.index}
              key={i}
              keys={item => item}
              // trail={-1000}
              // config={{duration: this.props.duration}}
              from={{
                opacity: 0,
                transform: `translateY(-100%) rotateX(60deg)`
              }}
              enter={{
                opacity: 1,
                transform: `translateY(0%) rotateX(0deg)`
              }}
              leave={{
                opacity: 0,
                transform: `translateY(100%) rotateX(-60deg)`
              }}
            >
              {index => props =>
                index === i && (
                  <animated.div
                    style={{
                      ...props,
                      position: `absolute`,
                      width: `100%`
                    }}
                    key={index}
                  >
                    {text}
                  </animated.div>
                )}
            </Transition>
          );
        })}
      </div>
    );
  }
}

export default HeaderFader;

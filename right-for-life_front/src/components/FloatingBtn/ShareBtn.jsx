import React from "react";
import { FloatingBtn } from "./FloatingBtn.jsx";
import PropTypes from "prop-types";
import CSSTransition from 'react-addons-css-transition-group';

export class ShareBtn extends React.Component {
  state = {
    closed: true
  };

  render() {
    const {position, shareUrl} = this.props;
    return (<div>
      <FloatingBtn
        icon="fa-share-alt"
        position={position}
        onClick={this.handleClick.bind(this)}
      />

      <CSSTransition
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {this.state.closed ? null :
          <div style={{transform: 'translate(-100px, 0)'}}>
            <FloatingBtn
              icon="fa-share-alt"
              position={position}
              onClick={() => null}
            />
          </div>
        }
      </CSSTransition>

      <CSSTransition
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        {this.state.closed ? null :
          <div style={{transform: 'translate(-200px, 0)'}}>
            <FloatingBtn
              icon="fa-share-alt"
              position={position}
              onClick={() => null}
            />
          </div>
        }
      </CSSTransition>

    </div>)
  }

  handleClick() {
    this.setState({closed: !this.state.closed})
  }
}

ShareBtn.propTypes = {
  shareUrl: PropTypes.string,
};

ShareBtn.defaultProps = {
  shareUrl: window.location.href,
};

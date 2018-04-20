import React, {Component} from 'react';
import './footer.css';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');

class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">
          <a target="_blank" href="https://github.com/champunes">
            Github
          </a>
           /
          <a target="_blank" href="https://twitter.com/champunes">
            Twitter
          </a>
           /
          <a target="_blank" href="https://www.linkedin.com/in/jos%C3%A9-%C3%A1ngel-gonz%C3%A1lez-molina-34b29b60/">
            LinkedIn
          </a>
        </div>
        <FlatButton labelStyle={{
          "color": "rgba(0, 0, 0, 0.65)"
        }} label="Volver al inicio" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;

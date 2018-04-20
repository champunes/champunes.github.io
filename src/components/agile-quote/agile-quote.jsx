import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              La ciencia es una ecuación diferencial. La religión es una condición de frontera
              </span>
              <span className="quote-author">- Alan Turing</span>
            </p>
            <br />
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
              La imaginación es la facultad del descubrimiento, preeminentemente. Es lo que penetra en los mundos nunca vistos a nuestro alrededor, los mundos de la ciencia.
              </span>
              <span className="quote-author">- Ada Lovace</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;

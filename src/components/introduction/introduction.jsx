import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Programando Web desde 2016. Explorador en los mundos de Javascript. Lector ocasional de otras cosas que no son manuales. Desarrollador Senior residiendo en Madrid.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;

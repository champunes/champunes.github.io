import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Echa un vistazo a mi código, hay cosas extrañas</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="github.com/champunes"
                    avatar="github.png"
                  />
                <CardText>
                        Este es mi perfil en GitHub. No está todo lo que hay, pero si hay de todo un poco.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/champunes" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;

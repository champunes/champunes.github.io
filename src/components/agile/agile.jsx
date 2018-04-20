import React, {Component} from 'react';
import './agile.css';


class AgileComponent extends Component {

    render() {
        return (
          <div className="agile">
              <p className="headline">Desarrollo ágil</p>
              <p className="text-justify">
                En el último año, mi empresa ha implementado estrategias de desarrollo
                ágiles, aunque debido al tan reducido tamaño de la plantilla, los cambios
                han sido muy tímidos aún.

                He leido bibliografía sobre SCRUM y me encantaría poder formarme en esa
                estrategia de organización porque muchos compañeros de profesión me han
                hablado de las ventajas competitivas que supone.
                <br /> <br />
                Actualmente ya tengo experiencia utilizando herramientas como Slack o Trello,
                para organizar las tareas de desarrolo. Sin embargo, me encantaría aprender
                a utilizar herramientas kanban avanzadas y a realizar sprints de trabajo.
              </p>
          </div>
        );
    }
}

export default AgileComponent;

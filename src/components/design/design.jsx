import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import './design.css';


class DesignComponent extends Component {

    render() {
        return (
          <div className="design">
            <p className="headline">Experiencia de usuario y programación</p>
            <p className="text-justify">
              Desde que en la adolescencia un familiar me introdujo al mundo de la programación (Basic, C, LUA) he sabido
              que iba a terminar dedicándome al mundo del desarrollo.

              Mis primeros desarrollos serios fueron plugins escritos en LUA para un conocido videojuego multijugador,
              el cual permitía desarrollar herramientas externas para el mismo. Todo ello ocurría al tiempo que estudiaba
              en la universidad.
              
              Después de unos años trabajando en entornos Windows y sobre .NET (aunque realizando interfaces de usuario web),
              y diseñando aplicaciones para el departamento de ventas que corrian en cajeros con dispensadores de monedas,
              mi empresa se unió a la ola del desarrollo web y fué cuando descubrí Node y se abrió un nuevo mundo para mí.

              Desde entonces he intentado mantenerme al día de los avances que se van realizando en tecnologías que parece ya
              cotidianas como Express o React (si es que es posible mantenerse al día con una tecnología que avanza casi a diario).

              En los últimos tiempos he entrado en otro mundo (quizás paralelo, o no). Concretamente he descubierto el desarrollo
              de aplicaciones para dispositivos móviles (en mi caso, iPads) utilizando un entorno de desarrollo para aplicaciones
              híbridas: Apache Cordova

            </p>

              <div className="design-checkbox">
                <Checkbox
                  checkedIcon={<ActionFavorite />}
                  uncheckedIcon={<ActionFavoriteBorder />}
                  iconStyle={{"fill":"#A80202"}}
                  label="Ventas"
                />
              </div>
              <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Desarrollo Web"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="UI Frameworks"
              />
            </div>
            <div className="design-checkbox">
              <Checkbox
                checkedIcon={<ActionFavorite />}
                uncheckedIcon={<ActionFavoriteBorder />}
                iconStyle={{"fill":"#A80202"}}
                label="Desarrollo Contínuo"
              />
          </div>
          <div className="design-checkbox">
            <Checkbox
              checkedIcon={<ActionFavorite />}
              uncheckedIcon={<ActionFavoriteBorder />}
              iconStyle={{"fill":"#A80202"}}
              label="Aplicaciones Web Progresivas"
            />
        </div>

          </div>
        );
    }
}

export default DesignComponent;

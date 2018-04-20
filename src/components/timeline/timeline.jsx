import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded1: false,
          expanded2: false,
          expanded3: false,
          expanded4: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };

    handleExpandChange4 = (expanded4) => {
      this.setState({expanded4: expanded4});
    };

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded3: true});
    };

    handleExpand3 = () => {
      this.setState({expanded4: true});
    };

    handleReduce = () => {
      this.setState({expanded1: false});
    };

    handleReduce = () => {
      this.setState({expanded2: false});
    };

    handleReduce2 = () => {
      this.setState({expanded3: false});
    };

    handleReduce3 = () => {
      this.setState({expanded4: false});
    };
    render() {
        return (
            <div className="timeline">
              <p className="headline">Experiencia Laboral</p>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange}>
                      <CardHeader title="Senior Software Developer" subtitle="ionIDe Telematics S.L."
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Febrero	2016 - . Desarrollo de Aplicaciones Web, Ventas.
                          / Aplicación React para iOS utilizando Cordova
                          / Aplicación React|ExpressJS para Chrome dockerizada y corriendo en Windows 10 para cajeros
                         <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>React</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Docker</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Jenkins</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Stylus, PostCSS</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Express</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Semantic-UI, Onsen-UI</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Slack, Trello</Chip>
                              </div>
                            </div>
                      </CardText>
                  </Card>
                </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                        <CardHeader title="Junior Software Developer" subtitle="ionIDe Telematics S.L."
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            Febrero	2014 - Enero 2016. Desarrollo de Aplicaciones .NET, Ventas.
                            / Aplicación VB.NET para monitorizar hardware de un cajero (dispensador de
                            monedas, lector de tarjetas RFID, impresora de tickets). Interfaz de usuario
                            usando PHP|Jquery
                            / Aplicación Jquery|ExpressJS para un dispositivo Debian. Gestión multimedia
                            para pacientes e inclusión de aplicaciones clínicas
                            / Aplicación C++ para manejar hardware de sonido y conectar con una Aplicación
                            java que reconoce la voz del usuario. Proyecto de adaptabilidad para pacientes
                            con disfunción motriz.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>jQuery</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Apache/PHP</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Visual Studio</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>CSS</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>VB.NET</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>C/DLL</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Hardware Drivers</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Estudiante" subtitle="Universidad de Jaén"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Septiembre 2006 - Febrero 2010. Ingeniería Técnica en Informática de Gestión.
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>C/C++</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Oracle</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Unix/Linux</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Java</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Redes Neuronales</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Matlab</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Comienzos prometedores</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded4} onExpandChange={this.handleExpandChange4}>
                      <CardHeader title="Aprendiz" subtitle="Tevisur SA"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          Septiembre 2007	-	Marzo	2008. Reparación de equipos informáticos.
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">
                              <Chip>Windows</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Harware</Chip>
                            </div>
                            <div className="timeline-entry-chip">
                              <Chip>Mantenimiento</Chip>
                            </div>
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;

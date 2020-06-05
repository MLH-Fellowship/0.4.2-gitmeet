import React, {Component} from "react";
import "./Landing.css";
import { Col, Row, Button, Display, Image, Spacer, Text, Card } from '@zeit-ui/react';
import { Github } from '@zeit-ui/react-icons';
import { Link } from 'react-router-dom';

export default class Landing extends Component {   
  
  render(){
  
    const { onNavigate } = this.props;
    
    return (
      <div className="landing">
        <Row>
          <Col align="middle" className="landingCTA">
            <Image.Browser invert>
              <Image width="540" height="246" src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png" />
            </Image.Browser>
            <Text h3>
                Let's meet up over code.
            </Text>
            <Spacer y={3}/>
            <Image.Browser invert>
              <Image width="540" height="246" src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png" />
            </Image.Browser>
            <Spacer y={1}/>
            <Text h3>
                Find devs in your local area!
            </Text>
            <Spacer y={3}/>
            <Image.Browser invert>
              <Image width="540" height="246" src="https://user-images.githubusercontent.com/11304944/76085431-fd036480-5fec-11ea-8412-9e581425344a.png" />
            </Image.Browser>
            <Spacer y={1}/>
            <Text h3>
                Make connections not errors? I suck at captions
            </Text>
          </Col>

          
          <Col align="middle">
          <Spacer y={1}/>
          <Card shadow>
            <Row span={6} justify="center">
              <Text h1 size="6vw">Git</Text><Text h1 size="6vw" type="success">Meet!</Text>
            </Row>
            <Text h3>
              Let's meet up over code.
            </Text>
            <Display>
              <Image src={require("../../assets/landinglogingraphic.png")} />
            </Display>
            <Text h5 type="secondary">
              We match local developers create connections through code.
            </Text>
            <Spacer y={1.5}/>
            <Link
              to='/meet'>
              <a href="https://gitmeet.herokuapp.com/auth/github">
                <Button type="secondary" size="medium" ghost
                onClick={onNavigate}>Login with GitHub<Spacer x={0.5}/> <Github size={42} /></Button>
              </a>
            </Link>
            <Spacer y={1.5}/>
          </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
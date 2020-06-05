import React, { Component } from "react";
import { Spacer, Button, ButtonGroup, Col } from '@zeit-ui/react';
import { X, Check } from '@zeit-ui/react-icons';
import * as swal from "sweetalert";

export default class meetButton extends Component {

    render() {

        return (
            <Col align="middle">
                <ButtonGroup className="meetButton" type="abort" size="large">
                    <Button><X color="red" size={48} /></Button>
                    <Spacer x={3} inline />
                    <Button><Check color="Blue" size={48} />
                    <a onClick={swal('Yay!', 'Matched you with the repo', 'success')}
                    >
                    </a></Button>
                </ButtonGroup>
            </Col>
        )
    }
}

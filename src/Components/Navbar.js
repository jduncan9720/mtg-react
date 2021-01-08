import React, {Component} from 'react'
import { Button } from 'reactstrap'

class Navbar extends Component {
    render() {
        return (
            <div>
            <h1> This will be the Navbar</h1>
            <Button outline color="primary">primary</Button>
            </div>
        )
    }
}

export default Navbar
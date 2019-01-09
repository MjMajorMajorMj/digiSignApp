import React, { Component } from 'react';
import base from '../base';
import SoloPanel from './solo/SoloPanel';

class SoloAct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "",
            activity: {}
        }
    }
    componentDidMount() {
        const { location, activity } = this.props.match.params;
        const locationNoSpace = location.replace(/\s/g,'');
        const rebaseStr = ""+locationNoSpace+"/activites/"+activity;
        base.fetch(rebaseStr, {
            context: this
        }).then(data=> {
            this.setState({
                location: location,
                activity: data
            })
        }).catch(err => {
            console.log(err);
            this.setState({
                activity: {}
            })
        });
    }
    render() {
        const { location, activity } = this.state;
        if (Object.getOwnPropertyNames(activity).length > 0) {
            return(
                <div>
                    <SoloPanel location={location} activity={activity}/>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>No Activity...</h1>
                </div>
            )
        }
    }
}

export default SoloAct;
import React, { Component } from 'react';
import base from '../../base';

class Add extends Component {
    constructor(props) {
        super(props);
        this.nameRef = React.createRef();
        this.descRef = React.createRef();
        this.imgRef = React.createRef();
        this.vidRef = React.createRef();
        this.teamNameRef = React.createRef();
        this.placeRef = React.createRef();
        this.timeRef = React.createRef();
        this.state = {
            location: "Irvine",
            activites: null
        }
        this.addActivity = this.addActivity.bind(this);
    }
    componentDidMount() {
        const { activites } = this.props;
        this.setState({
            activites: activites
        });
    }
    componentDidUpdate(prevProps) {
        const { location, activites } = this.props;
        if (location !== prevProps.location) {
            this.setState({
                location: location,
                activites: activites
            })
        }
    };
    addActivity(e) {
        e.preventDefault();
        const { location, activites } = this.state;
        const locationNoSpace = location.replace(/\s/g,'');
        const activityNames = Object.keys(activites);
        const activityLength = activityNames.length;
        const lastActivityName = activityNames[activityLength-1];
        const highestActivityNum = parseInt(lastActivityName.slice(-1))+1;
        const newActivityName = "activity" + highestActivityNum;
        console.log(newActivityName);
        const addedActivity = {
            name: this.nameRef.current.value,
            video: this.vidRef.current.value,
            image: this.imgRef.current.value,
            desc: this.descRef.current.value,
            leaderboard: {
                team1: {
                    name: this.teamNameRef.current.value,
                    place: this.placeRef.current.value,
                    time: this.timeRef.current.value
                }
            }
        };
        base.post(`${locationNoSpace}/activites/${newActivityName}`, {
            data: addedActivity
        }).then(()=> {
            this.props.rebaseConfirm("addSuccess");
        }).catch(err=> {
            this.props.rebaseConfirm("fail");
        })
    }
    render() {
        return (
            <div>
                <div className="actionHeader">
                    <h1>Add</h1>
                </div>
                <div className="addForm">
                    <form onSubmit={this.addActivity}>
                        <input name="name" required ref={this.nameRef} type="text" placeholder="Name" />
                        <input name="desc" required ref={this.descRef} type="text" placeholder="Description" />
                        <input name="img" required ref={this.imgRef} type="text" placeholder="Image URL" />
                        <input name="vid" required ref={this.vidRef} type="text" placeholder="YouTube URL" />
                        <input name="teamName" required ref={this.teamNameRef} type="text" placeholder="Team Name" />
                        <input name="place" required ref={this.placeRef} type="text" placeholder="Place" />
                        <input name="time" required ref={this.timeRef} type="text" placeholder="Time" />
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        )
    }
}

export default Add;
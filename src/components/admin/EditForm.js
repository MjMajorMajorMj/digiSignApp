import React, { Component } from 'react';
import base from '../../base';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            video: '',
            image: '',
            desc: '',
            teamName: '',
            place: '',
            time: ''
        };
        this.editActivity = this.editActivity.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    componentDidMount() {
        const { activity } = this.props;
        this.setState({
            name: activity.name,
            video: activity.video,
            image: activity.image,
            desc: activity.desc,
            teamName: activity.leaderboard.team1.name,
            place: activity.leaderboard.team1.place,
            time: activity.leaderboard.team1.time
        })
    };
    componentDidUpdate(prevProps) {
        const { activity } = this.props;
        if (activity !== prevProps.activity) {
            this.setState({
                name: activity.name,
                video: activity.video,
                image: activity.image,
                desc: activity.desc,
                teamName: activity.leaderboard.team1.name,
                place: activity.leaderboard.team1.place,
                time: activity.leaderboard.team1.time
            })
        }
    };
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    editActivity(e) {
        e.preventDefault();
        const { actNum, location } = this.props;
        const actNumAdded = parseInt(actNum)+1;
        const locationNoSpace = location.replace(/\s/g,'');
        const activityWithNum = "activity"+actNumAdded;
        console.log(activityWithNum, locationNoSpace);
        const editedActivity = {
            name: this.state.name,
            video: this.state.video,
            image: this.state.image,
            desc: this.state.desc,
            leaderboard: {
                team1: {
                    name: this.state.teamName,
                    place: this.state.place,
                    time: this.state.time
                }
            }
        };
        base.update(`${locationNoSpace}/activites/${activityWithNum}`, {
            data: editedActivity
        }).then(()=> {
            console.log("Activity Edited");
        }).catch(err=> {
            console.log(err);
        })
    }
    render() {
        const { name, video, image, desc, teamName, place, time } = this.state;
        if (name) {
            return (
                <div>
                    <h1>{name}</h1>
                    <div className="addForm">
                        <form onSubmit={this.editActivity}>
                            <input name="name" required type="text" onChange={this.handleChange} value={name} />
                            <input name="desc" required type="text" onChange={this.handleChange} value={desc} />
                            <input name="img" required type="text" onChange={this.handleChange} value={image} />
                            <input name="vid" required type="text" onChange={this.handleChange} value={video} />
                            <input name="teamName" required type="text" onChange={this.handleChange} value={teamName} />
                            <input name="place" required type="text" onChange={this.handleChange} value={place} />
                            <input name="time" required type="text" onChange={this.handleChange} value={time} />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Select an activity</h1>
                </div>
            )
        }

    }
}

export default EditForm;
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './dashboard.css';

import Header from './header';
import ViewFriends from './view-friends';
import { viewFriend, viewGroup } from '../actions/users.js';
import { fetchProtectedData } from '../actions/protected-data';
import requiresLogin from './requires-login';
import { groupInfo } from '../actions/users';

export class Dashboard extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
        this.props.dispatch(viewFriend());
        this.props.dispatch(viewGroup());
        this.props.dispatch(groupInfo());

    }


    voted(group) {
        const found = group.votes.find(votes => {
            return votes.memberId === this.props.userId;
        })
        if (found) {
            return 'voted';
        } else {
            return 'needs-to-vote';
        }
    }

    render() {


        return (
            <main role="main">
                <Header />
                <section className="row">
                    <div className="column left">
                        <header className="dashboard-header">
                            <h3>Hello {this.props.fullName}</h3>
                        </header>
                        <div className="dashboard-instructions">
                            <p>Instructions: Find friends by selecting the
                                <span>
                                    <button className="decorative-button">Add Friends</button>
                                </span> button.Then select the 
                                <span>
                                    <button className="decorative-button">Create Group</button>
                                </span> button to create a group with specific friends.
                                Once a group is created it will appear on this Dashboard,
                                where you can select the group and initiate the voting process.
                                You can delete friends by selecting a name from your friends' list.
                            </p>
                        </div>
                    </div>
                    <div className="column middle">
                        <div className="top-row">
                            <h5>Groups</h5>
                        </div>
                        <div className="find-create-buttons top-row">
                            <Link className="create-group" to="/create-groups-page" friends={this.props.friends}>Create Group</Link>
                        </div>
                        <div>
                            {this.props.groupData ?
                                this.props.groupData.map((group, index) =>
                                    <Link key={index} to={'/group-page/' + group._id}>
                                        <p className={'group-box ' + this.voted(group)} key={index}>{group.groupName}</p>
                                    </Link>) : ''
                            }
                        </div>
                    </div>
                    <div className="column right">
                        <div className="top-row">
                            <h5>Friends</h5>
                        </div>
                        <div className="find-create-buttons top-row">
                            <Link friends={this.props.friends} className="find-friends" to="/find-friends-page" >Add Friends</Link>
                        </div>
                        <div>
                            <ViewFriends friends={this.props.friends} />
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

const mapStateToProps = state => {
    const { currentUser } = state.auth;
    return {
        fullName: `${currentUser.firstName} ${currentUser.lastName}`,
        protectedData: state.protectedData.data,
        friends: state.friendsReducer.friends,
        username: state.auth.currentUser.username,
        groups: state.auth.currentUser.groups,
        groupData: state.friendsReducer.groupData,
        userId: state.auth.currentUser._id
    };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
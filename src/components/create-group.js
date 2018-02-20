import React from 'react';
import { addFriend, addFriendToGroup, createGroup, deleteFriendFromGroup } from '../actions';
import { connect } from 'react-redux';

import './create-group.css';

class CreateGroup extends React.Component {
    constructor(props) {
        super(props);
        this.props.dispatch(createGroup());
    }

    addFriendToGroup(userId, groupId) {
        this.props.dispatch(addFriendToGroup(userId, groupId));
    }

    createGroup() {
        this.props.dispatch(createGroup(this.groupName.value));
    }

    deleteFriendFromGroup(userId, groupId) {
        this.props.dispatch(deleteFriendFromGroup(userId, groupId));
    }

    render() {
        let members = [];
        let group;
        if (this.props.group) {
            group = this.props.group.find(g => g.groupId === this.props.groupId);
            if (group) {
                for (let i = 0; i < group.members.length; i++) {
                    let member = group.members[i];
                    members.push(
                        <div>
                            <li>{member.name.firstName}</li>
                            <input onClick={() => this.deleteFriendFromGroup(member.id, this.props.groupId)} type="button" />
                        </div>);
                }
            }
        }
        return (
            <div className="friend-section">
                <ul className="friend-list">
                    {this.props.friends.map((friend, index) =>
                        <div className="friend-container">
                            <li className="friend" key={index}>{friend.name.firstName}</li>
                            <input
                                onClick={() => this.addFriendToGroup(friend, 10)}
                                className="add-friend"
                                type="image"
                                id="add-to-group-button"
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAQ0SURBVGhD7ZpLqFVVGMdvapZSKFr4QiM1SiMHiTTSHAkJig4sbaJCFCSkiQ4LEitBo0gUDcpJGJkDIy0lQtGc+QAhfIAJvqLMDIUSM/X3W7Dgsu+5Z59z9lrnyuX+4TdYe+/zrf3t9frWt05Hn3qxxsES+AwOwGW4DnfhNvwFp2AXfACzYDDcFxoGb8NR8IWb5R/4Cl6CB6DtegzWww2IL3UFdsAymAmj4WGIGgLPwDxYCz+DLRV/fwJehrY4ZCWvw1Ww8jtgV5kDD0Kz0tmV8CtEh+yWkyCbbIXdECv8Fp6DFBoAi+ESaPtf8IMl12Q4D1byG9gCOfQIbARb2ro+B51MomkQu9JPMBJyy3F0DazzOxgIlWTX+QM06OxS2WATmgJO4da9E/pDS3JMxO70JfSDdmsixA/5kRealbPTHtDAfmhnSxT1ArjeOG7meqEZOWPohAN7hBdalB9gPDjNVtEb4PvYOsO90Igehz/BH1adnRxj2jkUStUUp/4todSAXLH9getEVaV0xJZ1fTEaeMoL9WTsZNhhf0yx2KV0RH0K2nN9qasVkKo1VGpHxsJ/YMsM9UJ3OgZWnGrlTu2IcoHUZrchzBPgAw70VgLAWsrhyCLQ5vehVENuinzg61BKoxyOOP3+D27aan7wrWCl7idSKYcjyr2Ldp8PpYIOgjdfDKU0yuXIdtCu3ayLLoI3x4RSGuVyZA1o951QKigmCgaFUvcy7JjaIK+ANo93ulaGgWKZ3gLtbgilgrzhICqT2RKfzYWhSJmWgs9uDqWCXGi8WSY3Vkca5BfQptFCrfu1+ATKFIPITaFUUNyRme1IpVxjZBVo98NQKugkeNP9eSrlcsRW0+7yUCrI+MqbTW9e6iiXI3HTNzuUCnofvGnyLJVyOOLuNW5/nXi6yFysNw+HUhrlcCTaPBtKNWRC2b2xG5dRXkigHI64CGqz7k7RlI8POSukUGpH7FZnQJt1Qymz4j5kLjZFhi+1Iw5u7Z2Duslub8bI0rC+qlI74vjV3puhVKIF4MMGkY96oYJSOvIqaOsClMWDQbaKqX1/ZEK5ip6EH+HjUGpdZj1j+nShFxrVs+AGv6XsXmL5YeMCuM8LzSoGZn+DXaSnZDzle9giLWc9t4FG7JdPe6HN8jTL+l3fKu1cTeXHGMywwLOSdsjutA6s1wU6Sfd+CL4BjWY7EusksyQxz2t98yGZbBm3lfFIzIomQGo5xcbZyZOA6ZBFHol5DG1F9ltzsTUj0CZlRBEXO9kL2Y/4THSbA4tn5LfA6dH53fm+ETkGnAkNAE9DdMBTXRMWbZWp/S/gJsQXMXlhiGPw+R6Y7XgNHFerwZ3dD/A7xN+IsZOJwc5/MGi73OP7orZK539ClOF+wpadAT1xPllXRsymMc0AvgseGvmyZjucTj22cDx4PNCnXqyOjnsRq2eI0lNNzwAAAABJRU5ErkJggg==" />
                        </div>)}
                </ul>
                <div>
                    {members}
                    <input type="text" ref={(input) => this.groupName = input} />
                    <input onClick={() => this.createGroup()} type="button" value="Create Group" />
                </div>
                {console.log(this.props.friends)}
            </div>
        );

    }
}

const mapStateToProps = state => {

    return {
        groupId: state.friendsReducer.groupId,
        friends: state.friendsReducer.friends,
        group: state.friendsReducer.group,
        groupName: state.friendsReducer.groupName
    };
};

export default connect(mapStateToProps)(CreateGroup);
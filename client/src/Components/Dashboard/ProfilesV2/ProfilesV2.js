import React, {Component} from 'react';
import Aux from '../../../hoc/Aux/Aux';
import SideDrawer from '../SideDrawer/SideDrawer';
import './ProfilesV2.css';


class ProfilesV2 extends Component {
    render() {
        return (
            <Aux>
                <SideDrawer/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ProfileBanner">
                                <h1 className="ProfilesTitle">Discover New</h1>
                                <h1 className="ProfilesTitle2">Profiles</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="ProfileStuff">
                            </div>
                        </div>
                    </div>
                </div>
            </Aux>
        )
    }
}

export default ProfilesV2;
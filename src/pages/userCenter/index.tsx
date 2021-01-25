import React from 'react';
import './index.less'
import PersonalCenter from './personalCenter'
import ProfileSide from './centerSide'


function Profile() {
    return <div className='page userCenter-page'>
        <div className="contentBox flex">
            {ProfileSide()}
            <div className='contentBox-body'>
                {PersonalCenter()}
            </div>
        </div>
    </div>
}

export default Profile;
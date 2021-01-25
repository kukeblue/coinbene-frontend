import React from 'react';
import './index.less'
import img_user_setting from '../../assets/images/img-user-setting.png';
import icon_assets_management from '../../assets/images/icon-assets-management.png'
import icon_entrust from '../../assets/images/icon-entrust.png'


//@type React Component | @dec 用户中心侧边拦
export default function ProfileSide() {
    return <div className='contentBox-side m-r-10'>
        <div className='side-userSetting m-b-10'>
            <div className='side-title flex-row-center'>
                <img className='side-title-icon' src={img_user_setting}></img>
                <span>个人设置</span>
            </div>
            <div className='side-menu_active flex-row-center'>个人中心</div>
            <div className='side-menu flex-row-center'>法币设置</div>
            <div className='side-menu flex-row-center'>实名认证</div>
        </div>
        <div>
            <div className='side-title flex-row-center'>
                <img className='side-title-icon' src={icon_assets_management}></img>
                <span>资产管理</span>
            </div>
            <div className='side-menu flex-row-center'>我的资产</div>
            <div className='side-menu flex-row-center'>冲币</div>
            <div className='side-menu flex-row-center'>提币</div>
            <div className='side-menu flex-row-center'>账单明细</div>
            <div className='side-menu flex-row-center'>资金划转</div>
            <div className='side-menu flex-row-center'>提现地址管理</div>
        </div>
        <div>
            <div className='side-title flex-row-center'>
                <img className='side-title-icon' src={icon_entrust}></img>
                <span>委托</span>
            </div>
            <div className='side-menu flex-row-center'>币币委托</div>
            <div className='side-menu flex-row-center'>杠杆委托</div>
            <div className='side-menu flex-row-center'>BCT合约委托</div>
            <div className='side-menu flex-row-center'>USDT合约委托</div>
        </div>
    </div>
}
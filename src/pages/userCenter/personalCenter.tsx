/***********************************
 **     component-个人中心        ***
 *********************************/
import React from 'react';
import './index.less'
import icon_email from '../../assets/images/icon-email.png'
import icon_phone from '../../assets/images/icon-phone.png'
import icon_password from '../../assets/images/icon-password.png'


export default function PersonalCenter() {
    return <div>
        <div className='contentBox-body-title'>
            个人中心
            </div>
            <div className='contentBox-form-item flex'>
                <div className='icon'><img src={icon_email}/></div>
                <div className='contentBox-form-item_content flex'>
                    <div className='lable'>邮箱</div>
                    <div className='form-content'>821826173@qq.com</div>
                    <span className='has-mail flex-center'>已认证</span>
                </div>
            </div>
            <div className='contentBox-form-item flex'>
                <div className='icon'><img src={icon_phone}/></div>
                <div className='contentBox-form-item_content flex-between'>
                    <div className='flex '>
                        <div className='lable'>移动设备</div>
                        <div className='form-content color-999'>手机号未绑定</div>
                    </div>
                    <div className='handle-link primary-color m-r-20'>绑定</div>
                </div>
            </div>
            <div className='contentBox-form-item flex'>
                <div className='icon'><img src={icon_password}/></div>
                <div className='contentBox-form-item_content flex-between'>
                    <div className='flex '>
                        <div className='lable'>登录密码</div>
                        <div className='form-content'>已设置</div>
                    </div>
                    <div className='handle-link primary-color m-r-20'>更改</div>
                </div>
            </div>
            <div className='contentBox-form-item flex'>
                <div className='icon'><img src={icon_password}/></div>
                <div className='contentBox-form-item_content flex-between'>
                    <div className='flex '>
                        <div className='lable'>资金密码</div>
                        <div className='form-content color-999'>未设置</div>
                    </div>
                    <div className='handle-link primary-color m-r-20'>更改</div>
            </div>
        </div>
    </div>
}
import React, { useCallback, useEffect, useState } from 'react';
import { IRouteComponentProps } from 'umi'
import './index.less'
import { Layout, Dropdown, Menu, ConfigProvider } from 'antd'
import { ChDropdown } from 'ch-ui'
const { Header, Content } = Layout;
import { SmileOutlined, BellOutlined } from '@ant-design/icons';
import LayoutFooter from '../component/LayoutFooter/index'
import { useHistory } from "umi";
import {
  UserOutlined
} from '@ant-design/icons';

const usePageLayout = () => {
  const history = useHistory()
  const [ currentMenuIndex, setCurrentMenuIndex ] = useState(-1)
  useEffect(()=>{
    if(currentMenuIndex > -1) {
      history.push(links[currentMenuIndex])
    }
  }, [currentMenuIndex])
  const menus = ['行情', '货币交易', '合约交易', '法币交易']
  const links = ['/market', '/exchange', '', '']
  return {
    menus,
    currentMenuIndex,
    setCurrentMenuIndex
  }
}


export default function PageLayout({ children, location, route, history, match }: IRouteComponentProps) {
  const {
    menus,
    currentMenuIndex,
    setCurrentMenuIndex,
  } = usePageLayout()
  return <ConfigProvider
      renderEmpty={() => (
        <div style={{ textAlign: 'center', marginTop: 50 }}>
          <SmileOutlined style={{ fontSize: 20 }} />
          <p>Data Not Found</p>
        </div>
      )}
    >   
    <Layout className='layout theme-blue-dark'>
        <Header className='layout-header  flex-between'>
                <div className='layout-header-menu'>
                    <div className='layout-header-logo flex-row-center'>
                        <img src='http://kuke-static.kukechen.top/9f638313d552e9d0.png?e=1609991088&token=dxtgSJJ6qWW-NdM6ZyrStvxDT3P4X7We-r9FOKg_:HFZj4x8eWxN5wrKJZkVlYkx5Jo4='></img>
                    </div>
                    {menus.map((item, i)=>{
                      return <div 
                        onClick={()=>setCurrentMenuIndex(i)}
                        key={item} 
                        className={i == currentMenuIndex ? 'layout-header-menu-item_selected' : 'layout-header-menu-item'}
                      >{item}
                      </div>
                    })}
                </div>
                <div className='layout-header-menu-right'>
                    <ChDropdown trigger={['click']} itemClassName='layout-header-menu-dropdownItem-cell' className="layout-header-menu-dropdownItem" text={<div>资产</div>} 
                    menuItems={[
                        {text: "我的资产"},
                        {text: "充币"},
                        {text: "体币"},
                        {text: "资金划转"},
                        {text: "账单明细"}
                    ]}></ChDropdown>
                    <div className='layout-header-menu-dropdownItem'>
                        委托
                    </div>
                    <Dropdown overlay={
                        <Menu>
                        <Menu.Item>
                          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                            1st menu item
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                            2nd menu item
                          </a>
                        </Menu.Item>
                        <Menu.Item>
                          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                            3rd menu item
                          </a>
                        </Menu.Item>
                        <Menu.Item danger>a danger item</Menu.Item>
                      </Menu>
                    }>
                        <div className='layout-header-menu-dropdownItem'>帮助</div>
                    </Dropdown>
                    {/* <div className='layout-header-menu-dropdownItem'>登录</div>
                    <div className='layout-header-menu-register flex-center'>注册</div> */}
                    <div className='layout-header-menu-dropdownItem'>
                      <BellOutlined className='fz-18'/>
                    </div>
                    <div className='layout-header-menu-dropdownItem'>
                      <UserOutlined onClick={()=>{history.push('/userCenter')}} className='fz-18'/>
                    </div>
                    <div className='layout-header-menu-split'></div>
                    <div className='layout-header-menu-dropdownItem'>简体中文</div>
                </div>
        </Header>
        <Content>{children}</Content>
        <LayoutFooter/>
    </Layout>
    </ConfigProvider>
}

/***********************************
 **     component-公用底部链接      **
 *********************************/
import { Row, Col } from 'antd'
import { ChDropdown } from 'ch-ui'
import React from 'react'
import './index.less'

function Footer() {
    return <div className='footer'>
        <Row>
           <Col offset={3} span={4}>
              <div className='flex-row-center typo-text-2'>
                <span className='footer-chapter-dot'></span> 
                    About
                </div>
              <div className='typo-text-1 m-t-20 text-light'>About us</div>
              <div className='typo-text-1 m-t-20 text-light'>CoinBene Blog</div>
              <div className='typo-text-1 m-t-20 text-light'>Apply to List</div>
              <div className='typo-text-1 m-t-20 text-light'>LABS</div>
           </Col>
           <Col span={4}>
              <div className='flex-row-center typo-text-2'>
                <span className='footer-chapter-dot'></span> 
                    Help
                </div>
              <div className='typo-text-1 m-t-20 text-light'>About us</div>
              <div className='typo-text-1 m-t-20 text-light'>CoinBene Blog</div>
              <div className='typo-text-1 m-t-20 text-light'>Apply to List</div>
              <div className='typo-text-1 m-t-20 text-light'>LABS</div>
           </Col>
           <Col span={4}>
              <div className='flex-row-center typo-text-2'>
                <span className='footer-chapter-dot'></span> 
                    Contact
                </div>
              <div className='typo-text-1 m-t-20 text-light'>About us</div>
              <div className='typo-text-1 m-t-20 text-light'>CoinBene Blog</div>
              <div className='typo-text-1 m-t-20 text-light'>Apply to List</div>
              <div className='typo-text-1 m-t-20 text-light'>LABS</div>
           </Col>
           <Col span={6}>
              <div className='flex-row-center typo-text-2'>
                <span className='footer-chapter-dot'></span> 
                <span>Site</span>
                    <ChDropdown className="footer-city-dropdown" text={"China(China)"}></ChDropdown>
              </div>
              <div className='m-t-50'>
                <img width="300px" height="182px" className="footer-city-map" src='http://kuke-static.kukechen.top/80c7e995bbd17974.png'></img>
              </div>
           </Col>
       </Row>
        <Row className='footer-infoAndLink flex-column-center'>
            <div className='splitLine'></div>
            <img width='190px' height='27px' src='http://kuke-static.kukechen.top/1fb85991df180d10.png'></img>
            <div className='text-type-1 m-t-40 m-b-40'>The World's Leading Trustworthy Crypto Assets Platform</div>
            <div style={{width: '100%'}} className="text-type-1 text-light flex-between">
                <span>Additional Links:</span>
                <span>BiShiJie</span>
                <span>Bixiaobai</span>
                <span>LiananTech</span>
                <span>dappx</span>
                <span>NiuYan</span>
                <span>EOSParkBlock.cc</span>
                <span>QKL123</span>
                <span>Cryptowisser</span>
                <span>OAAM Consulting</span>
                <span>SOSOLX</span>
                <span>ChainWhy</span>
                <span>Dappbirds</span>
            </div>
        </Row>
        <div className='text-type-1 flex-center m-t-20 text-light'>© 2017-2020 CoinBene Limited</div>
    </div>
}

export default Footer
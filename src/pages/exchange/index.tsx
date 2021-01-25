
/***********************************
  **        page-货币交易$$$       **
  *********************************/

import React, { useEffect } from 'react';
import CardSearchBar from '../../component/CardSearchBar'
import HorizontalNav from '../../component/HorizontalNav'
import './index.less';
import { StarFilled } from '@ant-design/icons';
import { ChSortor, ChPriceSplit, ChDropdown } from 'ch-ui';
import { createChart } from "lightweight-charts";
import { Button, Row, Table, Tag, Col } from "antd"

//@type React Component | @dec 虚拟币列表
function VirtualcoinList() {
    const navs = [{
        text: <StarFilled/>,
        value: 'star'},
        {
            text: 'USDT',
            value: 'USDT'
        },{
            text: 'BTC',
            value: 'BTC'
        },{
            text: 'ETH',
            value: 'ETH'
        },{
            text: 'DeFi专区',
            value: 'DeFi'
        }
    ]   
    return <div className='virtualcoin-list block-card'>
        <div className='block-card-header'>
            <CardSearchBar/>
        </div>
        <div className='p-l-15 p-r-15 p-t-2 p-b-2'>
            <HorizontalNav
                currentIndex={1}
                navs={navs}
            />
        </div>
        <div className='card-table'>
            <div className='block-card-table'>
                {/* @表头 */}
                <div className='block-card-table_tr'>
                    <div 
                        className='flex-start block-card-table_td wr-45 text-left'>
                        <span className='m-r-3'>交易对</span>
                        <ChSortor className='sort-contro' color='#f5bb05' value='up'/>
                    </div>
                    <div className='flex-end block-card-table_td wr-27 text-right'>
                        <span>最新价</span>
                        <ChSortor className='sort-contro'/>
                    </div>
                    <div className='flex-end block-card-table_td wr-28 text-right'>
                        <span>涨幅价</span>
                        <ChSortor className='sort-contro'/>
                    </div>
                </div>
                <div className='block-card-table_body'>
                    <div className='block-card-table_th'>
                        <div 
                            className='flex-start block-card-table_td wr-45 text-left'>
                            <span className='m-r-3'>BTC/USDT</span>
                            <span className='tag-samll-type_1'>5X</span>
                        </div>
                        <div 
                            className='flex-end block-card-table_td wr-27 text-rigth'>
                            <span className='m-r-3'><ChPriceSplit value={3874253}/></span>
                        </div>
                        <div 
                            className='flex-end block-card-table_td wr-28 text-right red'>
                            <span className='m-r-3'>-0.33%</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}
//@type React Component | @dec 虚拟币k线图
function VirtualcoinKlineChart() {

    useEffect(()=>{
        const chart = createChart('virtualcoinKlineChart', { width: 770, height: 350 });
        const candlestickSeries = chart.addCandlestickSeries();
        // 设置数据
        chart.applyOptions({
            layout: {
              backgroundColor: "#171c24",
              textColor: "#696969",
              fontSize: 12,
              fontFamily: "Calibri"
            }
        });
        chart.applyOptions({
            grid: {
              vertLines: {
                visible: false
              },
              horzLines: {
                visible: false
              }
            }
          });
        candlestickSeries.setData([
          {
            time: "2018-12-19",
            open: 141.77,
            high: 170.39,
            low: 120.25,
            close: 145.72
          },
          {
            time: "2018-12-20",
            open: 145.72,
            high: 147.99,
            low: 100.11,
            close: 108.19
          },
          { time: "2018-12-21", open: 108.19, high: 118.43, low: 74.22, close: 75.16 },
          { time: "2018-12-22", open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
          { time: "2018-12-23", open: 45.12, high: 53.9, low: 45.12, close: 48.09 },
          { time: "2018-12-24", open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
          { time: "2018-12-25", open: 68.26, high: 68.26, low: 59.04, close: 60.5 },
          { time: "2018-12-26", open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
          { time: "2018-12-27", open: 91.04, high: 121.4, low: 82.7, close: 111.4 },
          {
            time: "2018-12-28",
            open: 111.51,
            high: 142.83,
            low: 103.34,
            close: 131.25
          },
          { time: "2018-12-29", open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
          { time: "2018-12-30", open: 106.33, high: 110.2, low: 90.39, close: 98.1 },
          { time: "2018-12-31", open: 109.87, high: 114.69, low: 85.66, close: 111.26 }
        ]);
    }, [])

    
    return <div className='block-card virtualcoin-klineChart'>
        <div className='block-card-header flex-row-center'>
            <img className='coin-icon m-r-3' src='http://kuke-static.kukechen.top/BCH.png'/>
            <span className='coin-name fz-16'>BCH/USDT<span className='m-l-3 tag-samll-type_2'>5X</span></span>
            <div className='m-l-15 text-type-1 lh-20 fw-500'>
                <div>425.50</div>
                <div>≈￥2750.9746</div>
            </div>
            <div className='m-l-15'>
                <div className='text-type-1-light'>涨跌幅</div>
                <div className='text-type-1'><span className='red'>-28.63%</span><span className='red'>-18.63%</span></div>
            </div>
            <div className='m-l-15 fw-500'>
                <div className='text-type-1-light'>24最高</div>
                <div className='text-type-1'>483.74</div>
            </div>
            <div className='m-l-15 fw-500'>
                <div className='text-type-1-light'>24最低</div>
                <div className='text-type-1'>404.00</div>
            </div>
            <div className='m-l-15 fw-500'>
                <div className='text-type-1-light'>24量</div>
                <div className='text-type-1'>219,254,933.53</div>
            </div>
        </div>
        <div className='flex-row-center timeFilter'>
            <div className='text-type-1-light timeFilter-item'>分时</div>
            <div className='text-type-1-light timeFilter-item'>分钟</div>
            <div className='text-type-1-light timeFilter-item'>小时</div>
            <div className='text-type-1-light timeFilter-item'>1天</div>
            <div className='text-type-1-light timeFilter-item'>1周</div>
            <div className='text-type-1-light timeFilter-item'>1月</div>
            <div className='text-type-1-light timeFilter-item'>指标</div>
            <div className='text-type-1-light timeFilter-item'>设置</div>
            <div className='text-type-1-light timeFilter-item'>全屏</div>
        </div>
        <div id='virtualcoinKlineChart' className='virtualcoinKlineChart'></div>
        <div className='virtualcoin-hold-info flex-between'>
            <div className='flex-row-center p-l-10 p-r-10'>
                <div className='text-type-1 m-r-10'>ETC</div>
                <div className='text-type-1-light'>
                    <div>可用 <span className='text-type-1'> -- / </span>冻结  <span className='text-type-1'>-- </span></div>
                    <div>已借 <span className='text-type-1'> -- / </span> 利息 <span className='text-type-1'>-- </span></div>
                </div>
            </div>
            <div className='flex-row-center p-l-10 p-r-10'>
                <div className='text-type-1 m-r-10'>ETC</div>
                <div className='text-type-1-light'>
                    <div>可用 <span className='text-type-1'> -- / </span>冻结  <span className='text-type-1'>-- </span></div>
                    <div>已借 <span className='text-type-1'> -- / </span> 利息 <span className='text-type-1'>-- </span></div>
                </div>
            </div>
            <div className='flex-row-center p-l-10 p-r-10'>
                <div className='text-type-1-light'>
                    <div>风险率 <span className='text-type-1'> --</span></div>
                    <div>强评价 <span className='text-type-1'> --</span></div>
                </div>
            </div>
            <div className='flex-row-center p-l-10 p-r-10'>
                <div className='text-type-1 primary-color right'>
                    <div className=''>资金划转</div>
                    <div className=''>借币/还币</div>
                </div>
            </div>
        </div>
    </div>
}
//@type React Component | @dec 委托列表
function EntrustLits() {
    return <div className='entrust-list block-card'>
        <div className='block-card-header flex-between'>
            <div className='typo-text-2'>委托列表</div>
            <ChDropdown 
                className='text-type-1 entrust-selectButton' 
                text='0.01' 
                menuItems={[
                    {text: "0.01"},
                    {text: "0.1"},
                    {text: "1"},
            ]}/>
        </div>
        <div className='card-table'>
            <div className='block-card-table'>
                {/* @表头 */}
                <div className='block-card-table_tr'>
                    <div 
                        className='flex-start block-card-table_td wr-45 text-left'>
                        <span className='m-r-3'>价格(USDT)</span>
                    </div>
                    <div className='flex-end block-card-table_td wr-27 text-right'>
                        <span>数量(BTC)</span>
                    </div>
                    <div className='flex-end block-card-table_td wr-28 text-right'>
                        <span>累计(BTC)</span>
                    </div>
                </div>
                <div className='block-card-table_body'>
                    <div className='block-card-table_th'>
                        <div 
                            className='flex-start block-card-table_td wr-45 text-left red'>
                            <span className='m-r-3'><ChPriceSplit value={9876152}/></span>
                        </div>
                        <div 
                            className='flex-end block-card-table_td wr-27 text-rigth'>
                            <span className='m-r-3'><ChPriceSplit value={3874253}/></span>
                        </div>
                        <div 
                            className='flex-end block-card-table_td wr-28 text-right'>
                            <span className='m-r-3'>0.421353</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}
//@type React Component | @dec 交易记录
function ExchangeRecord() {
    const navs = [
        {
            text: '当前委托',
            value: '当前委托'
        },{
            text: '历史委托',
            value: '历史委托'
        },{
            text: '借币记录',
            value: '借币记录'
        }
    ] 
    const columns = [
    {
        title: '委托时间',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '交易对',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '方向',
        dataIndex: 'address',
        key: 'address',
    },{
        title: '类型',
        dataIndex: '类型',
        key: '类型',
    },{
        title: '委托价',
        dataIndex: '委托价',
        key: '委托价',
    },{
        title: '成交量',
        dataIndex: '成交量',
        key: '成交量',
    },{
        title: '委托总额',
        dataIndex: '委托总额',
        key: '委托总额',
    },{
        title: '成交量',
        dataIndex: '成交量',
        key: '成交量',
    },
    ];
    return <div className='exchange-record block-card'>
        <div className='block-card-header flex-between'>
            <HorizontalNav className='exchange-record-tabbar' navs={navs} currentIndex={1}></HorizontalNav>
            <div className='primary-color'>查看全部</div>
        </div>
        <div>
            <Table 
                className='exchange-record-table' 
                rowClassName='exchange-record-table_row'
                pagination={false} 
                dataSource={[]} 
                columns={columns} 
            />;
        </div>
    </div>
}
//@type React Component | @dec 最近成交价
function TransactionPrice() {
    return <div className='entrust-list block-card'>
        <div className='block-card-header flex-between'>
            <div className='typo-text-2'>最新成交价</div>
        </div>
        <div className='card-table'>
            <div className='block-card-table'>
                {/* @表头 */}
                <div className='block-card-table_tr'>
                    <div 
                        className='flex-start block-card-table_td wr-45 text-left'>
                        <span className='m-r-3'>价格(USDT)</span>
                    </div>
                    <div className='flex-end block-card-table_td wr-27 text-right'>
                        <span>数量(BTC)</span>
                    </div>
                    <div className='flex-end block-card-table_td wr-28 text-right'>
                        <span>时间</span>
                    </div>
                </div>
                <div className='block-card-table_body'>
                    <div className='block-card-table_th'>
                        <div
                            className='flex-start block-card-table_td wr-45 text-left red'>
                            <span className='m-r-3'><ChPriceSplit value={9876152}/></span>
                        </div>
                        <div 
                            className='flex-end block-card-table_td wr-27 text-rigth'>
                            <span className='m-r-3'><ChPriceSplit value={3874253}/></span>
                        </div>
                        <div 
                            className='flex-end block-card-table_td wr-28 text-right'>
                            <span className='m-r-3'>10.30</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
}
//@type React Component | @dec 交易操作
function ExchangeAction() {
    return <div className='exchange-action block-card'>
        <div className='block-card-header flex-between'>
            <div className='typo-text-2'>最新成交价</div>
            <div className='typo-text-1'> 未开启手续费9折 </div>
        </div>
        <div className='p-10'>
            <Button size='small' className='button-type-1_fill' ghost color="#f5bb05">限价委托</Button>
            <Button size='small' className='m-l-10 button-type-1' ghost color="#f5bb05">市场委托</Button>
        </div> 
        <div>
            <div className='text-type-1'>
                {/* 可用0.00000000 USDT */}
            </div>
        </div>
    </div>
}

function Exchange() {
    return <div className='exchange-page page'>
        <Row>
            <Col span={4}>
                <VirtualcoinList/>
            </Col>
            <Col span={12}>
                <VirtualcoinKlineChart/>
            </Col>
            <Col span={4}>
                <EntrustLits/>
            </Col>
            <Col span={4}>
                <TransactionPrice/>
            </Col>
        </Row>
        <Row className='flex m-t-5'>
            <Col span={16}>
                <ExchangeRecord/>
            </Col>
            <Col span={8}>
                <ExchangeAction/>
            </Col>
        </Row>
    </div>
}



export default Exchange;
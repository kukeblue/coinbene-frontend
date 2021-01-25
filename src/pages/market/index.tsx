import React from 'react'
import { Row, Col, Input, Table } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import './index.less'

function Maket() {

    const columns = [
        {
          title: '交易对',
          dataIndex: '交易对',
        },
        {
          title: '币种',
          dataIndex: '币种',
          sorter: {
            multiple: 3,
          },
        },
        {
          title: '最新价',
          dataIndex: '最新价',
          sorter: {
            // compare: (a:any, b:any) => a.math - b.math,
            multiple: 2,
          },
        },
        {
          title: '涨跌幅',
          dataIndex: '涨跌幅',
          sorter: {
            // compare: (a:any, b:any) => a.english - b.english,
            multiple: 1,
          },
        },
        {
            title: '24小时最高价',
            dataIndex: '24小时最高价',
            sorter: {
              // compare: (a:any, b:any) => a.english - b.english,
              multiple: 1,
            },
        },
        {
            title: '24小时最低价',
            dataIndex: '24小时最低价',
            sorter: {
              // compare: (a:any, b:any) => a.english - b.english,
              multiple: 1,
            },
        },
        {
            title: '24小时成交量',
            dataIndex: '24小时成交量',
            sorter: {
              // compare: (a:any, b:any) => a.english - b.english,
              multiple: 1,
            },
        },
    ];
    return <div className='maket-page'>
        <Row>
            <Col span={18} offset={3}>
                <div className='maket-page-content'>
                    <div className='flex-between'>
                        <div className='maket-select flex-between'>
                            <span className='text-type-2 maket-select-item primary-color'>自选</span>
                            <span className='text-type-2 maket-select-item'>USDT市场</span>
                            <span className='text-type-2 maket-select-item'>BTC市场</span>
                            <span className='text-type-2 maket-select-item'>ETH市场</span>
                            <span className='text-type-2 maket-select-item'>DeFi市场</span>
                        </div>
                        <div>
                            <Input className='search-input' placeholder="搜索币种" prefix={<SearchOutlined className='fz-18 fc-grey-light'/>} />
                        </div>
                    </div>
                    <div className="maket-table">
                        <Table columns={columns} dataSource={[]} />
                    </div>
                </div>
            </Col>
        </Row>
    </div>
}

export default Maket
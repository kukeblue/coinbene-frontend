/***********************************
 **     component-卡片查询器       **
 *********************************/
import React from 'react'
import { Input } from 'antd'
import './index.less'
import { SearchOutlined } from '@ant-design/icons';

interface CardSearchBarProps {
    placeholder?: string,
    onChange?: (v: string | number)=>void,
    value?: string | number
}

function CardSearchBar(props: CardSearchBarProps) {
    return <div className='c-cardSearchBar'>
        <Input onChange={(e)=>{props.onChange && props.onChange(e.target.value)}} value={props.value} className='c-cardSearchBar-input' placeholder={props.placeholder || "搜索币种"} prefix={<SearchOutlined className='fz-18 fc-grey-light'/>}/>
    </div>
}

export default CardSearchBar;
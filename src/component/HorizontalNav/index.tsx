/***********************************
 **     component-横向导航栏       **
 *********************************/
import React from 'react'
import './index.less'

interface Nav {
    text: string | JSX.Element;
    value: string;
}

interface HorizontalNavProps {
    navs?: Nav[]
    currentIndex?: number
    className?: string
}

function HorizontalNav(props:HorizontalNavProps) {
    return <div className={'c-horizontalNav-menu flex-between ' + (props.className || '')}>
        {props.navs && props.navs.map((item, index)=>{
            return <div 
                key={item.value} 
                className={props.currentIndex == index + 1 ? 'c-horizontalNav-menu-item_selected' : 'c-horizontalNav-menu-item'}>
                    {item.text}
                </div>
        })}
    </div>
}

export default HorizontalNav;
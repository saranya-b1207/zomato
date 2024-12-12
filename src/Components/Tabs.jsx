import { TabItem } from './TabItem'
import { useState } from "react";

const Tabs = ({ list, activeTab, onTabSwitch }) => {
  const safeList = list || [];
  const active = activeTab || (safeList.length > 0 ? safeList[0] : '');
  return (
    <div className='sticky z-1900 bg-slate-200 mb-4 text-black'>
      <div className='container mx-auto flex flex-row align-center py-2 border-b-gray-800 '>
        {safeList.map((item, index) => {
          return (
            <TabItem
              title={item}
              key={index}
              index={index}
              active={active === item}
              setActive={onTabSwitch}
            />
          )
        })}
      </div>
</div>
  )
}

export default Tabs;

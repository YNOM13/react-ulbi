import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput placeholder="searcher" value={filter.query}
               onChange={e=>setFilter((prev)=>{
                 return {...prev,
                  query:e.target.value,
                 }
               })}/>
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter,sort:selectedSort})}
        defaultValue={'Sort by'}
        options={[
          {
            value:'title',
            name:'By name',
          },
          {
            value:'body',
            name:'By description',
          },
        ]}
      />
    </div>
  );
};

export default PostFilter;
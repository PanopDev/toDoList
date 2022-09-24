

export default function SelectAll({selectAll,selectAllBoxRef}) {
 
  
    return (
        <>
        <ul>
        <li>   
    <input type='checkbox'
    
    ref= {selectAllBoxRef}
    onChange={(e)=>{selectAll(e.target.checked);}}
    
    ></input>
<label className='listItemLabel' id='selectAllCheckBox'>Select All</label>
</li>
</ul>
</>
  )
}

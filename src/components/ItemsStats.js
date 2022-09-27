
function ItemsStats({totalItems,completed,incomplete}){


return (
    <>
        {` Total Items:${totalItems} |  Completed:${completed.length} |  Incomplete:${incomplete.length} `}
    </>
   
    )
}

export default ItemsStats
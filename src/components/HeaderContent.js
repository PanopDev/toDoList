import { useState } from "react"
function HeaderContent({ }) {
    let defaultListName;
    if (localStorage.getItem('listName') !== null) {

        defaultListName = localStorage.getItem('listName')
    }
    else { defaultListName = 'click to name list' }

    const [headertextDefault, HeaderTextNew] = useState(defaultListName)
    
    return (
        <header>
            <h1 onClick={() => {
                let listName = prompt('list name?', 'My List');
                if (!/\S/.test(listName) || listName == null) { listName = defaultListName }
                HeaderTextNew(listName);
                localStorage.setItem('listName', listName)
            }
            }>{headertextDefault}</h1>

        </header>
    )
}
// HeaderContent.defaultProps = {headerText:"My List"}


export default HeaderContent
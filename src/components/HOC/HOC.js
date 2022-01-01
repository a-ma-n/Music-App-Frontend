//higher order component
import FeatherIcon from 'feather-icons-react';
import { useHistory } from 'react-router-dom';

const HOC = ({children}) =>{
    const history =useHistory()
    const handleClick =() =>{
        history.goBack()
    }
    return (
        <>
            {/* this is a fragment  , we cannot give 2 div tags outside it  but we can do that inside it, {} braces mean html like part, {{}} means json like thing*/ }
            <div
                style={
                    {
                        position: 'fixed',
                        zIndex: '10000',
                    }
                }
                className="p-3 ">
                <FeatherIcon icon="chevron-left" onClick={handleClick}/>
            </div>
            {children}
        </>
    )
}

export default HOC
import { useState } from "react"



const HeaderSearch = () => {
    const[isActive,setIsActive] = useState(false);

    const handlSearchClick = () => {
        setIsActive(!isActive);
    }
    return (
        <div className={`search_icon ${isActive ? 'active' : ''}`}>
            <i className={`ti-search ${isActive ? 'ti-close' : 'bx-search'}`} onClick={handlSearchClick}></i>
            <form className="input-box">
                <div>
                    <input className="search_fild" type="text" placeholder="Search..." />
                    <button type="button"><i className="ti-search"></i></button>
                </div>
            </form>
        </div>
    )
}
export default HeaderSearch
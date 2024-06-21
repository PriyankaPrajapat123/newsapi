import React from "react";
import Fetch from "../components/Fetch";
const Categories =({cat})=>{
    return(
        <div style={{minHeight:"100vh"}}>{cat}
                <Fetch />

        </div>
    )
}
export default Categories
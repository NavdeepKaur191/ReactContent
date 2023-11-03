import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Search()
{
    const [userSearch,setUserSearch]=useState("");
    return(
        <div>
            <SearchBar
             searchValue={userSearch}
             searchValueFunction={setUserSearch}
             />
             <p>You searched for {userSearch}</p>
        </div>
    )
}
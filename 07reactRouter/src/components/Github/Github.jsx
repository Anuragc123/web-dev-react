import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {useLoaderData} from "react-router-dom";

function Github() {
    const data = useLoaderData()
//   const { username } = useParams();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${username}`)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, [username]);

  return (
    <div className="m-4 bg-gray-600 text-white text-3xl p-3 flex items-center">
      <img
        src={
          data.avatar_url ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq5SI_RbUmrgPkRatq58UDXwczeEDTgcrQifFee8xY_EybAZnw1Drhiy0-2EnpyCXGkCE&usqp=CAU"
        }
        alt="Github picture"
        width={300}
      />
      <p className="text-center flex-1 flex items-center justify-center">
        Github followers: {data.followers}
      </p>
    </div>
  );
}

export default Github;

export const githubInfoLoader =async() =>{
    // const {username} = useParams();
    const response = await fetch(`https://api.github.com/users/Anuragc123`);
    return response.json()
}
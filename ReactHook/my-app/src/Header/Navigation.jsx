import React, { useEffect, useState } from "react";
import { getUser } from "../api";
import useUser from "../useUser";

export default function Navigation() {
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);

  const [user] = useUser({});

  return <div>Navigation {user?.name}</div>;
}

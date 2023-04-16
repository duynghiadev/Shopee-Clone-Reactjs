import React, { createContext, useEffect, useState } from "react";
import UserProfile from "./UserProfile";

const initialAddress = () => {
  console.log("Initial address");
  return {
    nation: "Vietnam",
    city: {
      street: "200 Dien Bien Phu, Da Nang",
      house: "Building",
    },
  };
};

const getAddress = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        nation: "USA",
        city: {
          street: "100 Nicolas, New York",
          house: "Building",
        },
      });
    }, 3000);
  });
};

export const UserContext = createContext({
  address: {
    nation: "Vietnam",
    city: {
      street: "223 Huston, New York",
      house: "Building",
    },
  },
  age: 100,
  firstName: "Duynghia Dev",
  increaseAge: () => {},
});

export default function User() {
  const [firstName, setFirstName] = useState("Alex");
  const [age, setAge] = useState(24);

  const [address, setAddress] = useState(initialAddress);

  const [, forceRerender] = useState(0);

  const profile = {};

  const increaseAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const rerender = () => forceRerender((prevState) => prevState + 1);

  const changeStreet = () => {
    // setAddress((prevState) => ({
    //   ...prevState,
    //   city: "Ha Noi",
    // }));

    setAddress((prevAddress) => {
      const newCity = {
        ...prevAddress.city,
      };
      newCity.street = "02 Hoa Son 6, Da Nang";

      return {
        ...prevAddress,
        city: newCity,
      };
    });
  };

  console.log("Re-render");

  /**
   * Giống componentDidUpdate, effect function chạy lại mỗi khi component re-render
   */

  // useEffect(() => {
  //   console.log(document.getElementsByTagName("li"));
  //   console.log("useEffect giống componentDidUpdate");
  // });

  /**
   * Thường dùng để gọi API
   */

  useEffect(() => {
    console.log(document.getElementsByTagName("li"));
    console.log("useEffect giống componentDidMount");

    console.log(profile);
    getAddress().then((res) => {
      setAddress((prevAddress) => {
        const newAddress = { ...prevAddress };
        newAddress.city = res.city;
        return newAddress;
      });
    });

    // Cleanup function
    return () => {
      console.log("Huỷ gọi API");
    };
  }, []);

  useEffect(() => {
    console.log("age: ", age);
    return () => {
      console.log("Clean Age");
    };
  }, [age]);

  return (
    <div>
      <h1>User functional component</h1>
      <UserProfile />

      <button onClick={rerender}>Rerender</button>
      <button onClick={changeStreet}>ChangCity</button>
    </div>
  );
}

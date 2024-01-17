import React, { useEffect, useState } from "react";
import UserInfo from "./component/UserInfo";

function App() {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await fetch("/UserInfo");
            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const user = await response.json();
            setUserData(user);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <>
            <UserInfo userInfo={userData} />
        </>
    );
}

export default App;
import React from "react";
import { useUser } from "../hooks";
import { getFirestore } from "firebase/firestore";

function User() {
    const db = getFirestore();
    const user = useUser("1", db);
    
    return (
        <div className="User">
            {user ? (
                <div className="info">
                    <p>{user.username}</p>
                    <p> {user.money}$ </p>
                    <a href='#'>Logout</a>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default User;
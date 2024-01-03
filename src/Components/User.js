import React from "react";
import { useUser } from "../hooks";

function User() {
    const user = useUser();

    return (
        <div className="User">
            {user ? (
                <div className="info">
                    <p>{user.username}</p>
                    <a href='#'>Logout</a>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default User;
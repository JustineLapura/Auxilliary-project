"use client"

import React, { createContext, useState, useEffect } from "react";
import { nanoid } from "nanoid";

export const UsersContext = createContext();

export const UsersProvider = ({ children }) => {
    const isClient = typeof window !== 'undefined';

    const [users, setUsers] = useState(() => {
        if (isClient) {
            const storedUsers = localStorage.getItem("users");
            return storedUsers ? JSON.parse(storedUsers) : [];
        }
        return [];
    });
    
    console.log(users)

    const [selectedUser, setSelectedUser] = useState(() => {
        if (isClient && localStorage.getItem("selectedUser")) {
            const storedSelectedUser = localStorage.getItem("selectedUser");
            return JSON.parse(storedSelectedUser);
        }
        return null;
    });

    const [isLoggedin, setIsLoggedin] = useState(() => {
        if (isClient && localStorage.getItem("isLoggedin")) {
            // Parse the stored value as JSON and return it
            return JSON.parse(localStorage.getItem("isLoggedin"));
        }
        // If no value is found in localStorage, return the initial state (false in this case)
        return false;
    });
    console.log(isLoggedin)
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("users", JSON.stringify(users));
        }
    }, [users]);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("selectedUser", JSON.stringify(selectedUser));
        }
    }, [selectedUser]);

    const navigateToHome = () => {
        // Implement your custom navigation logic here
        // For example:
        window.location.href = "/";
    };

    const isEmailDuplicate = (email) => {
        return users.some((user) => user.email === email);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (isEmailDuplicate(email)) {
            setErrorMessage("Email already exists. Please choose a different email.");
            return;
        }

        if (
            firstName &&
            lastName &&
            username &&
            email &&
            password &&
            passwordConfirm &&
            password === passwordConfirm
        ) {
            const newUser = {
                id: nanoid(),
                firstName,
                lastName,
                username,
                email,
                password,
            };

            setUsers([...users, newUser]);
            navigateToHome();
            setIsLoggedin(true)
            setErrorMessage("");
        } else if (
            !firstName ||
            !lastName ||
            !username ||
            !email ||
            !password ||
            !passwordConfirm
        ) {
            setErrorMessage("Please complete the form!");
        } else {
            setErrorMessage("Passwords do not match. Please try again.");
        }
    };

    return (
        <UsersContext.Provider
            value={{
                isLoggedin,
                setIsLoggedin,
                users,
                setUsers,
                firstName,
                setFirstName,
                lastName,
                setLastName,
                username,
                setUsername,
                email,
                setEmail,
                password,
                setPassword,
                passwordConfirm,
                setPasswordConfirm,
                errorMessage,
                setErrorMessage,
                handleFormSubmit,
                selectedUser,
                setSelectedUser
            }}
        >
            {children}
        </UsersContext.Provider>
    );
};

export default UsersContext;
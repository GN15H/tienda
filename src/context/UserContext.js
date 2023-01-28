import { createContext } from "react";

const UserContext = createContext({
    auth: false,
    username: null,
    isAdmin: null
});

export default UserContext;
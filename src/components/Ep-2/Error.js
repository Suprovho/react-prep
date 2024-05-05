import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err=useRouteError();
    return (
        <div className="p-4">
            <h1>oops!!</h1>
            <p>something went wrong</p>
            <p>{err.status}: {err.statusText}</p>
        </div>
    );
};

export default Error;
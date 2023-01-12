import { useRouteError } from "react-router-dom";

export function Error(){
    const error = useRouteError()
    console.log(error)
    return(
        <div className="h-screen flex flex-col gap-6 justify-center items-center">
        <h1 className="font-bold text-4xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-gray-400">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
}
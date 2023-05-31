import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/common/LayOut"
import DataFetching from "../pages/DataFetching"
import StateMangenent from "../pages/StateMangenent"
import Todo from "../pages/Todo"


export const MainRoutes = createBrowserRouter([
    {
        path : "/",
        element : <LayOut />,
        children : [
            {
                index : true,
                element  : <DataFetching />
            },
            {
               path : "/state",
                element  : <StateMangenent />
            },
            {
                path : "/todo",
                element  : <Todo />
            }
        ]
    }
])


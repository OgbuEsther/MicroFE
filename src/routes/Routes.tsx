import {createBrowserRouter} from "react-router-dom"
import LayOut from "../components/common/LayOut"
import DataFetching from "../pages/DataFetching"


export const MainRoutes = createBrowserRouter([
    {
        path : "/",
        element : <LayOut />,
        children : [
            {
                index : true,
                element  : <DataFetching />
            }
        ]
    }
])


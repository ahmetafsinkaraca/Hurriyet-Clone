import Homelayout from "./pages/home/layout";
import Home from "./pages/home/home";
import Gundem from "./pages/content/gundem/gundem";
import Kelebek from "./pages/home/content/Kelebek/Kelebek";
import Dunya from "./pages/content/dunya/dunya";
import Bigpara from "./pages/content/bigpara/bigpara";
import Resmiilanlar from "./pages/content/resmiilanlar/resmiilanlar";
import Sporarena from "./pages/content/sporarena/sporarena";
import Yasam from "./pages/content/yasam/yasam";
import Yazarlar from "./pages/content/yazarlar/yazarlar";
import Index1 from "./pages/content/gundem/details/index1";
import Index2 from "./pages/content/gundem/details/index2";
import Index3 from "./pages/content/gundem/details/index3";

const routes = [
    {
        path:'/',
        element:<Homelayout/>,
        children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:'gundem',
                element:<Gundem/>,
            },

            {
                path:'gundem/details/',
                children: [
                    {
                        path:'1',
                        element:<Index1/>
                    },
                    {
                        path:'2',
                        element:<Index2/>
                    },
                    {
                        path:'3',
                        element:<Index3/>
                    }
                ]
            },
            
            {
                path:'kelebek-magazin',
                element:<Kelebek/>
            },

            {
                path:'dunya',
                element:<Dunya/>
            },
            {
                path:'bigpara',
                element:<Bigpara/>
            },
            {
                path:'resmiilanlar',
                element:<Resmiilanlar/>
            },
            {
                path:'sporarena',
                element:<Sporarena/>
            },
            {
                path:'yasam',
                element:<Yasam/>
            },
            {
                path:'yazarlar',
                element:<Yazarlar/>
            }

        ]
    }
]

const authCheck = routes => routes.map(route => {
    if(route?.auth){
        route.element = {route}
    }
    if(route?.children){
          route.children = authCheck(route.children)
    }
    return route


})

export default authCheck(routes)
import { ClockHistory, BookHalf, PersonFill } from "react-bootstrap-icons";
import { NavBarItem } from "../components/templates/Profile/ProfilePageTemplate";

const getBottomNavBarItems = (userId: any, lang: any, hash: string): NavBarItem[] => {
    const menu: NavBarItem[] = [
        {
            title: "History",
            icon: ClockHistory,
            redirectTo:
                "/" + lang + "/profile/" + userId + "/anime/history" + hash,
        },
        {
            title: "Recap",
            icon: BookHalf,
            redirectTo:
                "/" + lang + "/profile/" + userId + "/recap-series" + hash,
        },
        {
            title: "Profile",
            icon: PersonFill,
            redirectTo: "/" + lang + "/profile/" + userId + hash,
        },
    ];
    return menu;
}

export default getBottomNavBarItems;
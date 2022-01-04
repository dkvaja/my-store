import { FAVORITE_PRODUCT, HOME } from "./routes";
import { FavoriteRounded, LocalMallRounded } from "@mui/icons-material";

export const sideBarItems = [
  {
    id: 1,
    path: HOME,
    label: 'All Products',
    icon: <LocalMallRounded />,
  },
  {
    id: 2,
    path: FAVORITE_PRODUCT,
    label: 'Favorite Products',
    icon: <FavoriteRounded />,
  },
];

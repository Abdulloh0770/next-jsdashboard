import { faChrome } from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faFile,
  faHome,
  faPhotoVideo,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const SidebarData = [
  {
    title: "Home",
    href: "/",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    title: "Todos",
    href: "/todos",
    icon: <FontAwesomeIcon icon={faChrome} />,
  },
  {
    title: "Albums",
    href: "/albums",
    icon: <FontAwesomeIcon icon={faBook} />,
  },
  {
    title: "Photos",
    href: "/photos",
    icon: <FontAwesomeIcon icon={faPhotoVideo} />,
  },
  {
    title: "Posts",
    href: "/posts",
    icon: <FontAwesomeIcon icon={faFile} />,
  },
];

import Link from "next/link";
import { SidebarData } from "../Data/SidebarData";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  return (
    <div className={"sidebar"}>
      <div>
        <h4 className="h5">Menu</h4>
      </div>
      <ul>
        {SidebarData.map((v) => (
          <li className={`${router.pathname === v.href && "active"}`}>
            <Link href={v.href}>
              <a
                className={`sidebar_link mb-1 ${
                  (router.pathname === v.href && "text-white") || "text-dark"
                } `}
              >
                <span className={"me-3"}> {v.icon}</span> {v.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

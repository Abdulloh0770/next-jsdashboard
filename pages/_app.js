import "bootstrap/dist/css/bootstrap.css";
import { createGlobalStyle } from "styled-components";
import Sidebar from "../Sidebar/sidebar";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faCreativeCommonsRemix } from "@fortawesome/free-brands-svg-icons";

const GlobalStyle = createGlobalStyle`

      html,
      body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }

      ul, li{
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
      a , a:hover {
        text-decoration: none;
      }
        .global {
        display: flex;
        .sidebar {
          width: 300px;
          height: 100vh;
          position: sticky;
          padding: 30px;
          top: 0;
          background-color: white;
       
          .sidebar_link {
            display: block;
            color: black;
            padding: 10px 20px;
            border: 1px solid rgba(0,233,119,1);
            border-radius: 50px;
            &:hover{
            background-color: rgba(0,233,119,1);
            color: white !important;
            transition: 0.4s;
          }

          }
        }
        .content{
          flex: 1;
        }
        .active{
          background-color: rgba(0,233,119,1);
          border-radius: 50px;
          cursor: pointer;
        }
      }
 
`;

function MyApp({ Component, pageProps }) {
  return (
    <div className={"global"}>
      <GlobalStyle />
      <Sidebar />
      <div className={"content"}>
        <header className="header p-3 d-flex justity-content-between shadow p-3">
          <Button variant="">
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </header>
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

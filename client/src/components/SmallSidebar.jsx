import Wrapper from "../assets/wrappers/SmallSidebar"
import { useDashboardContext } from "../pages/DashboardLayout";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import links from "../utils/Links";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
                                

const SmallSidebar = () => {
    // const data =  useDashboardContext();
    // console.log(data);

    const {showSidebar,toggleSidebar} = useDashboardContext();

    return (
      
        <Wrapper>
  <div
        className={
          showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
    <div className="content">
        <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
            </button>
            <header>
                <Logo/>
            </header>
          <NavLinks/>
    </div>

</div>
        </Wrapper>
    )
}

export default SmallSidebar;
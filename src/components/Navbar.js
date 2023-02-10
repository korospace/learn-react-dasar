import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <button onClick={() => navigate('/')}>home</button>
            <button onClick={() => navigate('/movie')}>movie</button>
        </div>
    )

}

export default Navbar;
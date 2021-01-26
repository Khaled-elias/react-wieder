const Header = (props) => {
 
    return ( 
        
        <div style={{height:'50vh' ,background: !props.myColor ? 'gold' : props.myColor}}>
           
            <h1>
                Welcome to {props.name}
            </h1>

        </div>
     );
}
 
export default Header;
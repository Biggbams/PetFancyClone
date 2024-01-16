import { useRouteError,Link } from "react-router-dom";
const ErrorPage = () => {
    const error = useRouteError();
    return ( 
        <div className="error" style={{
            
        }}>
<h1>Oops!</h1>
<br />
<Link to='/'>Your Name</Link>
      <p>Sorry, an unexpected error has occurred.</p>
      <br />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

        </div>
     );
}
 
export default ErrorPage;
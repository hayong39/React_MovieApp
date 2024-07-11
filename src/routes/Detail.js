import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

class Detail extends React.Component {
    componentDidMount(){
        const{ location, navigate } = this.props;
        if(location.state===undefined){
            navigate('/');
        }
    }

    render(){
        const { location } = this.props;
        if(location.state){
            return <span>{location.state.title}</span>;
        }else{
            navigate('/');
            return null;
        }
    }
}

function DetailWithRouter(props) {
    const location = useLocation();
    const navigate = useNavigate();
    return <Detail {...props} location={location} navigate={navigate} />;
}

export default DetailWithRouter;
import { StackActions, NavigationActions} from 'react-navigation';
import {connect} from 'react-redux';
const Preload = (props) => {
   console.log(props)
    if(!props.token){
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions: [
                NavigationActions.navigate({routeName: 'SignIn'})
            ]
        }));
    }else{
        props.navigation.dispatch(StackActions.reset({
            index:0,
            actions: [
                NavigationActions.navigate({routeName: 'HomeStack'})
            ]
        }));
    }
    return null;
}

const mapStateToProps = (state) => {
    return {
        token:state.userReducer.token
    };
}
export default connect(mapStateToProps)(Preload);
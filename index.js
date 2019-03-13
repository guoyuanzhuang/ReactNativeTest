import { AppRegistry } from 'react-native';
// import App from './activity/App';
// import App from './activity/LoginActivity';
// import App from './activity/ScrollViewActivity';
// import App from './activity/ListViewActivity';
// import App from './activity/ScrollViewActivity';
import App from './activity/navigation/RootActivity';
import { YellowBox } from 'react-native';

//去除警告
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('helloword', () => App);

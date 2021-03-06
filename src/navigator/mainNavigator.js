import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList151560Navigator from '../features/ArticleList151560/navigator';
import ArticleList151559Navigator from '../features/ArticleList151559/navigator';
import ArticleList151558Navigator from '../features/ArticleList151558/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList151560: { screen: ArticleList151560Navigator },
ArticleList151559: { screen: ArticleList151559Navigator },
ArticleList151558: { screen: ArticleList151558Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;

import React, {Component} from 'react';
import {Button, Platform, ScrollView, SafeAreaView} from 'react-native';
import {
    createStackNavigator,
    createDrawerNavigator,
    DrawerItems,
    createBottomTabNavigator,
    createMaterialTopTabNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'; //导出矢量图标
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomePage from './HomePage';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Login from './Login';
import FasterListDemo from './FasterListDemo';
import SwipeableFasterListDemo from './SwipeableFasterListDemo';
import SectionListDemo from './SectionListDemo';



// 导航器

const AppStack = createStackNavigator({
    Home: {
        screen: HomePage
    },
    Page1: {
        screen: Page1
    }
});

const AuthStack = createStackNavigator({
    Login: {
        screen: Login
    }
}, {navigationOptions: {}});



const DrawerNav = createDrawerNavigator({
    Page4: {
        screen: Page4,
        navigationOptions: {
            drawerLabel: 'Page4',
            drawerIcon: ({tinColor}) => (
                <MaterialIcons
                    name={'drafts'}
                    size={24}
                    style={{color: tinColor}}
                />
            ),
        }
    },
    Page5: {
        screen: Page5,
        navigationOptions: {
            drawerLabel: 'Page5',
            drawerIcon: ({tinColor}) => (
                <MaterialIcons
                    name={'move-to-inbox'}
                    size={24}
                    style={{color: tinColor}}
                />
            ),
        }
    }
}, {
    initialRouteName: 'Page4',//初使路由
    contentOptions: {
        activeTintColor: '#e91e63'
    },
    contentComponent: (props) => (  // 自定义侧边栏样式
        <ScrollView style={{backgroundColor: '#789', flex: 1}}>
            <SafeAreaView
                forceInset={{top: 'always', horizontal: 'never'}}
            >
                <DrawerItems {...props}/>

            </SafeAreaView>
        </ScrollView>
    )
});

const AppTopNavigator = createMaterialTopTabNavigator({
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: 'All'
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: "iOS"
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: "React"
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: "React Native"
            }
        },
        Page5: {
            screen: Page5,
            navigationOptions: {
                tabBarLabel: "Devio"
            }
        },
    }, {
        tabBarOptions: {
            tabStyle: {mindWidth: 50},
            upperCaseLabel: false, // 标签是否大写，默认是true
            scrollEnabled: true, // 是否支持选项卡滚动，默认false
            style: {
                backgroungColor: '#678' //tabbar背景颜色
            },
            indicatorStyle: {
                height: 2,
                backgroundColor: 'white'
            },// 标签指示器的样式
            labelStyle: {
                fontSize: 13,
                marginTop: 6,
                marginBottom: 7
            }//文字样式
        }
    }
);
const AppBottomNavigator = createBottomTabNavigator({
        Page1: {
            screen: Page1,
            navigationOptions: {
                tabBarLabel: '最热',
                tabBarIcon: ({tinColor, focused}) => (
                    <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{color: tinColor}}
                    />
                )
            }
        },
        Page2: {
            screen: Page2,
            navigationOptions: {
                tabBarLabel: "趋势",
                tabBarIcon: ({tinColor, focused}) => (
                    <Ionicons
                        name={'ios-people'}
                        size={26}
                        style={{color: tinColor}}
                    />
                )
            }
        },
        Page3: {
            screen: Page3,
            navigationOptions: {
                tabBarLabel: "收藏",
                tabBarIcon: ({tinColor, focused}) => (
                    <Ionicons
                        name={'ios-chatboxes'}
                        size={26}
                        style={{color: tinColor}}
                    />
                )
            }
        },
        Page4: {
            screen: Page4,
            navigationOptions: {
                tabBarLabel: "我的",
                tabBarIcon: ({tinColor, focused}) => (
                    <Ionicons
                        name={'ios-aperture'}
                        size={26}
                        style={{color: tinColor}}
                    />
                )
            }
        },
    }, {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        }
    }
);


const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage
    },
    Page1: {
        screen: Page1,
        navigationOptions: ({navigation}) => ({ // 动态配置
            title: `${navigation.state.params.name}页面名`
        })
    },
    Page2: {
        screen: Page2,
        navigationOptions: { //静态配置，定义页面的导航数据
            title: 'This is Page2'
        }
    },
    Page3: {
        screen: Page3,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is Page3',
                headerRight: (<Button
                    title={params.mode === 'edit' ? '保留' : '编辑'}
                    onPress={() => setParams({mode: params.mode === 'edit' ? '' : "edit"})}
                />)
            }

        }
    },
    Page4: {
        screen: Page4,
        navigationOptions: { //静态配置，定义页面的导航数据
            title: 'This is Page4'
        }
    },
    Bottom: {
        screen: AppBottomNavigator,
        navigationOptions: {
            title: 'BottomNavigator'
        }
    },
    Top: {
        screen: AppTopNavigator,
        navigationOptions: {
            title: 'TopNavigator'
        }
    },
    DrawerNav: {
        screen: DrawerNav,
        navigationOptions: {
            title: 'DrawerNav'
        }
    },
    FasterListDemo:{
        screen:FasterListDemo,
        navigationOptions: {
            title: 'FasterListDemo'
        }
    },
    SwipeableFasterListDemo:{
        screen:SwipeableFasterListDemo,
        navigationOptions: {
            title: 'SwipeableFasterListDemo'
        }
    },
    SectionListDemo:{
        screen:SectionListDemo,
        navigationOptions: {
            title: 'SectionListDemo'
        }
    }

});


const SwitchNavigator = createSwitchNavigator({
    Auth: AuthStack,
    App: AppStackNavigator
}, {
    initialRouteName: 'Auth'
})


// const AppStackNavigation = createAppContainer(AppStackNavigator);
const AppStackNavigation = createAppContainer(SwitchNavigator);
module.exports = AppStackNavigation;

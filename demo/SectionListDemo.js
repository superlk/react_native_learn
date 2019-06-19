import React, {Component} from 'react';
import {
    Platform, Button, FlatList, StyleSheet, Text, View,
    RefreshControl,
    ActivityIndicator,// 小菊花loading
    SectionList //分组列表
} from 'react-native';

type Props = {};

const CITY_NAMES = [{data: ['北京', '上海', "广州", "深圳"], title: "一线城市"},
    {data: ["四川", "江苏", "南京", "湖南", "成都", "武汉", "浙江"], title: '二线城市'},
    {data: ["新疆", "杭州", "云南", "青岛", "吉林"], title: '三线城市'}]
export default class SectionListDemo extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES
        }
    }

    _renderItem = (data) => {
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    };

    // 下拉顶部，获取数据方法
    loadData(refreshing) {
        if (refreshing) {
            this.setState({
                isLoading: true
            });
        }

        setTimeout(() => {
            let dataArray = [];
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])
                }

            } else {
                // let data = ['1', '2', '3'];
                dataArray = this.state.dataArray.concat(CITY_NAMES)
            }

            this.setState({
                dataArray: dataArray,
                isLoading: false
            })
        }, 2000)
    };

    // 上拉到顶部，
    genIndicator() {
        return <View style={styles.indicatorContainer}>
            <ActivityIndicator
                style={styles.indicator}
                size={'large'}
                animating={true}
                color={'red'}
            />
            <Text>正在加载更多</Text>

        </View>
    }

// 分组标题数据
    renderSectionHeader({section}) {
        return <View style={styles.sectionHeader}>
            <Text style={styles.text}>{section.title}</Text>
        </View>


    }

    render() {
        return (
            <View style={styles.container}>

                <SectionList  //分组列表
                    sections={this.state.dataArray}
                    // sections={CITY_NAMES}
                    renderItem={(data) => this._renderItem(data)}//数据展示
                    // refreshing={this.state.isLoading} //下拉刷新
                    // onRefresh={() => {  // 下拉后触发方法
                    //     this.loadData()
                    // }}
                    refreshControl={// 下拉带样式，
                        <RefreshControl
                            title={"Loading"}
                            colors={['red']}
                            tintColor={'orange'}
                            titleColor={'red'}
                            refreshing={this.state.isLoading} //下拉刷新
                            onRefresh={() => {  // 下拉后触发方法 样式
                                this.loadData(true)
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()} // 刷新到底部时候布局
                    onEndReached={() => this.loadData()} //上拉到底部获取数据方法
                    renderSectionHeader={(data) => this.renderSectionHeader(data)}// 分组标题
                    ItemSeparatorComponent={()=><View style={styles.separator}/>} // 加入分割线


                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fafafa"
    },
    item: {
        // backgroundColor: '#169',
        height: 80,
        // marginRight: 15,
        // marginLeft: 15,
        marginBottom: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'black',
        fontSize: 20

    },
    indicatorContainer: {
        alignItems: 'center'

    },
    indicator: {
        margin: 10
    },
    sectionHeader:{
        height: 50,
        backgroundColor: '#93ebbe',
        alignItems:'center',
        justifyContent: 'center'
    },
    separator:{
        height:1,
        backgroundColor:'gray',
        flex: 1
    }
});

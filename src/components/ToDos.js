import React from 'react';
import { StyleSheet, View, FlatList, Image} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeToDo } from '../store/redusers/main';
import { Item } from './item';

export const ToDos = React.memo(({}) => {

    const dispatch = useDispatch();

    const items = useSelector(state => state.main.todos);
    const applicationTheme = useSelector(state => state.main.applicationTheme);

    const removeTodoHandler = (id) => {
        dispatch(removeToDo(id));
    };

    const renderItem = ({ item }) => (
        <Item 
            todo={item}
            text={item.text} 
            applicationTheme={applicationTheme} 
            onRemove={removeTodoHandler}
            /> 
    );

    let content = (
        <FlatList style={{flex: 1, paddingHorizontal: 10}}
                  data={items}
                  keyExtractor={item => item.id}
                  renderItem={renderItem}/>
                  
    );

    if (!items.length) {
        content = <View>
            <Image source={require('../../assets/img/cat.png')} style={styles.img}/>
        </View>
    }

    return (
      <View style={[{flex: 1, paddingVertical: 0, position: 'relative', zIndex: 100}]}>

            {content}

      </View>
    );
})


const styles = StyleSheet.create({
    doneText: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: '100%', 
        height: 400
    },
    center: {
        flex: 1, 
        justifyContent: 'space-evenly', 
        alignItems: 'center'
    }
});

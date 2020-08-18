import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput, Image } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import smileIcon from '../../assets/images/icons/smile.png';

import api from '../../services/api';

import { Colors } from '../../assets/styles/colors';
import styles from './styles';


function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            handleFiltersSubmit();
            loadFavorites();
        });
        
        return unsubscribe;
      }, [navigation]);

    async function handleFiltersSubmit() {
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(response.data);
        setIsFilterVisible(false);
    }

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if(response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) => teacher.id);

                console.log(favoritedTeachers);
                
                setFavorites(favoritedTeachersId);
            }
        });
    }

    function handleToggleFilterVisibility() {
        setIsFilterVisible(!isFilterVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader
                title="Proffys disponíveis"
                headerRight={(
                    <View style={styles.headerRight}>
                        <Image source={smileIcon} />
                        <Text style={[styles.label, styles.headerRightText]}>{teachers.length} proffy{teachers.length > 1 && 's'}</Text>
                    </View>
                    )}
                >
                <View style={styles.filterButtonContainer}>
                    <BorderlessButton style={styles.filterButton} onPress={handleToggleFilterVisibility}>
                        <Feather name="filter" size={20} color={Colors.secundary}/>

                        <Text style={styles.label}>Filtrar por dia, hora e matéria</Text>
                        
                        <Feather name={isFilterVisible ? "chevron-up" : "chevron-down"} size={20} color={'#A380F6'}/>
                    </BorderlessButton>
                    </View>
                
                {isFilterVisible && ( 
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a matéria?"
                        placeholderTextColor={Colors.input_placeholder}/>

                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Dia da semana</Text>
                                <TextInput style={styles.input}
                                value={week_day}
                                onChangeText={text => setWeekDay(text)}
                                placeholder="Qual a dia?"
                                placeholderTextColor={Colors.input_placeholder}/>
                            </View>

                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput style={styles.input}
                                value={time}
                                onChangeText={text => setTime(text)}
                                placeholder="Qual o horário?"
                                placeholderTextColor={Colors.input_placeholder}/>
                            </View>
                        </View>
                        
                        <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                            <Text style={styles.submitButtonText}>Filtrar</Text>
                        </RectButton>
                    </View>
                )}
            </PageHeader>

            <ScrollView style={styles.teacherList} 
            contentContainerStyle={{ paddingHorizontal: 16 }} >
                {teachers.map((teacher:Teacher) => {
                    return (
                    <TeacherItem 
                        key={teacher.id}
                        teacher={teacher}
                        favorited={favorites.includes(teacher.id)}
                    />)
                })}
            </ScrollView>
        </View>
    )
}

export default TeacherList;
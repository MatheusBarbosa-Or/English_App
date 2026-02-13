import {Text, View, TouchableOpacity, TextInput, Alert, useColorScheme, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {darkColors, lightColors, makeStyles} from "@/src/app/mainPageTeacher/style";
import {router} from "expo-router";
import {useState, useEffect, useMemo, useRef, useCallback} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

export default function MainPageTeacher() {

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? darkColors : lightColors;
    const styles = makeStyles(colors);

    const handleNavigation  = () =>{
        router.push({pathname: "/calendarPage"})
    }

    return (
        <SafeAreaView style={styles.screen} edges={["top"]}>
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <View style={styles.topBar}>
                    <View style={styles.topLeft}>
                        <View style={styles.avatarWrap}>
                            <Image source={require('@/src/assets/images/Teacher_Profile.png')} style={styles.avatarImg}/>
                        </View>

                        <View style={styles.greetingWrap}>
                            <Text style={styles.welcomeSmall}>Welcome Back,</Text>
                            <Text style={styles.teacherName}>Ana Clara</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.bellBtn}>
                        <MaterialCommunityIcons name={"bell"} size={24} color={colors.text}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.heroCard}>
                    <View style={styles.heroMedia}>
                        <Image source={require('@/src/assets/images/Lesson4.png')} style={styles.heroImage} />

                        <View style={styles.liveOverlay} pointerEvents="none">
                            <View style={styles.livePill}>
                                <Text style={styles.livePillText}>LIVE NOW</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.heroBody}>
                        <Text style={styles.tagText}>Upcoming Class</Text>
                        <Text style={styles.classTitle}>Basic Grammar</Text>
                        <View style={styles.studentsRow}>
                            <Ionicons name={"people"} size={16} color={colors.muted}/>
                            <Text style={styles.studentsText}>Students joined</Text>
                        </View>

                        <View style={styles.heroFooter}>
                            <Text style={styles.startsInText}>Starts in 5m</Text>
                            <TouchableOpacity style={styles.joinBtn} onPress={() => router.back()}>
                                <Text style={styles.joinBtnText}>Join Classroom</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.sectionHeaderRow}>
                    <Text style={styles.sectionTitle}>Today's Schedule</Text>
                    <TouchableOpacity onPress={handleNavigation}>
                        <Text style={styles.sectionAction}>View Calendar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.scheduleCard}>
                    <View style={styles.timelineLine} />

                    <View style={styles.scheduleRow}>
                        <View style={[styles.iconCircle, styles.iconBgBlue]}>
                            <MaterialCommunityIcons name="book-open-variant" size={24} color={colors.primary} />
                        </View>
                        <View style={styles.scheduleTextWrap}>
                            <Text style={styles.scheduleTitle}>Beginner Grammar Essentials</Text>
                            <Text style={styles.scheduleTime}>09:00 AM - 10:00 AM</Text>
                        </View>
                    </View>

                    <View style={styles.scheduleRow}>
                        <View style={[styles.iconCircle, styles.iconBgGreen]}>
                            <MaterialCommunityIcons name="briefcase" size={24} color={colors.green} />
                        </View>
                        <View style={styles.scheduleTextWrap}>
                            <Text style={styles.scheduleTitle}>Business English Masterclass</Text>
                            <Text style={styles.scheduleTime}>11:30 AM - 12:30 PM</Text>
                        </View>
                    </View>

                    <View style={styles.scheduleRow}>
                        <View style={[styles.iconCircle, styles.iconBgOrange]}>
                            <MaterialCommunityIcons name="message-processing" size={24} color={colors.orange} />
                        </View>
                        <View style={styles.scheduleTextWrap}>
                            <Text style={styles.scheduleTitle}>Advanced Conversation</Text>
                            <Text style={styles.scheduleTime}>02:00 PM - 03:00 PM</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>

            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <MaterialCommunityIcons name="home" size={24} color={colors.primary} />
                    <Text style={styles.navLabelActive}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <MaterialIcons name="school" size={24} color={colors.muted} />
                    <Text style={styles.navLabel}>Classes</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="people" size={24} color={colors.muted} />
                    <Text style={styles.navLabel}>Students</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name="settings-sharp" size={24} color={colors.muted} />
                    <Text style={styles.navLabel}>Settings</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
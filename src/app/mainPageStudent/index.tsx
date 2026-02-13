import {Text, View, TouchableOpacity, TextInput, Alert, useColorScheme, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {darkColors, lightColors, makeStyles} from "@/src/app/mainPageStudent/style";
import {router} from "expo-router";
import {useState, useEffect, useMemo, useRef} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";

export default function MainPageStudent() {

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? darkColors : lightColors;
    const styles = makeStyles(colors);

    const handleNavigate = ()=>{
        router.push({pathname: "/lessonPage"});
    }

    return(
        <SafeAreaView style={styles.screen} edges={["top"]}>
            <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.topAppBar}>

                    <TouchableOpacity style={styles.avatarWrap} onPress={() => router.back()}>
                        <View style={styles.avatarImg}>
                            <MaterialCommunityIcons name={"face-woman-profile"} color={colors.text} size={24}/>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.greetingWrap}>
                        <Text style={styles.welcomeSmall}>Welcome back!</Text>
                        <Text style={styles.greetingTitle}>Good morning, Alex!</Text>
                    </View>

                    <TouchableOpacity style={styles.bellBtn}>
                        <MaterialCommunityIcons name={"bell"}  color={colors.text} size={24}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.progressSection}>
                    <View style={styles.progressCard}>
                        <View style={styles.progressHeaderRow}>
                            <Text style={styles.progressTitle}>Learning Progress</Text>
                            <View style={styles.levelPill}>
                                <Text style={styles.levelPillText}>Level B2</Text>
                            </View>
                        </View>

                        <View style={styles.progressTrack}>
                            <View style={styles.progressFill}/>
                        </View>

                        <View style={styles.progressMetaRow}>
                            <Text style={styles.progressMetaText}>3/5 Courses Completed</Text>
                            <Text style={styles.progressMetaText}>75% of goal</Text>
                        </View>
                    </View>
                </View>

                <Text style={styles.sectionH2}>Upcoming Session</Text>

                <View style={styles.nextCardWrap}>
                    <View style={styles.nextCard}>
                        <Image source={require("@/src/assets/images/Teacher.png")} style={styles.nextHero}/>

                        <View style={styles.nextBody}>
                            <Text style={styles.teacherName}>Ms. Ana Clara</Text>
                            <Text style={styles.className}>Basic Conversation Skills</Text>

                            <View style={styles.divider}/>

                            <View style={styles.nextFooterRow}>
                                <View style={styles.metaCol}>
                                    <View style={styles.metaRow}>
                                        <MaterialCommunityIcons name={"calendar"} style={styles.metaText}/>
                                        <Text style={styles.metaText}>Today at 10:00 AM</Text>
                                    </View>

                                    <View style={styles.metaRow}>
                                        <MaterialCommunityIcons name={"clock"} style={styles.metaWarnText}/>
                                        <Text style={styles.metaWarnText}>Starts in 5:00</Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={styles.joinBtn}>
                                    <Text style={styles.joinBtnText}>Join Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.timerRow}>
                    <View style={styles.timerCol}>
                        <View style={styles.timerBoxActive}>
                            <Text style={styles.timerValueActive}>15</Text>
                        </View>
                        <View style={styles.timerLabelWrap}>
                            <Text style={styles.timerLabel}>Minutes</Text>
                        </View>
                    </View>

                    <View style={styles.timerCol}>
                        <View style={styles.timerBox}>
                            <Text style={styles.timerValue}>00</Text>
                        </View>
                        <View style={styles.timerLabelWrap}>
                            <Text style={styles.timerLabel}>Seconds</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.recentHeaderRow}>
                    <Text style={styles.recentHeaderText}>Recent Lessons</Text>
                    <TouchableOpacity>
                        <Text style={styles.viewAllBtnText}>View All</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal={true}>
                    <View style={styles.carouselContent}>
                        <TouchableOpacity style={styles.lessonCard} onPress={handleNavigate}>
                            <Image source={require("@/src/assets/images/Lesson.png")} style={styles.lessonThumb}/>
                            <Text style={styles.lessonTitle}>Basic Grammar</Text>
                            <Text style={styles.lessonSubtitle}>Unit 1: Objects</Text>

                            <View style={styles.lessonProgressRow}>
                                <View style={styles.lessonTrack}>
                                    <View style={styles.lessonFillGreen}/>
                                </View>
                                <Text style={styles.lessonPctGreen}>100%</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.lessonCard}>
                            <Image source={require("@/src/assets/images/Lesson2.png")} style={styles.lessonThumb}/>
                            <Text style={styles.lessonTitle}>Basic Grammar</Text>
                            <Text style={styles.lessonSubtitle}>Unit 2: Speaking</Text>

                            <View style={styles.lessonProgressRow}>
                                <View style={styles.lessonTrack}>
                                    <View style={styles.lessonFillGreen}/>
                                </View>
                                <Text style={styles.lessonPctGreen}>100%</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.lessonCard}>
                            <Image source={require("@/src/assets/images/Lesson3.png")} style={styles.lessonThumb}/>
                            <Text style={styles.lessonTitle}>Basic Grammar</Text>
                            <Text style={styles.lessonSubtitle}>Unit 3: Conversation</Text>

                            <View style={styles.lessonProgressRow}>
                                <View style={styles.lessonTrack}>
                                    <View style={styles.lessonFillGreen}/>
                                </View>
                                <Text style={styles.lessonPctGreen}>100%</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ScrollView>

            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem}>
                    <MaterialCommunityIcons name={"home"} size={24} color={colors.primary} />
                    <Text style={styles.navLabelActive}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity  style={styles.navItem}>
                    <MaterialCommunityIcons name={"book"} size={24} color={colors.muted}/>
                    <Text style={styles.navLabel}>Lessons</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <MaterialCommunityIcons name={"book-open-blank-variant"} size={24} color={colors.muted}/>
                    <Text style={styles.navLabel}>Library</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem}>
                    <Ionicons name={"person"}  size={24} color={colors.muted}/>
                    <Text style={styles.navLabel}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
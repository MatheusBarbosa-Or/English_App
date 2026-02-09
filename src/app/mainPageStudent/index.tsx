import {Text, View, TouchableOpacity, TextInput, Alert, useColorScheme, Animated, Easing, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import {darkColors, lightColors, makeStyles} from "@/src/app/mainPageStudent/style";
import {router} from "expo-router";
import {useState, useEffect, useMemo, useRef} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function MainPageStudent() {

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? darkColors : lightColors;
    const styles = makeStyles(colors);


    return(
        <SafeAreaView style={styles.screen} edges={["top"]}>
            <View style={styles.container}>
                <View style={styles.topAppBar}>
                    <View style={styles.avatarWrap}>
                        <View style={styles.avatarImg}>
                            <MaterialCommunityIcons name={"face-woman-profile"} color={colors.text} size={24}/>
                        </View>
                    </View>

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
                        <View style={styles.nextHero}>
                            <Image source={require("@/src/assets/images/teacher.png")}></Image>
                        </View>
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}
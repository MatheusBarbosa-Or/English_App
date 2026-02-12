import {Text, View, TouchableOpacity, TextInput, Alert, useColorScheme, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {darkColors, lightColors, makeStyles} from "@/src/app/mainLessonPage/style";
import {router} from "expo-router";
import {useState, useEffect, useMemo, useRef} from "react";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';

export default function MainLessonPage(){
    const scheme = useColorScheme();
    const colors = scheme === "dark" ? darkColors : lightColors;
    const styles = makeStyles(colors);

    return (
        <SafeAreaView style={styles.screen} edges={["top"]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerIconWrap}>
                        <Ionicons name={"chevron-back"} color={colors.text} size={24}></Ionicons>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}> Present Perfect Lesson </Text>

                    <TouchableOpacity style={styles.headerIconEnd}>
                        <Feather name={"more-horizontal"} color={colors.text} size={24}></Feather>
                    </TouchableOpacity>
                </View>

                <View style={styles.videoContainer}>
                    <View style={styles.videoCard}>
                        <Image source={require("@/src/assets/images/Lesson5.png")} style={styles.videoImage}/>
                        <TouchableOpacity style={styles.playButton}>
                            <Ionicons name={"play-sharp"} color={colors.text} size={24}/>
                        </TouchableOpacity>

                        <View style={styles.videoOverlayBottom}>
                            <View style={styles.progressRow}>
                                <TouchableOpacity style={styles.progressTrack}>
                                    <View style={styles.progressFill}></View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.timeRow}>
                                <Text style={styles.timeTextStart}> 12:45 </Text>
                                <Text style={styles.timeTextEnd}> 35:20 </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.sectionTitleWrap}>
                    <Text style={styles.sectionTitle}> Study Materials </Text>
                </View>

                <View style={styles.bodyTextWrap}>
                    <Text style={styles.bodyText}>
                        In this lesson, we explore the nuances of the Present Perfect tense, including its use whith
                        ever, never, already, and yet. This recording covers common mistakes, pronunciation tips and
                        provides real-world examples dor daily conversation.
                    </Text>
                </View>

                <View style={styles.pdfCardWrap}>
                    <View style={styles.pdfCard}>
                        <View style={styles.pdfRow}>
                            <View style={styles.pdfIconBox}>
                                <MaterialCommunityIcons name={"file-document"} color={colors.text} size={24}></MaterialCommunityIcons>
                            </View>
                            <View style={styles.pdfWrapDirection}>
                                <Text style={styles.pdfTitle}> Lesson Slides e Exercises </Text>
                                <Text style={styles.pdfSubtitle}> PDF Document · 4.2MB </Text>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.downloadButton}>
                            <Feather name={"download"}  color={colors.text} size={24}/>
                            <Text style={styles.downloadButtonText}>Download PDF</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottomBar}>
                    <TouchableOpacity style={styles.quizButton}>
                        <MaterialCommunityIcons name={"help-box-multiple-outline"} color={colors.text} size={24}/>
                        <Text style={styles.quizButtonText}> Start Lesson Quiz </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
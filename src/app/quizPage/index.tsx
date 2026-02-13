import {Text, View, TouchableOpacity, TextInput, Alert, useColorScheme, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {darkColors, lightColors, makeStyles} from "@/src/app/quizPage/style";
import {router} from "expo-router";
import {useState, useEffect, useMemo, useRef} from "react";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function QuizPage(){

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? darkColors : lightColors;
    const styles = makeStyles(colors);

    return(
        <SafeAreaView style={styles.screen} edges={["top"]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.headerIconWrap} onPress={() => router.back()}>
                        <MaterialIcons name="arrow-back-ios-new"  size={24} color= {colors.text} />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}> English Quiz </Text>

                    <TouchableOpacity style={styles.headerIconWrap}>
                        <MaterialCommunityIcons name={"information-variant-circle"} color={colors.text} size={30}/>
                    </TouchableOpacity>
                </View>

                <View style={styles.progressSection}>
                    <View style={styles.progressHeaderRow}>
                        <Text style={styles.progressLabel}> Lesson Progress </Text>
                        <Text style={styles.progressCounter}> Question 3 of 10 </Text>
                    </View>

                    <View style={styles.progressTrack}>
                        <View style={styles.progressFill}/>
                    </View>
                </View>

                <View style={styles.questionWrap}>
                    <Text style={styles.questionText}>
                        Select the correct past tense form:
                        "She ___ to the market yesterday."
                    </Text>
                </View>

                <View style={styles.optionsWrap}>
                    <TouchableOpacity style={styles.optionCard}>
                        <View style={styles.radioOuter}/>
                        <View style={styles.optionTextWrap}>
                            <Text style={styles.optionTitle}> Go </Text>
                            <Text style={styles.optionSubtitle}> Present tense </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionCardSelected}>
                        <View style={styles.radioOuterSelected}>
                            <View style={styles.radioInner}/>
                        </View>
                        <View style={styles.optionTextWrap}>
                            <Text style={styles.optionTitle}> Went </Text>
                            <Text style={styles.optionSubtitle}> Past tense </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionCard}>
                        <View style={styles.radioOuter}/>
                        <View style={styles.optionTextWrap}>
                            <Text style={styles.optionTitle}> Gone </Text>
                            <Text style={styles.optionSubtitle}> Past participle </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionCard}>
                        <View style={styles.radioOuter}/>
                        <View style={styles.optionTextWrap}>
                            <Text style={styles.optionTitle}> Going </Text>
                            <Text style={styles.optionSubtitle}> Present participle </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.footerInner}>
                    <TouchableOpacity style={styles.nextButton}>
                        <Text style={styles.nextButtonText}>Next</Text>
                        <MaterialCommunityIcons name={"arrow-right"} style={styles.nextButtonIcon} size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

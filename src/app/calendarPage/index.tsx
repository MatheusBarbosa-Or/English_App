import {Text, View, TouchableOpacity, TextInput, Alert, useColorScheme, Image, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context"
import {darkColors, lightColors, makeStyles} from "@/src/app/calendarPage/style";
import {router} from "expo-router";
import {useState, useEffect, useMemo, useRef} from "react";
import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Calendar } from "react-native-calendars";

export default function CalendarPage() {
    const scheme = useColorScheme();
    const colors = scheme === "dark" ? darkColors : lightColors;
    const styles = makeStyles(colors);

    const [selected, setSelected] = useState("2023-09-05");

    const baseMarks = useMemo(() => {
        return {
            "2023-09-01": { marked: true, dotColor: colors.primary },
            "2023-09-04": { marked: true, dotColor: colors.primary },
            "2023-09-07": { marked: true, dotColor: colors.primary },
        } as Record<string, any>;
    }, [colors.primary]);

    const markedDates = useMemo(() => {
        if (!selected) return baseMarks;

        const prev = baseMarks[selected] ?? {};
        return {
            ...baseMarks,
            [selected]: {
                ...prev,
                selected: true,
                selectedColor: colors.primary,
                selectedTextColor: "#fff",
            },
        };
    }, [baseMarks, selected, colors.primary]);

    return (
        <SafeAreaView style={styles.screen} edges={["top"]}>
            <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <View style={styles.headerInner}>
                        <View style={styles.headerLeft}>
                            <MaterialCommunityIcons name="calendar" size={24} style={styles.headerIcon} color={colors.primary} />
                            <Text style={styles.headerTitle}>Class Calendar</Text>
                        </View>
                        <View style={styles.headerRight}>
                            <TouchableOpacity style={styles.headerIcon}>
                                <MaterialCommunityIcons name="bell" size={24}  color={colors.text} />
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.avatarBtn} onPress={() => router.back()}>
                                <Image source={require("@/src/assets/images/Avatar1.png")} style={styles.avatarImg}/>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.main}>
                    <View style={styles.calendarCard}>
                        <Calendar
                            current={"2023-09-01"}
                            enableSwipeMonths
                            hideExtraDays
                            onDayPress={(d) => setSelected(d.dateString)}
                            markingType="dot"
                            markedDates={markedDates}
                            style={styles.calendar}
                            renderArrow={(dir) => (
                                <MaterialIcons
                                    name={dir === "left" ? "chevron-left" : "chevron-right"}
                                    size={22}
                                    color={colors.text}
                                />
                            )}
                            theme={{
                                calendarBackground: colors.surface,
                                monthTextColor: colors.text,
                                dayTextColor: colors.text,
                                textSectionTitleColor: colors.muted2,

                                selectedDayBackgroundColor: colors.primary,
                                selectedDayTextColor: "#fff",
                                todayTextColor: colors.primary,

                                arrowColor: colors.text,

                                // deixa mais parecido com o mock
                                textMonthFontWeight: "900",
                                textMonthFontSize: 18,
                                textDayFontWeight: "700",
                                textDayHeaderFontWeight: "800",
                                textDayHeaderFontSize: 12,
                            }}
                        />
                    </View>

                    <View style={styles.segmentedWrap}>
                        <View style={styles.segmentedOuter}>
                            <TouchableOpacity style={styles.segment}>
                                <Text style={styles.segmentText}>All</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.segment, styles.segmentActive]}>
                                <Text style={[styles.segmentText, styles.segmentTextActive]}>Upcoming</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.segment}>
                                <Text style={styles.segmentText}>Completed</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.sectionHeaderRow}>
                        <Text style={styles.sectionTitle}>Schedule for Today</Text>
                        <TouchableOpacity>
                            <Text style={styles.sectionAction}>View week</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.listWrap}>
                        <TouchableOpacity style={styles.listItem}>
                            <View style={styles.itemIconBox}>
                                <MaterialCommunityIcons name="book" size={24} color={colors.primary} />
                            </View>

                            <View style={styles.itemInfo}>
                                <Text style={styles.itemTitle}>Business English</Text>
                                <View style={styles.itemTimeRow}>
                                    <MaterialCommunityIcons name="clock" size={12} color={colors.muted} />
                                    <Text style={styles.itemTimeText}>10:00 AM - 11:30 AM</Text>
                                </View>
                            </View>

                            <View style={[styles.statusPill, styles.statusLive]}>
                                <Text style={styles.statusTextLive}>LIVE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.bottomNav}>
                <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
                    <MaterialCommunityIcons name="home" size={24} color={colors.primary} />
                    <Text style={[styles.navLabel, styles.navLabelActive]}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
                    <MaterialCommunityIcons name="book" size={24} color={colors.muted} />
                    <Text style={styles.navLabel}>Lessons</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
                    <MaterialCommunityIcons name="book-open-blank-variant" size={24} color={colors.muted} />
                    <Text style={styles.navLabel}>Library</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.navItem} activeOpacity={0.8}>
                    <Ionicons name="person" size={24} color={colors.muted} />
                    <Text style={styles.navLabel}>Profile</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
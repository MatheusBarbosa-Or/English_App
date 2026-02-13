import { Platform, StyleSheet } from "react-native";

export type ThemeColors = {
    primary: string;

    bg: string;
    surface: string;
    surfaceDark: string;

    text: string;
    muted: string;
    muted2: string;

    border: string;

    track: string;

    greenBg: string;
    greenText: string;

    soonBg: string;
    soonText: string;

    tabBg: string;
    tabBorder: string;

    blueSoft: string;
    greenSoft: string;
    orangeSoft: string;
};

export const lightColors: ThemeColors = {
    primary: "#135bec",

    bg: "#f6f6f8",
    surface: "#ffffff",
    surfaceDark: "#1a2130",

    text: "#0d121b",
    muted: "#4c669a",
    muted2: "#9ca3af",

    border: "#e5e7eb",
    track: "#e5e7eb",

    greenBg: "#dcfce7",     // green-100
    greenText: "#15803d",   // green-700

    soonBg: "rgba(19,91,236,0.10)", // primary/10
    soonText: "#135bec",

    tabBg: "rgba(255,255,255,0.80)",
    tabBorder: "#e5e7eb",

    blueSoft: "rgba(19,91,236,0.10)",
    greenSoft: "rgba(34,197,94,0.14)",
    orangeSoft: "rgba(249,115,22,0.14)",

};

export const darkColors: ThemeColors = {
    primary: "#3b82f6",

    bg: "#101622",          // background-dark do HTML
    surface: "#1a2130",     // cards no dark
    surfaceDark: "#2a3447", // segment ativo

    text: "#ffffff",
    muted: "#9ca3af",
    muted2: "#6b7280",

    border: "rgba(255,255,255,0.10)",
    track: "rgba(255,255,255,0.12)",

    greenBg: "rgba(34,197,94,0.18)", // green-900/30 aprox
    greenText: "#4ade80",

    soonBg: "rgba(59,130,246,0.18)", // primary/18
    soonText: "#93c5fd",

    tabBg: "rgba(15,23,42,0.80)", // slate-900/80
    tabBorder: "rgba(255,255,255,0.10)",

    blueSoft: "rgba(59,130,246,0.18)",
    greenSoft: "rgba(34,197,94,0.18)",
    orangeSoft: "rgba(251,146,60,0.18)",

};

const cardShadow = Platform.select({
    ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
    },
    android: { elevation: 2 },
    default: {},
});

const tabShadow = Platform.select({
    ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 18,
        shadowOffset: { width: 0, height: -6 },
    },
    android: { elevation: 10 },
    default: {},
});

export const makeStyles = (c: ThemeColors) =>
    StyleSheet.create({
        // ===== Base =====
        screen: {
            flex: 1,
            backgroundColor: c.bg,
        },
        container: {
            flex: 1,
            backgroundColor: c.bg,
        },

        // Use em: <ScrollView contentContainerStyle={styles.content}>
        content: {
            paddingBottom: 140, // espaço p/ tab fixa + safe area
        },

        // ===== Header (sticky no HTML) =====
        header: {
            backgroundColor: c.tabBg,
            borderBottomWidth: 1,
            borderBottomColor: c.tabBorder,
        },
        headerInner: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 14,
            maxWidth: 420,
            alignSelf: "center",
            width: "100%",
        },
        headerLeft: {
            flexDirection: "row",
            alignItems: "center",
        },
        headerIcon: {
            marginRight: 10,
        },
        headerTitle: {
            fontSize: 20,
            fontWeight: "900",
            color: c.text,
            letterSpacing: -0.2,
        },
        headerRight: {
            flexDirection: "row",
            alignItems: "center",
        },
        iconBtn: {
            width: 40,
            height: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 10,
        },
        avatarBtn: {
            width: 36,
            height: 36,
            borderRadius: 18,
            overflow: "hidden",
            borderWidth: 2,
            borderColor: "rgba(19,91,236,0.20)", // primary/20
        },
        avatarImg: {
            width: "100%",
            height: "100%",
        },

        // ===== Main wrapper =====
        main: {
            maxWidth: 420,
            alignSelf: "center",
            width: "100%",
            paddingTop: 8,
        },

        // ===== Calendar card =====
        calendarCard: {
            marginTop: 8,
            marginHorizontal: 16,
            padding: 16,
            borderRadius: 16, // rounded-xl
            backgroundColor: c.surface,
            borderWidth: 1,
            borderColor: c.border,
            ...cardShadow,
        },
        calendar: {
            borderRadius: 16,
            overflow: "hidden",
        },

        // ===== Segmented =====
        segmentedWrap: {
            paddingHorizontal: 16,
            paddingTop: 22,
            paddingBottom: 14,
        },
        segmentedOuter: {
            height: 44, // h-11
            borderRadius: 16,
            padding: 4,
            backgroundColor: "rgba(0,0,0,0.06)", // gray-200/50
            flexDirection: "row",
            alignItems: "center",
        },
        segment: {
            flex: 1,
            height: "100%",
            borderRadius: 12,
            alignItems: "center",
            justifyContent: "center",
        },
        segmentActive: {
            backgroundColor: c.surface,
            borderRadius: 12,
            ...cardShadow,
        },
        segmentText: {
            fontSize: 14,
            fontWeight: "800",
            color: c.muted2,
        },
        segmentTextActive: {
            color: c.primary,
        },

        // ===== Section header =====
        sectionHeaderRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginBottom: 8,
        },
        sectionTitle: {
            fontSize: 18,
            fontWeight: "900",
            color: c.text,
            letterSpacing: -0.2,
        },
        sectionAction: {
            fontSize: 14,
            fontWeight: "700",
            color: c.primary,
        },

        // ===== Schedule list =====
        listWrap: {
            paddingHorizontal: 16,
            paddingTop: 6,
        },
        listItem: {
            flexDirection: "row",
            alignItems: "center",
            padding: 16,
            borderRadius: 16,
            backgroundColor: c.surface,
            borderWidth: 1,
            borderColor: c.border,
            ...cardShadow,
            marginBottom: 12,
        },
        listItemDisabled: {
            opacity: 0.7,
        },

        itemIconBox: {
            width: 48, // size-12
            height: 48,
            borderRadius: 12, // rounded-lg
            alignItems: "center",
            justifyContent: "center",
            marginRight: 14,
            backgroundColor: "rgba(19,91,236,0.10)",
        },
        itemIconBoxDisabled: {
            backgroundColor: "rgba(0,0,0,0.06)",
        },

        itemInfo: {
            flex: 1,
        },
        itemTitle: {
            fontSize: 16,
            fontWeight: "800",
            color: c.text,
        },
        itemTimeRow: {
            flexDirection: "row",
            alignItems: "center",
            marginTop: 6,
        },
        itemTimeText: {
            marginLeft: 6,
            fontSize: 13,
            fontWeight: "600",
            color: c.muted,
        },

        // ===== Status (Live / Soon / Completed) =====
        statusPill: {
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 8, // rounded-md
            alignItems: "center",
            justifyContent: "center",
        },
        statusLive: {
            backgroundColor: c.greenBg,
        },
        statusSoon: {
            backgroundColor: c.soonBg,
        },
        statusTextLive: {
            fontSize: 11,
            fontWeight: "900",
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: c.greenText,
        },
        statusTextSoon: {
            fontSize: 11,
            fontWeight: "900",
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: c.soonText,
        },

        completedIconWrap: {
            alignItems: "center",
            justifyContent: "center",
        },

        // ===== Bottom Tab Bar (fixa) =====
        bottomNav: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: 10,
            paddingBottom: 22,
            backgroundColor: c.surface,
            borderTopWidth: 1,
            borderTopColor: c.border,
        },
        navItem: {
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 6,
            minWidth: 64,
        },
        navItemActive: {
            color: c.primary,
        },
        navLabel: {
            marginTop: 4,
            fontSize: 12,
            fontWeight: "700",
            color: c.muted,
        },
        navLabelActive: {
            color: c.primary,
        },
    });

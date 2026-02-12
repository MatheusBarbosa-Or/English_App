import { Platform, StyleSheet } from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context"

export type ThemeColors = {
    primary: string;

    bg: string;
    surface: string;

    text: string;
    muted: string;

    border: string;
    track: string;

    green: string;
    orange: string;

    navBg: string;
    navBorder: string;
};

export const lightColors: ThemeColors = {
    primary: "#135bec",

    bg: "#f6f6f8",          // bg-background-light
    surface: "#ffffff",

    text: "#0d121b",
    muted: "#4c669a",

    border: "#e5e7eb",
    track: "#e5e7eb",

    green: "#22c55e",
    orange: "#f97316",

    navBg: "rgba(255,255,255,0.80)",
    navBorder: "#e5e7eb",
};

export const darkColors: ThemeColors = {
    primary: "#3b82f6",

    bg: "#0b1220",          // bg-background-dark (aproximação)
    surface: "#1f2937",     // ~ gray-800

    text: "#ffffff",
    muted: "#9ca3af",       // ~ gray-400

    border: "#374151",      // ~ gray-700
    track: "#374151",

    green: "#22c55e",
    orange: "#fb923c",

    navBg: "rgba(17,24,39,0.80)", // ~ gray-900/80
    navBorder: "#1f2937",
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

const btnShadow = Platform.select({
    ios: {
        shadowColor: "#135bec",
        shadowOpacity: 0.18,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
    },
    android: { elevation: 5 },
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

        // Se for ScrollView:
        // <ScrollView contentContainerStyle={styles.content}>
        content: {
            paddingHorizontal: 16, // px-4
            paddingTop: 12,
            paddingBottom: 110, // espaço pra nav fixa
        },

        // ===== TopAppBar =====
        topAppBar: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 8, // pb-2
            backgroundColor: c.bg,
        },
        avatarWrap: {
            width: 40, // size-10
            height: 40,
            borderRadius: 999,
            borderWidth: 2,
            borderColor: c.primary,
            overflow: "hidden",
        },
        avatarImg: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
        },

        greetingWrap: {
            flex: 1,
            paddingHorizontal: 12, // px-3
        },
        welcomeSmall: {
            fontSize: 12, // text-xs
            fontWeight: "500",
            color: c.muted,
            marginBottom: 2,
        },
        greetingTitle: {
            fontSize: 18, // text-lg
            fontWeight: "700",
            color: c.text,
            letterSpacing: -0.2,
        },

        bellBtn: {
            width: 48, // h-12, w-12
            height: 48,
            alignItems: "flex-end",
            justifyContent: "center",
        },

        // ===== Progress Tracker Section =====
        progressSection: {
            paddingHorizontal: 16, // px-4
            paddingTop: 16,        // pt-4
        },
        progressCard: {
            backgroundColor: c.surface,
            padding: 16,
            borderRadius: 12, // rounded-xl
            borderWidth: 1,
            borderColor: c.border,
            ...cardShadow,
        },
        progressHeaderRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12, // mb-3
        },
        progressTitle: {
            fontSize: 14, // text-sm
            fontWeight: "700",
            color: c.text,
        },
        levelPill: {
            backgroundColor: "rgba(19,91,236,0.10)", // bg-primary/10
            paddingHorizontal: 8,
            paddingVertical: 4,
            borderRadius: 999,
        },
        levelPillText: {
            fontSize: 12,
            fontWeight: "600",
            color: c.primary,
        },

        progressTrack: {
            width: "100%",
            height: 12, // h-3
            borderRadius: 999,
            backgroundColor: c.track,
            overflow: "hidden",
        },
        progressFill: {
            height: "100%",
            width: "75%",
            borderRadius: 999,
            backgroundColor: c.primary,
        },

        progressMetaRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8, // mt-2
        },
        progressMetaText: {
            fontSize: 11, // text-[11px]
            fontWeight: "500",
            color: c.muted,
        },

        // ===== Section Header (Upcoming / Recent) =====
        sectionH2: {
            fontSize: 20, // text-[20px]
            fontWeight: "700",
            color: c.text,
            letterSpacing: -0.2,
            paddingHorizontal: 16,
            paddingTop: 24, // pt-6
            paddingBottom: 8, // pb-2
        },

        // ===== Next Class Card =====
        nextCardWrap: {
            padding: 16, // p-4
        },
        nextCard: {
            backgroundColor: c.surface,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: c.border,
            overflow: "hidden",
            ...cardShadow,
        },
        nextHero: {
            width: "100%",
            height: 220, // aspect-video aproximado
            backgroundColor: c.border,
        },
        nextBody: {
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 12,
        },
        teacherName: {
            fontSize: 18,
            fontWeight: "700",
            color: c.text,
            letterSpacing: -0.2,
        },
        className: {
            marginTop: 4,
            fontSize: 14,
            fontWeight: "600",
            color: c.primary,
            marginBottom: 8,
        },
        divider: {
            height: 1,
            backgroundColor: c.border,
            marginTop: 10,
            marginBottom: 10,
        },
        nextFooterRow: {
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
        },
        metaCol: {
            flex: 1,
            paddingRight: 12,
        },
        metaRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 6,
        },
        metaText: {
            marginLeft: 6,
            fontSize: 12,
            fontWeight: "400",
            color: c.muted,
        },
        metaWarnText: {
            marginLeft: 6,
            fontSize: 12,
            fontWeight: "700",
            color: c.orange,
        },
        joinBtn: {
            height: 40, // h-10
            minWidth: 110,
            paddingHorizontal: 16,
            borderRadius: 8, // rounded-lg
            backgroundColor: c.primary,
            alignItems: "center",
            justifyContent: "center",
            ...btnShadow,
        },
        joinBtnText: {
            color: "#fff",
            fontSize: 14,
            fontWeight: "700",
        },

        // ===== Timer Section =====
        timerRow: {
            flexDirection: "row",
            gap: 16, // se seu RN não suportar "gap", troque por marginRight no primeiro item
            paddingHorizontal: 16,
            paddingTop: 8, // py-2
            paddingBottom: 8,
        },
        timerCol: {
            flex: 1,
            alignItems: "stretch",
        },
        timerBoxActive: {
            height: 48, // h-12
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(19,91,236,0.10)", // bg-primary/10
            borderWidth: 1,
            borderColor: "rgba(19,91,236,0.20)", // border-primary/20
        },
        timerBox: {
            height: 48,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f3f4f6", // gray-100
            borderWidth: 1,
            borderColor: c.border,
        },
        timerValueActive: {
            fontSize: 18,
            fontWeight: "700",
            color: c.primary,
            letterSpacing: -0.2,
        },
        timerValue: {
            fontSize: 18,
            fontWeight: "700",
            color: c.text,
            letterSpacing: -0.2,
        },
        timerLabelWrap: {
            marginTop: 8,
            alignItems: "center",
        },
        timerLabel: {
            fontSize: 12,
            fontWeight: "500",
            color: c.muted,
            letterSpacing: 1.2,
            textTransform: "uppercase",
        },

        // ===== Recent Lessons header =====
        recentHeaderRow: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingTop: 24,
            paddingBottom: 4,
        },
        recentHeaderText: {
            fontSize: 20, // text-[20px]
            fontWeight: "700",
            color: c.text,
            letterSpacing: -0.2,
        },
        viewAllBtnText: {
            fontSize: 14,
            fontWeight: "700",
            color: c.primary,
        },

        // ===== Carousel =====
        carousel: {
        },
        carouselContent: {
            paddingHorizontal: 16,
            paddingVertical: 16,
            gap: 16, // se não tiver gap, use marginRight nos cards
            flexDirection: "row",
        },
        lessonCard: {
            width: 200, // min-w-[200px]
            backgroundColor: c.surface,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: c.border,
            padding: 12,
            ...cardShadow,
        },
        lessonThumb: {
            width: "100%",
            height: 110, // aspect-video aproximado
            borderRadius: 8,
            overflow: "hidden",
            backgroundColor: c.border,
        },
        playOverlay: {
            ...StyleSheet.absoluteFillObject,
            backgroundColor: "rgba(0,0,0,0.20)", // bg-black/20
            alignItems: "center",
            justifyContent: "center",
        },

        lessonTitle: {
            marginTop: 12,
            fontSize: 16,
            fontWeight: "700",
            color: c.text,
        },
        lessonSubtitle: {
            marginTop: 4,
            fontSize: 14,
            fontWeight: "500",
            color: c.muted,
        },

        lessonProgressRow: {
            marginTop: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
        },
        lessonTrack: {
            flex: 1,
            height: 6, // h-1.5
            borderRadius: 999,
            backgroundColor: c.track,
            overflow: "hidden",
        },
        lessonFillPrimary: {
            height: "100%",
            borderRadius: 999,
            backgroundColor: c.primary,
        },
        lessonFillGreen: {
            height: "100%",
            borderRadius: 999,
            backgroundColor: c.green,
        },
        lessonPctPrimary: {
            fontSize: 10,
            fontWeight: "700",
            color: c.primary,
        },
        lessonPctGreen: {
            fontSize: 10,
            fontWeight: "700",
            color: c.green,
        },

        // ===== Bottom Navigation (estilo iOS do HTML) =====
        bottomNav: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: 24, // px-6
            paddingVertical: 12,   // py-3
            backgroundColor: c.navBg,
            borderTopWidth: 1,
            borderTopColor: c.navBorder,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
        },
        navItem: {
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            color: c.muted,
        },
        navItemActive: {
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            color: c.primary,
        },
        navLabel: {
            marginTop: 4,
            fontSize: 10,
            fontWeight: "500",
            color: c.muted,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
        },
        navLabelActive: {
            fontWeight: "700",
            color: c.primary,
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
        },
    });
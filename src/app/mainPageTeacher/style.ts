import { Platform, StyleSheet } from "react-native";

export type ThemeColors = {
    primary: string;
    bg: string;
    surface: string;

    text: string;
    muted: string;

    border: string;

    green: string;
    orange: string;

    blueSoft: string;
    greenSoft: string;
    orangeSoft: string;
};

export const lightColors: ThemeColors = {
    primary: "#135bec",
    bg: "#f6f6f8",
    surface: "#ffffff",

    text: "#0d121b",
    muted: "#4c669a",

    border: "#e5e7eb",

    green: "#22c55e",
    orange: "#f97316",

    blueSoft: "rgba(19,91,236,0.10)",
    greenSoft: "rgba(34,197,94,0.14)",
    orangeSoft: "rgba(249,115,22,0.14)",
};

export const darkColors: ThemeColors = {
    primary: "#3b82f6",
    bg: "#0b1220",
    surface: "#0f172a",

    text: "#ffffff",
    muted: "#9ca3af",

    border: "rgba(255,255,255,0.10)",

    green: "#22c55e",
    orange: "#fb923c",

    blueSoft: "rgba(59,130,246,0.18)",
    greenSoft: "rgba(34,197,94,0.18)",
    orangeSoft: "rgba(251,146,60,0.18)",
};

const cardShadow = Platform.select({
    ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
    },
    android: { elevation: 2 },
    default: {},
});

const buttonShadow = Platform.select({
    ios: {
        shadowColor: "#135bec",
        shadowOpacity: 0.16,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
    },
    android: { elevation: 5 },
    default: {},
});

export const makeStyles = (c: ThemeColors) =>
    StyleSheet.create({
        screen: { flex: 1, backgroundColor: c.bg },
        container: { flex: 1, backgroundColor: c.bg },

        content: {
            paddingHorizontal: 18,
            paddingTop: 12,
            paddingBottom: 110,
        },

        // ===== Top bar =====
        topBar: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 6,
        },
        topLeft: {
            flexDirection: "row",
            alignItems: "center",
            flex: 1,
            paddingRight: 12,
        },
        backBtn: {
            width: 40,
            height: 40,
            borderRadius: 999,
            alignItems: "center",
            justifyContent: "center",
        },
        avatarWrap: {
            width: 46,
            height: 46,
            borderRadius: 23,
            borderWidth: 2,
            borderColor: c.primary,
            overflow: "hidden",
            backgroundColor: c.surface,
        },
        avatarImg: {
            width: "100%",
            height: "100%",
        },
        greetingWrap: {
            marginLeft: 12,
            flex: 1,
        },
        welcomeSmall: {
            fontSize: 14,
            fontWeight: "600",
            color: c.muted,
            marginBottom: 2,
        },
        teacherName: {
            fontSize: 26,
            fontWeight: "900",
            color: c.text,
            letterSpacing: -0.3,
        },
        bellBtn: {
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: c.surface,
            borderWidth: 1,
            borderColor: c.border,
            alignItems: "center",
            justifyContent: "center",
            ...cardShadow,
        },

        // ===== Hero card =====
        heroCard: {
            marginTop: 14,
            borderRadius: 18,
            backgroundColor: c.surface,
            borderWidth: 1,
            borderColor: c.border,
            overflow: "hidden",
            ...cardShadow,
        },
        heroMedia: {
            position: "relative",
        },

        heroImage: {
            width: "100%",
            height: 180,
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
        },

        liveOverlay: {
            ...StyleSheet.absoluteFillObject,
            alignItems: "center",
            justifyContent: "center",
        },

        livePill: {
            paddingHorizontal: 18,
            paddingVertical: 8,
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.90)",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,0.06)",
        },

        livePillText: {
            fontSize: 16,
            fontWeight: "900",
            letterSpacing: 2.2,
            color: c.primary,
        },

        heroBody: {
            paddingHorizontal: 18,
            paddingVertical: 16,
        },
        tagText: {
            fontSize: 16,
            fontWeight: "900",
            letterSpacing: 2,
            color: c.primary,
            marginBottom: 8,
        },
        classTitle: {
            fontSize: 24,
            fontWeight: "900",
            color: c.text,
            letterSpacing: -0.4,
            marginBottom: 10,
        },
        studentsRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 18,
        },
        studentsText: {
            marginLeft: 8,
            fontSize: 12,
            fontWeight: "700",
            color: c.muted,
        },
        heroFooter: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
        },
        startsInText: {
            fontSize: 16,
            fontWeight: "900",
            color: c.primary,
        },
        joinBtn: {
            minWidth: 170,
            height: 52,
            borderRadius: 14,
            backgroundColor: c.primary,
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            ...buttonShadow,
        },
        joinBtnText: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "900",
        },

        // ===== Section headers =====
        sectionHeaderRow: {
            marginTop: 26,
            marginBottom: 12,
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "space-between",
        },
        sectionTitle: {
            fontSize: 24,
            fontWeight: "900",
            color: c.text,
            letterSpacing: -0.4,
        },
        sectionAction: {
            fontSize: 16,
            fontWeight: "800",
            color: c.primary,
        },

        // ===== Schedule card =====
        scheduleCard: {
            position: "relative",
            backgroundColor: c.surface,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: c.border,
            paddingVertical: 18,
            paddingHorizontal: 14,
            ...cardShadow,
        },

        timelineLine: {
            position: "absolute",
            // center da bolinha:
            // paddingHorizontal (14) + paddingLeft row (6) + half iconCircle (27) = 47
            left: 47,
            top: 24,
            bottom: 24,
            width: 3,
            borderRadius: 3,
            backgroundColor: "rgba(0,0,0,0.06)",
        },

        scheduleRow: {
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 18,
            paddingLeft: 6,
        },

        iconCircle: {
            width: 54,
            height: 54,
            borderRadius: 27,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 14,
        },

        iconBgBlue: { backgroundColor: "rgba(19,91,236,0.10)" },
        iconBgGreen: { backgroundColor: "rgba(34,197,94,0.14)" },
        iconBgOrange: { backgroundColor: "rgba(249,115,22,0.14)" },

        scheduleTextWrap: { flex: 1 },

        scheduleTitle: {
            fontSize: 16,
            fontWeight: "900",
            color: c.text,
            marginBottom: 6,
        },

        scheduleTime: {
            fontSize: 12,
            fontWeight: "800",
            color: c.muted,
        },

        // ===== Performance =====
        sectionTitleBig: {
            marginTop: 28,
            marginBottom: 12,
            fontSize: 32,
            fontWeight: "900",
            color: c.text,
            letterSpacing: -0.4,
        },
        performanceCard: {
            height: 120,
            borderRadius: 18,
            backgroundColor: c.surface,
            borderWidth: 1,
            borderColor: c.border,
            alignItems: "center",
            justifyContent: "center",
            ...cardShadow,
        },
        performancePlaceholder: {
            color: c.muted,
            fontWeight: "700",
        },

        // ===== Bottom Nav (fixo) =====
        bottomNav: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            paddingTop: 10,
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

import { Platform, StyleSheet } from "react-native";

export type ThemeColors = {
    primary: string;

    bg: string;
    surface: string;

    text: string;
    muted: string;

    border: string;

    navBg: string;
    navBorder: string;
};

export const lightColors: ThemeColors = {
    primary: "#135bec",

    bg: "#f6f6f8",
    surface: "#ffffff",

    text: "#0d121b",
    muted: "#4c669a",

    border: "#cfd7e7",

    navBg: "#f6f6f8",
    navBorder: "#cfd7e7",
};

export const darkColors: ThemeColors = {
    primary: "#3b82f6",

    bg: "#101622",
    surface: "rgba(30,41,59,0.5)",

    text: "#ffffff",
    muted: "#9ca3af",

    border: "#1e293b",

    navBg: "#101622",
    navBorder: "#1e293b",
};

const cardShadow = Platform.select({
    ios: {
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
    },
    android: {
        elevation: 2,
    },
    default: {},
});

const buttonShadow = Platform.select({
    ios: {
        shadowColor: "#135bec",
        shadowOpacity: 0.25,
        shadowRadius: 16,
        shadowOffset: { width: 0, height: 10 },
    },
    android: {
        elevation: 6,
    },
    default: {},
});

export const makeStyles = (c: ThemeColors) =>
    StyleSheet.create({
        // ===== SCREEN =====
        screen: {
            flex: 1,
            backgroundColor: c.bg,
        },

        content: {
            flex: 1,
            paddingHorizontal: 16,
            paddingTop: 24,
            paddingBottom: 120,
        },

        // ===== HEADER =====
        header: {
            paddingHorizontal: 14,
            paddingVertical: 14,
            borderBottomWidth: 1,
            borderBottomColor: c.border,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: c.navBg,
        },

        headerIconWrap: {
            width: 40,
            height: 40,
            alignItems: "center",
            justifyContent: "center",
        },

        headerTitle: {
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "700",
            color: c.text,
        },

        // ===== PROGRESS SECTION =====
        progressSection: {
            paddingHorizontal: 14,
            paddingVertical: 14,
            marginTop: 32,
        },

        progressHeaderRow: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 12,
        },

        progressLabel: {
            fontSize: 16,
            fontWeight: "600",
            color: c.text,
        },

        progressCounter: {
            fontSize: 14,
            fontWeight: "700",
            color: c.primary,
        },

        progressTrack: {
            height: 8,
            borderRadius: 999,
            backgroundColor: c.border,
            overflow: "hidden",
        },

        progressFill: {
            height: "100%",
            width: "30%",
            borderRadius: 999,
            backgroundColor: c.primary,
        },

        // ===== QUESTION =====
        questionWrap: {
            paddingVertical: 40,
        },

        questionText: {
            fontSize: 24,
            fontWeight: "700",
            color: c.text,
            textAlign: "center",
            lineHeight: 32,
            letterSpacing: -0.4,
        },

        // ===== OPTIONS =====
        optionsWrap: {
            gap: 16,
            paddingHorizontal: 12,
        },

        optionCard: {
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: c.border,
            backgroundColor: c.surface,
        },

        optionCardSelected: {
            flexDirection: "row",
            alignItems: "center",
            padding: 20,
            borderRadius: 16,
            borderWidth: 2,
            borderColor: c.primary,
            backgroundColor: "rgba(19,91,236,0.08)",
        },

        radioOuter: {
            width: 26,
            height: 26,
            borderRadius: 999,
            borderWidth: 2,
            borderColor: c.border,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
        },

        radioOuterSelected: {
            borderColor: c.primary,
            width: 26,
            height: 26,
            borderRadius: 999,
            borderWidth: 2,
            alignItems: "center",
            justifyContent: "center",
            marginRight: 16,
        },

        radioInner: {
            width: 12,
            height: 12,
            borderRadius: 999,
            backgroundColor: c.primary,
        },

        optionTextWrap: {
            flex: 1,
        },

        optionTitle: {
            fontSize: 20,
            fontWeight: "700",
            color: c.text,
        },

        optionSubtitle: {
            marginTop: 2,
            fontSize: 14,
            color: c.muted,
        },

        // ===== FOOTER =====
        footer: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: 16,
            paddingBottom: 40,
            borderTopWidth: 1,
            borderTopColor: c.navBorder,
            backgroundColor: c.navBg,
        },

        footerInner: {
            alignItems: "flex-end",
        },

        nextButton: {
            height: 56,
            minWidth: 120,
            paddingHorizontal: 32,
            borderRadius: 16,
            backgroundColor: c.primary,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            ...buttonShadow,
        },

        nextButtonText: {
            fontSize: 18,
            fontWeight: "700",
            color: "#fff",
        },

        nextButtonIcon: {
            color: "#fff",
            paddingHorizontal: 8,

        },
    });

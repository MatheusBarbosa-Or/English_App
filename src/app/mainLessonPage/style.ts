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

    border: "#e5e7eb",

    navBg: "rgba(255,255,255,0.80)",
    navBorder: "#e5e7eb",
};

export const darkColors: ThemeColors = {
    primary: "#3b82f6",

    bg: "#101622",
    surface: "#1f2937",

    text: "#ffffff",
    muted: "#9ca3af",

    border: "#374151",

    navBg: "rgba(16,22,34,0.80)",
    navBorder: "#1f2937",
};

const cardShadow = Platform.select({
    ios: {
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
    },
    android: {
        elevation: 3,
    },
    default: {},
});

const buttonShadow = Platform.select({
    ios: {
        shadowColor: "#135bec",
        shadowOpacity: 0.25,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
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
            paddingBottom: 140, // espaço para botão fixo
        },

        // ===== TOP APP BAR =====
        header: {
            position: "relative",
            paddingHorizontal: 16,
            paddingTop: 16,
            paddingBottom: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: c.border,
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
            letterSpacing: -0.3,
        },
        headerIconEnd: {
            width: 40,
            height: 40,
            alignItems: "flex-end",
            justifyContent: "center",
        },

        // ===== VIDEO PLAYER =====
        videoContainer: {
            padding: 16,
        },

        videoCard: {
            width: "100%",
            height: 220, // aspect-video aproximado
            borderRadius: 16,
            overflow: "hidden",
            backgroundColor: "#111",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            ...cardShadow,
        },

        videoImage: {
            position: "absolute",
            width: "100%",
            height: "100%",
        },

        playButton: {
            width: 64,
            height: 64,
            borderRadius: 999,
            backgroundColor: c.primary,
            alignItems: "center",
            justifyContent: "center",
        },

        videoOverlayBottom: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 14,
            backgroundColor: "rgba(0,0,0,0.65)",
        },

        progressRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 6,
        },

        progressTrack: {
            flex: 1,
            height: 6,
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.3)",
            overflow: "hidden",
        },

        progressFill: {
            width: "33%",
            height: "100%",
            backgroundColor: c.primary,
        },

        timeRow: {
            flexDirection: "row",
            justifyContent: "space-between",
        },

        timeTextStart: {
            fontSize: 12,
            fontWeight: "500",
            color: "#fff",
            textAlign: "left",
        },
        timeTextEnd: {
            fontSize: 12,
            fontWeight: "500",
            color: "#fff",
            textAlign: "right",
        },

        // ===== HEADLINE =====
        sectionTitleWrap: {
            paddingHorizontal: 16,
            paddingTop: 16,
        },

        sectionTitle: {
            fontSize: 24,
            fontWeight: "700",
            color: c.text,
            letterSpacing: -0.5,
        },

        // ===== BODY TEXT =====
        bodyTextWrap: {
            paddingHorizontal: 16,
            paddingVertical: 8,
        },

        bodyText: {
            fontSize: 16,
            lineHeight: 24,
            color: c.muted,
        },

        // ===== PDF CARD =====
        pdfCardWrap: {
            padding: 16,
        },

        pdfCard: {
            borderRadius: 16,
            padding: 20,
            borderWidth: 1,
            borderColor: c.border,
            backgroundColor: c.surface,
            ...cardShadow,
        },

        pdfRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 16,
        },

        pdfWrapDirection: {
            flexDirection: "column",
        },

        pdfIconBox: {
            width: 48,
            height: 48,
            borderRadius: 12,
            backgroundColor: "rgba(19,91,236,0.10)",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 12,
        },

        pdfTitle: {
            fontSize: 16,
            fontWeight: "700",
            color: c.text,
        },

        pdfSubtitle: {
            fontSize: 14,
            color: c.muted,
            marginTop: 2,
        },

        downloadButton: {
            height: 44,
            borderRadius: 12,
            backgroundColor: c.primary,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 8,
            ...buttonShadow,
        },

        downloadButtonText: {
            color: "#fff",
            fontSize: 14,
            fontWeight: "700",
            flexDirection: "row",
        },

        // ===== BOTTOM FIXED BUTTON =====
        bottomBar: {
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            padding: 16,
            paddingBottom: 28,
            backgroundColor: c.navBg,
            borderTopWidth: 1,
            borderTopColor: c.navBorder,
        },

        quizButton: {
            height: 56,
            borderRadius: 16,
            backgroundColor: c.primary,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            ...buttonShadow,
        },

        quizButtonText: {
            color: "#fff",
            fontSize: 16,
            fontWeight: "700",
        },
    });

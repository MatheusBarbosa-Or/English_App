import { StyleSheet } from "react-native";

export type ThemeColors = {
    primary: string;
    bg: string;
    surface: string;
    surface2: string;
    text: string;
    textMuted: string;
    border: string;
    iconMuted: string;
};

export const lightColors: ThemeColors = {
    primary: "#135bec",
    bg: "#f6f6f8",          // background-light
    surface: "#ffffff",
    surface2: "rgba(0,0,0,0.05)", // cinza leve p/ segmented
    text: "#0d121b",
    textMuted: "#6b7280",   // ~ gray-500
    border: "#e5e7eb",      // ~ gray-200
    iconMuted: "#9ca3af",   // ~ gray-400
};

export const darkColors: ThemeColors = {
    primary: "#135bec",
    bg: "#101622",          // background-dark
    surface: "#111827",     // ~ gray-900
    surface2: "rgba(255,255,255,0.08)", // cinza no dark
    text: "#ffffff",
    textMuted: "#9ca3af",   // ~ gray-400
    border: "#374151",      // ~ gray-700
    iconMuted: "#9ca3af",
};

export const makeStyles = (c: ThemeColors) =>
    StyleSheet.create({
        screen: {
            flex: 1,
            backgroundColor: c.bg,
        },

        container: {
            flex: 1,
            position: "relative",
            overflow: "hidden",
        },

        // Top App Bar
        appBar: {
            paddingVertical: 16,
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: c.bg, // se quiser "blur", dá pra trocar por BlurView
        },
        appBarTitle: {
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "700",
            color: c.text, // pra compensar o botão de voltar e manter centralizado
        },

        // Background motifs (opcional)
        motifs: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.04,
            padding: 40,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
        },

        // Main content area (max-w-md mx-auto)
        main: {
            flex: 1,
            width: "100%",
            maxWidth: 420,
            alignSelf: "center",
            paddingHorizontal: 24,
            paddingTop: 16,
            paddingBottom: 48,
        },

        // Header / Logo Section
        header: {
            alignItems: "center",
            marginBottom: 32,
        },
        logoBox: {
            width: 96,
            height: 96,
            borderRadius: 24,
            backgroundColor: "rgba(19,91,236,0.10)",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 24,

            // sombra leve (iOS)
            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 8,
            shadowOffset: { width: 0, height: 2 },

            // android
            elevation: 0,
        },
        title: {
            fontSize: 36,
            fontWeight: "800",
            letterSpacing: -0.3,
            color: c.text,
            textAlign: "center",
        },
        subtitle: {
            marginTop: 8,
            fontSize: 14,
            color: c.textMuted,
            textAlign: "center",
        },

        // Segmented control
        segmentedWrap: {
            marginTop: 32,
            width: "100%",
            alignSelf: "stretch",
        },
        segmentedOuter: {
            height: 48,
            borderRadius: 12,
            backgroundColor: c.surface2,
            padding: 4,
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            alignSelf: "stretch",
        },
        segment: {
            flex: 1,
            height: "100%",
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
        },
        segmentActive: {
            backgroundColor: c.surface,

            shadowColor: "#000",
            shadowOpacity: 0.06,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 2 },
            elevation: 1,
        },
        segmentText: {
            fontSize: 14,
            fontWeight: "700",
            color: c.textMuted,
        },
        segmentTextActive: {
            color: c.primary,
        },

        // Form
        form: {
            gap: 16, // RN moderno suporta gap; se não suportar, usa marginBottom nos blocos
        },
        fieldGroup: {
            gap: 6,
        },
        label: {
            fontSize: 14,
            fontWeight: "700",
            color: c.text,
            marginLeft: 4,
        },

        inputWrap: {
            position: "relative",
            justifyContent: "center",
        },
        inputIconLeft: {
            position: "absolute",
            left: 16,
            zIndex: 2,
        },
        input: {
            width: "100%",
            borderRadius: 12,
            borderWidth: 1,
            borderColor: c.border,
            backgroundColor: c.surface,
            paddingVertical: 14,
            paddingLeft: 48,
            paddingRight: 16,
            fontSize: 16,
            color: c.text,
        },
        inputPassword: {
            paddingRight: 48, // espaço pro olho
        },

        inputFocused: {
            borderColor: c.primary,
            // “ring” aproximado (RN não tem ring nativo)
            shadowColor: c.primary,
            shadowOpacity: 0.10,
            shadowRadius: 10,
            shadowOffset: { width: 0, height: 0 },
            elevation: 1,
        },

        rightIconBtn: {
            position: "absolute",
            right: 16,
            height: "100%",
            justifyContent: "center",
            zIndex: 2,
        },

        forgotRow: {
            alignItems: "flex-end",
            paddingTop: 4,
        },
        link: {
            fontSize: 14,
            fontWeight: "600",
            color: c.primary,
        },

        // Login button
        loginBtn: {
            marginTop: 16,
            height: 56,
            borderRadius: 12,
            backgroundColor: c.primary,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,

            shadowColor: c.primary,
            shadowOpacity: 0.20,
            shadowRadius: 18,
            shadowOffset: { width: 0, height: 10 },
            elevation: 6,
        },
        loginBtnText: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "800",
            alignSelf: "center",
            justifyContent: "center",
        },

        // Footer
        footer: {
            marginTop: "auto",
            paddingTop: 32,
            alignItems: "center",
        },
        footerText: {
            fontSize: 14,
            color: c.textMuted,
        },
        footerLink: {
            fontSize: 14,
            fontWeight: "800",
            color: c.primary,
        },

        bottomSpacer: {
            height: 24,
            backgroundColor: c.bg,
        },
    });

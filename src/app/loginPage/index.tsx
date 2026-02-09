import {Text, View, TouchableOpacity, TextInput, Alert, useColorScheme, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import {darkColors, lightColors, makeStyles} from "@/src/app/loginPage/style";
import {router} from "expo-router";
import {useState, useEffect, useMemo, useRef} from "react";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function LoginPage() {

    const scheme = useColorScheme();
    const colors = scheme === "dark" ? darkColors : lightColors;
    const styles = makeStyles(colors);


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailFocused, setEmailFocused] = useState(false);
    const [passFocused, setPassFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    type Role = "student" | "teacher";
    const [role, setRole] = useState<Role>("student");

    const handleLogin = () =>{
        if (email !== "" && password !== ""){
            Alert.alert("Login realizado com sucesso!")
            router.push({pathname: "/mainPageStudent"})
        }else {
            Alert.alert("Dados não preenchidos!")
        }
    }

    return (
        <SafeAreaView  style= {styles.screen} edges={["top"]}>
            <View style= {styles.container}>

                <View style= {styles.motifs} pointerEvents="none">
                    <MaterialIcons name="menu-book" size={120} color= {colors.text} />
                    <MaterialIcons name="public" size={120} color= {colors.text} />
                    <MaterialIcons name="school" size={120} color= {colors.text} />
                    <MaterialIcons name="language" size={120} color= {colors.text} />
                    <MaterialIcons name="history-edu" size={120} color= {colors.text} />
                </View>

                <View style= {styles.appBar}>
                    <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
                        <MaterialIcons name="arrow-back-ios-new"  size={24} color= {colors.text} />
                    </TouchableOpacity>

                    <Text style= {styles.appBarTitle}>Sign In</Text>
                </View>

                <View style= {styles.main}>
                    <View style= {styles.header}>
                        <View style={styles.logoBox}>
                            <MaterialCommunityIcons name="translate-variant" size={60} color= {colors.text} />
                        </View>

                        <Text style={styles.title}>Welcome Back</Text>
                        <Text style={styles.subtitle}>Please log in to continue your journey.</Text>

                        <View style= {styles.segmentedWrap}>
                            <View style={styles.segmentedOuter}>
                                <TouchableOpacity onPress={()=> setRole("student")} style={[styles.segment, role === "student" && styles.segmentActive]}>
                                    <Text style={[styles.segmentText, role === "student" && styles.segmentTextActive]}>Student</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=> setRole("teacher")} style={[styles.segment, role === "teacher" && styles.segmentActive]}>
                                    <Text style={[styles.segmentText, role === "teacher" && styles.segmentTextActive]}>Teacher</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style= {styles.form}>
                        <View style= {styles.fieldGroup}>
                            <Text style={styles.label}>Email</Text>
                            <View style= {styles.inputWrap}>
                                <MaterialIcons style= {styles.inputIconLeft} name="email"  size={24} color= {emailFocused ? colors.primary : colors.iconMuted} />
                                <TextInput style={[styles.input, emailFocused && styles.inputFocused]} onFocus={() => setEmailFocused(true)} onBlur={() => setEmailFocused(false)} onChangeText={(text: string) => setEmail(text)} placeholder="Email" placeholderTextColor={colors.textMuted}/>
                            </View>
                        </View>

                        <View style= {styles.fieldGroup}>
                            <Text style={styles.label}>Password</Text>
                            <View style= {styles.inputWrap}>
                                <MaterialIcons style= {styles.inputIconLeft} name="lock"  size={24} color= {passFocused ? colors.primary : colors.iconMuted} />
                                <TextInput style={[styles.input, styles.inputPassword, passFocused && styles.inputFocused,]} onFocus={() => setPassFocused(true)} onBlur={() => setPassFocused(false)} onChangeText={(text: string) => setPassword(text) } secureTextEntry={!showPassword} placeholder="••••••••" placeholderTextColor={colors.textMuted}/>
                                <TouchableOpacity style={styles.rightIconBtn} onPress={() => setShowPassword((v) => !v)}>
                                    <MaterialIcons name={showPassword ? "visibility-off" : "visibility"}  size={24} color= {passFocused ? colors.primary : colors.iconMuted} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style= {styles.forgotRow}>
                            <TouchableOpacity onPress={() => router.back()}>
                                <Text style={styles.link}>Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
                            <Text style={styles.loginBtnText}>Login</Text>
                            <MaterialIcons name="login" size={22} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </SafeAreaView >
    );
}

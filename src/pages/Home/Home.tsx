import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    CircularProgress,
    Slider,
    Switch,
    TextField,
    TextFieldProps,
    Typography,
    styled,
    useTheme,
} from "@mui/material";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack"; import { UserContext } from "../../context/UserContext"
import React, { useContext, useEffect } from 'react'
import { SettingContext } from '../../context/SettingsContext'
import { Helmet } from 'react-helmet-async'
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ToggleButton from "@mui/material/ToggleButton";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import { FadingContentLoader } from "../../components/loaders/ContentLoaders";
import { toast } from "react-toastify";

type Props = {}

function Home({ }: Props) {
    const { user, changeUser } = useContext(UserContext)
    const { settings, changeSettings, changeThemeScheme, toggleTheme } = useContext(SettingContext)
    return (
        <div>
            <div style={{
                display: "grid",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                gridTemplateColumns: "2fr 1fr 1fr",
            }}>

                <Card sx={{
                    margin: 2
                }}>
                    <CardHeader title="Title" >
                        Home
                    </CardHeader>
                    <CardContent>
                        <Stack direction="row" spacing={5}>

                        <Button onClick={()=>{
                            toast.error("kdjjhfb")
                        }}>
                            toast
                        </Button>
                        <Button onClick={()=>{
                            toast.success("kdjjhfb")
                        }}>
                            toast
                        </Button>
                        <Button onClick={()=>{
                            toast.warning("kdjjhfb")
                        }}>
                            toast
                        </Button>
                        <Button onClick={()=>{
                            toast.warn("kdjjhfb")
                        }}>
                            toast
                        </Button>
                        <Button onClick={()=>{
                            toast.info("kdjjhfb")
                        }}>
                            toast
                        </Button>
                        <Button onClick={()=>{
                            toast("kdjjhfb")
                        }}>
                            toast
                        </Button>
                        </Stack>
                        <Stack direction="column" spacing={5}>

                            <Stack direction="row" spacing={5}>
                                <Button variant="contained" color="primary" onClick={() => {
                                    changeUser({
                                        type: "login",
                                        value: {
                                            userData: {
                                                id: "1",
                                                name: "test",
                                                contact: {
                                                    type: "email",
                                                    value: ""
                                                },
                                                role: "admin",
                                                avatar: "",
                                                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
                                            },
                                        }
                                    })
                                }}>
                                    login
                                </Button>

                                <Button variant="contained" color="primary" onClick={() => {
                                    changeUser({
                                        type: "logout",
                                        value: {
                                            userData: null,
                                        }
                                    })
                                }}>
                                    logout
                                </Button>

                            </Stack>
                            <Stack direction="row" spacing={5}>

                                <Button variant="outlined" color="primary" onClick={() => {
                                    changeSettings({ type: "language", value: "english" })
                                }}>
                                    english
                                </Button>
                                <Button variant="outlined" color="primary" onClick={() => {
                                    changeSettings({ type: "language", value: "hindi" })
                                }}>
                                    hindi
                                </Button>
                            </Stack>
                            <Stack direction="row" spacing={5}>



                                <ToggleButton
                                    style={{ borderRadius: "50px", border: "none" }}
                                    value="check"
                                    onChange={toggleTheme}
                                >
                                    change mode
                                    {settings.themeMode === "dark" && <LightModeIcon color={"secondary"} />}
                                    {settings.themeMode === "light" && <DarkModeIcon color={"secondary"} />}
                                </ToggleButton>
                                <ToggleButton
                                    value={"check"}
                                    style={{ borderRadius: "50px", border: "none" }}
                                    onChange={changeThemeScheme}
                                >
                                    change color scheme
                                    <ColorLensIcon color={"secondary"} />
                                </ToggleButton>
                            </Stack>
                            <Stack direction="row" spacing={5}>
                                <Button variant={"contained"} color={"primary"}>
                                    Primary Button
                                </Button>
                                <Button variant={"contained"} color={"secondary"}>
                                    Secondary Button
                                </Button>
                                <Button variant={"contained"} color={"upvote"}>
                                    Custom Button
                                </Button>
                            </Stack>
                            <Stack direction="row" spacing={5}>
                                <TextField value={"Un styled text field"} color={"primary"} />
                            </Stack>
                            <Stack alignItems={"center"} direction="row" spacing={5}>
                                <Switch defaultChecked />
                                <Checkbox color={"primary"} defaultChecked />
                                <Checkbox color={"error"} defaultChecked />
                                <Checkbox color={"secondary"} defaultChecked />
                                <Slider />
                            </Stack>
                            <Stack alignItems={"center"} direction="row" spacing={5}>
                                <Box>
                                    <Typography>Use Theme</Typography>
                                </Box>
                                <CircularProgress color={"downvote"} />
                            </Stack>
                        </Stack>
                        
                        <FadingContentLoader/>
                    </CardContent>
                </Card>

                <pre style={{
                    maxWidth: "300px",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                }}>
                    {JSON.stringify(user, null, 4)}
                </pre>
                <pre style={{
                    maxWidth: "300px",
                    whiteSpace: "pre-wrap",
                    wordWrap: "break-word",
                }}>
                    {JSON.stringify(settings, null, 4)}
                </pre>
            </div>

        </div>
    )
}

export default Home
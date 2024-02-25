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
import { AlertDialogBox, ContentDialogBox } from "../../components/dialog_box";
import { SwippleDrawer } from "../../components/drawers";

type Props = {}

function Home({ }: Props) {
    const { user, changeUser } = useContext(UserContext)
    const { settings, changeSettings, changeThemeScheme, toggleTheme } = useContext(SettingContext)
    const [dialog, setDialog] = React.useState(false)
    const [alert, setAlert] = React.useState(false)
    const [drawer, setDrawer] = React.useState(false)
    const [persistentDrawer, setPersistentDrawer] = React.useState(false)
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

                            <Button onClick={() => {
                                toast.error("kdjjhfb")
                            }}>
                                toast
                            </Button>
                            <Button onClick={() => {
                                toast.success("kdjjhfb")
                            }}>
                                toast
                            </Button>
                            <Button onClick={() => {
                                toast.warning("kdjjhfb")
                            }}>
                                toast
                            </Button>
                            <Button onClick={() => {
                                toast.warn("kdjjhfb")
                            }}>
                                toast
                            </Button>
                            <Button onClick={() => {
                                toast.info("kdjjhfb")
                            }}>
                                toast
                            </Button>
                            <Button onClick={() => {
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

                        <FadingContentLoader />

                        <Stack direction="row" spacing={5}>
                            <Button variant="contained" color="primary" onClick={() => {
                                setDialog(true)
                            }}

                            >
                                Open Dialog
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => {
                                setAlert(true)
                            }}

                            >
                                Open Alert
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => {
                                setDrawer(true)
                            }}

                            >
                                Open Drawer
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => {
                                setPersistentDrawer(true)
                            }}

                            >
                                Open Persistent Drawer
                            </Button>
                        </Stack>


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
            <ContentDialogBox isOpen={dialog} onClose={() => {
                setDialog(false)
            }}
                title={"Dialog Box"}
                content={<div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident impedit nesciunt facere ex eveniet eos consequatur assumenda distinctio adipisci a? Illum molestias cum mollitia at nihil veritatis, accusamus odit. Iure!
                    Dolore officiis illo ad quae temporibus nemo, a, maiores consequatur veniam cumque, corrupti id in dolorum. Animi, adipisci quod laborum veniam eius libero hic. Commodi doloremque sit neque eius inventore!
                    Voluptatum perferendis nulla quidem hic adipisci vitae iusto pariatur. Maiores, deleniti nobis sapiente quis quaerat nisi beatae error repellat ea ex. Amet, quis ipsa fugit debitis architecto autem numquam deserunt.
                    A exercitationem pariatur maiores distinctio nemo quae vero perferendis nobis commodi nihil delectus rerum, ab error explicabo earum modi ea soluta? Labore voluptatum laborum maiores soluta suscipit quia possimus sed!
                    Assumenda velit inventore mollitia eum animi voluptas optio aspernatur, voluptatibus tenetur dolores quidem officiis quis non laboriosam repellendus omnis deleniti quam vel harum. Alias delectus quod sed repellat deleniti nihil?
                    Iure placeat dolor provident nesciunt velit suscipit modi eveniet, magni esse voluptatem laborum, atque odio consectetur, temporibus voluptate. Voluptas, pariatur aliquid vitae odit quam culpa vero ullam sit voluptate facere.
                    Minima sunt consectetur repellendus doloremque ea. Recusandae voluptatum deleniti rerum architecto vero quis quam iste, officia sint unde officiis ducimus! Dignissimos consequatur quam natus eaque porro error pariatur doloremque sequi!
                    Illo doloribus deserunt voluptatem vel odio esse, possimus necessitatibus minima sed consequuntur adipisci maiores ut corrupti quod magni quaerat aspernatur obcaecati ullam. Harum ea nobis dolore, mollitia cum modi optio.
                    Tempora, illo tenetur excepturi veniam necessitatibus quos officiis magnam nostrum quas libero laboriosam et quisquam ducimus, iste eaque? Excepturi dicta minima eligendi nulla maiores veritatis omnis tenetur aliquid, est quod.
                    Nostrum doloribus, illo, maxime ab cum blanditiis, dicta nemo consequuntur ipsa ipsum neque nisi dolore laboriosam veniam quae id. Deleniti quidem veritatis, illum voluptates numquam vel. Corporis rem velit qui.
                    Cumque voluptates aspernatur fuga. Esse sunt, debitis totam vel illo ab! Repudiandae, quibusdam quidem quod deleniti explicabo omnis aliquam sunt eveniet numquam consectetur nemo doloribus ipsa adipisci sint enim dolor.
                    Repudiandae nisi vero, ex laborum dolorum laudantium sunt nesciunt culpa facere quo at alias delectus quia maxime? A aspernatur, maxime ex veniam voluptate repellendus esse sapiente, culpa natus, distinctio assumenda.
                    Exercitationem officia reiciendis atque maxime, praesentium quas eum esse consectetur dolore aliquam asperiores maiores corporis dignissimos illo ipsa! Error, impedit earum harum ab labore laboriosam nisi recusandae maxime obcaecati sed.
                    Asperiores aperiam esse quaerat tenetur qui ipsum voluptate numquam id minus nulla, voluptatibus eius iusto unde, expedita repudiandae nam soluta eaque aliquid, praesentium necessitatibus doloremque est impedit fugit. Necessitatibus, blanditiis.
                    Ab libero nobis magnam laboriosam reprehenderit ut error, deleniti nostrum et corporis earum molestias aspernatur assumenda optio ipsum doloribus. Tempore, velit facilis. Asperiores, consequuntur nam culpa fuga a nihil distinctio.
                    Deserunt in, odit harum at animi consectetur voluptatem ipsa tenetur illum officiis deleniti magnam nobis ducimus fuga vero adipisci, porro iusto? Facilis natus autem quod, a quos dignissimos mollitia ab?
                    Iusto voluptas, molestias distinctio, consectetur atque iure expedita ab, nihil quas hic magnam fuga repellat tempora excepturi reiciendis quod sequi vitae. Aut aliquam nihil sapiente dolore repellat culpa corrupti minima?
                    Voluptates fugit quia eius cum sed alias possimus incidunt dignissimos numquam cumque repudiandae libero voluptatum minus in amet, recusandae optio debitis soluta mollitia. Quod, eveniet dolorum placeat voluptatum consequuntur voluptatem.
                    Esse vero sequi consectetur incidunt praesentium quo dolores eligendi eos magni voluptatem doloribus blanditiis, a nemo sunt animi similique saepe natus harum optio ex quasi iusto est eaque aperiam. Ut.
                    Distinctio quidem non laboriosam deserunt tempore culpa illo inventore dolore quasi. Natus labore nihil optio, iste atque, qui odit repudiandae debitis dicta officia et? Tempora explicabo similique sit aliquam aliquid?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde, in, quo praesentium tempore eveniet molestias dignissimos laborum eius placeat vitae quia dicta obcaecati, voluptates molestiae sed culpa explicabo assumenda.
                    Esse, nam deserunt quod, aliquid odio assumenda magni accusamus nemo, labore alias excepturi et reprehenderit quo praesentium dicta. Dolore velit tempore cupiditate consectetur ipsa reprehenderit repellendus maxime libero obcaecati voluptas.
                    Nostrum tempora earum possimus. Nihil illum vel nisi facilis facere, est nesciunt voluptatibus excepturi quibusdam doloribus similique laborum optio, at molestias itaque modi. Iusto eos, nemo aperiam doloribus eveniet dignissimos.
                    Voluptatum voluptas maiores eaque labore neque ad ducimus fuga, nesciunt facere voluptate maxime fugiat! Laudantium cum, exercitationem, id velit aliquid corporis sint voluptatum voluptates, saepe minus magnam quaerat sunt sed.
                    Cum libero debitis mollitia et aut nostrum molestiae aperiam, dolorum quod similique atque reiciendis cupiditate molestias inventore dolor laborum. Laborum dolorum aut provident eum deleniti inventore expedita atque vitae hic!
                    Adipisci laboriosam deserunt odio nam officiis, sequi reprehenderit placeat, labore quae, repellendus perspiciatis laudantium rerum ut. Ipsam quae, corporis deleniti tempore ratione velit et autem esse vel iure, natus voluptatem.
                    A ipsam quae, assumenda fugit ipsa ut libero totam architecto sequi reiciendis maxime? Fugit, impedit similique. Laboriosam necessitatibus iusto, tempore consequuntur inventore esse similique est? Ipsa architecto nihil quia esse?
                    Vitae alias et ducimus aperiam tempore aspernatur, explicabo architecto. Ipsum quibusdam, autem culpa, reiciendis quam similique veniam minima harum molestiae sint esse consectetur in quo, sunt ullam. Atque, quo dolore?
                    Hic eum autem exercitationem nemo praesentium inventore libero voluptatum cum eos, aspernatur voluptates! Sint impedit, error id porro eius rerum iste nostrum fuga aspernatur. Eum ipsa ullam officiis veritatis molestiae?
                    Accusamus impedit aliquid tempore ducimus mollitia? Vitae dolor, culpa sit veniam cum delectus quidem odit. Veniam quaerat, architecto, veritatis voluptatem voluptatum doloribus laborum explicabo ut fugit accusantium obcaecati ea praesentium.
                    Fuga eveniet incidunt optio numquam harum et, doloribus cupiditate consectetur odit doloremque, molestiae ipsam maiores. In sed, explicabo distinctio ex commodi iure? Eum aliquid, earum modi est itaque quos porro.
                    Repellat quod ad id corrupti facilis saepe veniam ea eum explicabo eos delectus odio vero, error totam, sit voluptas eligendi inventore aliquid sapiente rerum obcaecati ducimus ullam! Recusandae, odit deleniti.
                    Quos maiores molestiae et dignissimos libero consectetur ipsa non placeat deserunt ea, odit saepe, voluptate perferendis veritatis mollitia excepturi atque tempore quo deleniti reprehenderit nobis, nisi odio sapiente magni. Quasi.
                    Illo debitis dolor quas? Error adipisci ea qui cumque aut. Perferendis cupiditate consequatur animi quas tempora error dolorem, similique nostrum, amet sunt quasi, enim nesciunt ab cum nisi quod inventore.
                    Nesciunt, illo perferendis. Explicabo aspernatur natus earum quia dicta aliquam, consequatur similique nulla accusamus soluta architecto veniam officiis qui nobis voluptatem quisquam officia, eos fuga? Rem sint voluptates minus expedita.
                    Ab minus perferendis ipsa reiciendis et, atque dolorem quibusdam, repudiandae porro tempore earum? Est accusamus a consequuntur explicabo ducimus illum fuga quidem laboriosam tenetur incidunt, voluptates, nemo eligendi eos veniam.
                    Accusamus atque numquam porro ipsum, sunt sint libero ea officia rem? Dolorem modi aperiam, culpa excepturi nobis a illo possimus quam quas fugit tempore error voluptates ullam molestias quod minima.
                    A, minus optio ratione recusandae quam neque dolores quae, nisi molestias, ipsum deleniti laborum dolor? Ullam explicabo autem unde molestiae ut, obcaecati corporis. Numquam blanditiis reiciendis voluptates facere ex exercitationem?
                    Quas molestiae laudantium tempora laborum quo dolorum iste minima in sunt libero. Perferendis quis, aspernatur explicabo id tempora hic accusamus similique alias corrupti magni assumenda vel a culpa impedit vitae.
                    Architecto harum culpa maiores officiis atque sapiente consectetur, non pariatur, modi soluta enim quis repellendus mollitia reprehenderit totam voluptate vitae voluptatum ullam voluptates deleniti velit tenetur? Neque maxime sint natus.
                    Autem quisquam optio a eum ex suscipit cupiditate. Provident rerum excepturi dolores maxime distinctio, quos ea asperiores facere ut debitis? Fugit ipsam amet quod odio pariatur mollitia, placeat maiores magni?
                    Quisquam voluptates quia excepturi dolore in repellat cumque provident atque voluptatem nostrum ullam aliquam, recusandae libero labore laboriosam fuga incidunt a nihil, architecto exercitationem! Cum quos maxime aperiam quia dolorem?
                    Aut velit praesentium fugit, nam minus cupiditate, eaque labore alias corporis vel pariatur facilis! Deleniti iusto incidunt sed, tempore voluptatibus amet explicabo itaque cupiditate exercitationem iste ut aperiam soluta ad.
                    Dolorum consequatur, placeat, laborum obcaecati ea voluptatem rerum architecto porro fugit cupiditate veritatis qui aperiam, laudantium dicta quae impedit molestiae provident enim aliquid eum quaerat deserunt voluptatibus earum. Delectus, laborum?
                    Quaerat facilis culpa quidem dolorum autem cumque? Adipisci veritatis sequi ipsa tempore. Ullam, eius aliquam deserunt explicabo eum, ipsum doloremque maxime hic minus qui repellat assumenda dicta, molestias animi provident?
                    Commodi quisquam quam fuga aperiam amet! Maiores quae, adipisci reprehenderit facere hic explicabo nobis, ullam magni saepe est, ipsa quibusdam eos facilis dolores error maxime assumenda repellat commodi at repellendus!
                    Libero doloremque eaque maxime sed eum delectus esse earum quam ipsa quasi, quisquam nulla, ipsum aspernatur optio cupiditate quas quia, ad pariatur corporis ullam eos? Molestias non ad itaque enim?
                    Saepe nihil ipsam doloremque quis voluptatum, laborum quaerat laboriosam a. Ipsa aliquam facere sapiente, dolores ut suscipit unde in debitis, exercitationem dicta assumenda esse atque incidunt, dolore omnis velit facilis.
                    Commodi quia obcaecati sed delectus expedita et recusandae, rem voluptas? Nulla commodi maiores quas, eveniet corporis voluptate cupiditate iste maxime numquam ipsa eligendi, ex, quisquam facilis. Tempora adipisci saepe accusamus.
                    Minus ducimus nihil iusto nesciunt a voluptatum, repellat ipsam aspernatur quod? Doloribus ad eos officia, cum obcaecati optio in doloremque voluptate sed ipsum ipsa nostrum atque, laborum tenetur reiciendis culpa.
                    Voluptatibus, totam rem! Et dolore, voluptate mollitia in aliquam ducimus magnam itaque nulla! Animi fuga fugit repellat nulla. Reiciendis quos debitis, asperiores reprehenderit numquam quas rerum ratione soluta eius suscipit?
                    Incidunt voluptates ea mollitia? Sint illo aliquid ducimus ab sunt omnis est accusantium vel animi laborum enim, libero porro alias. Nulla tempora veniam excepturi? Numquam quidem beatae ipsa obcaecati impedit?
                    Ut id nulla iste laboriosam, voluptatum a! Error tempora tempore repudiandae debitis laboriosam atque dolorem ad, quia, nihil rerum esse vero facere? Expedita praesentium voluptatem soluta quis ullam esse aspernatur!
                    Accusantium, suscipit possimus, consequatur vero voluptatibus voluptatum, inventore ipsam asperiores doloremque id dolorem mollitia soluta iure rem adipisci optio blanditiis molestiae officiis totam at quia eaque cupiditate. Debitis, assumenda cumque.
                    Impedit quisquam, assumenda numquam quasi facilis iste vitae dicta optio explicabo, magni corrupti tempora quam? Reiciendis, asperiores, saepe quae rem dolorum animi, exercitationem ad officiis quidem soluta placeat itaque numquam.
                    Fuga repudiandae recusandae voluptatum corrupti quae sed commodi sequi eos sapiente ipsum possimus, dicta libero sunt tenetur soluta. Cum voluptates, sint sapiente eius expedita unde inventore voluptatibus facilis earum amet.
                    Ducimus non, animi optio rem repudiandae sit excepturi. Enim saepe natus perspiciatis veniam aspernatur corrupti quis assumenda debitis ut, aut earum! Earum dolor nobis, minima magnam quasi consequatur repellat a!
                    Autem beatae voluptate neque dicta quam tenetur sunt laboriosam quia iusto! Error numquam aut aperiam, voluptatibus earum in delectus, non quia cumque quos, praesentium amet vel. Consequuntur, eaque. Facilis, quo!
                    Enim in modi qui eum. Quidem eligendi quam repellat consectetur veritatis, quibusdam unde ex, sunt odio necessitatibus ea adipisci obcaecati magnam consequatur tempora dolores perferendis neque dolorum! Reprehenderit, quia cupiditate?
                    Sint voluptates iusto vel ipsa nobis veritatis aperiam fuga ex velit odit. Architecto fugit temporibus culpa suscipit dicta unde, at voluptatibus, eveniet cum repellendus minima quam. Est explicabo harum saepe.
                    Omnis eveniet temporibus, pariatur quam nostrum sint laborum laboriosam cumque recusandae, necessitatibus earum ducimus assumenda natus delectus deserunt error, minima sit officiis veritatis. Sapiente, voluptatibus ut eos nulla molestias quod.
                    Incidunt voluptate voluptatibus neque, unde, quasi saepe optio totam debitis odit molestiae assumenda maiores eos omnis ab sapiente temporibus culpa, dicta ipsum repudiandae qui similique natus placeat labore eum! Cupiditate.
                    Expedita corporis exercitationem eveniet provident quo soluta corrupti. Doloribus, autem. Expedita possimus aut modi error consequuntur fugiat eaque doloribus nam obcaecati vitae laborum id, magni, incidunt nihil ea distinctio beatae!
                    Autem amet ab odit quam accusantium temporibus iste cupiditate repudiandae consequatur dolorem. Molestiae nam, quisquam necessitatibus sequi eaque nisi ipsa tempora cupiditate nulla corporis a cumque. Culpa asperiores quisquam cupiditate.
                    Aliquam dolorum odit quos maiores totam temporibus exercitationem, nemo quidem illum! Facilis assumenda, incidunt voluptatum maiores error placeat, consequuntur porro recusandae ullam minus molestiae pariatur est, consectetur iste corporis autem?
                    Explicabo fugiat vero dicta natus, distinctio voluptatum blanditiis expedita aliquam. Mollitia consequatur, rem debitis quos quod neque corporis aperiam? Neque, recusandae porro? Explicabo eos aliquam libero dicta unde rem nobis!
                    Iure quibusdam nisi vel voluptas, dolorem fugit id saepe libero perspiciatis magni eligendi, eveniet consequatur. Harum cupiditate reiciendis tempora, error aspernatur accusamus. Laudantium, voluptas nam iusto distinctio odit culpa minus.
                    Voluptatum magni natus consequatur et aut quas excepturi voluptate numquam quis dolores ullam non sunt, sed necessitatibus quam voluptatibus harum quisquam quasi voluptas iure cumque expedita asperiores! Dolore, nobis soluta?
                    Cumque consectetur totam consequatur quas odio quod illo praesentium. Doloremque ad ducimus consequatur autem dolore animi illum voluptates numquam. Aperiam a consequuntur cum aliquam facilis laudantium voluptatum at autem rerum.
                    Similique est reprehenderit commodi ipsam amet et incidunt atque error excepturi accusamus nemo dolores iure quam, dicta quae fugiat quasi soluta in aspernatur minus totam eos ipsum vero fuga? Quibusdam!
                </div>}
                actions={<div>Actions</div>}
                isTransition={true}
                transitionDirection="down"
                fullScreen={true}
                maxWidth={"xl"}
            />
            <AlertDialogBox
                isOpen={alert}
                onClose={() => {
                    setAlert(false)
                }}
                title={"Alert Box"}
                message={"This is an alert box"}
                isTransition={true}
                successAction={<Button onClick={() => {
                    setAlert(false)
                }} variant='contained' color="warning">Cancel</Button>}
                transitionDirection="left"
            />
            <SwippleDrawer isOpen={drawer} onClose={() => {
                setDrawer(false)
            }}
                content={<div>
                    Drawer Content
                </div>}
                drawerPosition="bottom"
            />
        </div>
    )
}

export default Home
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faTableList, faHistory, faGear } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from 'react-router-dom';
import Recommended from "../card/Recommended";
import { useFormik } from "formik";
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Input,
    VStack
} from "@chakra-ui/react";
import "../../css/profile.css"
function Profile() {



    const userdata = {
        avt: "https://i.redd.it/ykbmzd7rlyq01.jpg",
        name: "Dragonccm",
        email: "dragonccm@gmail.com",
        date: "10/02/2003",
        pass: "long20%long555"
    }
    const usserplaylist = [
        {
            id: "jdfhhjf",
            img: "https://th.bing.com/th/id/OIP.iP-3O89bhSHrVr2rUEe4ZQHaEK?rs=1&pid=ImgDetMain",
            name: "Gone"
        },
        {
            id: "jdfhhjf",
            img: "https://th.bing.com/th/id/OIP.za6JTNz9MpwwZHBiIleI0AHaLH?rs=1&pid=ImgDetMain",
            name: "house"
        },
        {
            id: "jdfhhjf",
            img: "https://6.viki.io/image/6b2ff0b5d027478cbe9b1a63a8705e10/dummy.jpeg?s=900x600&e=t",
            name: "Money"
        }
    ]
    const Recommendeds = [
        {
            id: "jhfjh",
            name: `Flowers`,
            image: "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "jisoo",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "kdjfkdj",
            name: `typaGirls`,
            image: "https://th.bing.com/th/id/OIP.9duyi1x-V3x4rdP1ax7DLQHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jshdjshdjs",
            name: `Pink Venom`,
            image: "https://th.bing.com/th/id/OIP.h45FTfoat7cj5tmNKzffcgHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "859485948",
            name: `Hard To Love`,
            image: "https://i.ytimg.com/vi/TfaOe66vRpY/maxresdefault.jpg",
            category: "playlist",
            songartist: "Rosé",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "987598495",
            name: ` HOW YOU LIKE THAT`,
            image: "https://th.bing.com/th/id/R.29b5df9442fe7d7ab67361bb6c354ebf?rik=hnHONhheHbyY9A&pid=ImgRaw&r=0",
            category: "playlist",
            songartist: "BlackPink",
            songname: " HOW YOU LIKE THAT",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jhfjh",
            name: `Flowers`,
            image: "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "jisoo",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "kdjfkdj",
            name: `typaGirls`,
            image: "https://th.bing.com/th/id/OIP.9duyi1x-V3x4rdP1ax7DLQHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jshdjshdjs",
            name: `Pink Venom`,
            image: "https://th.bing.com/th/id/OIP.h45FTfoat7cj5tmNKzffcgHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "859485948",
            name: `Hard To Love`,
            image: "https://i.ytimg.com/vi/TfaOe66vRpY/maxresdefault.jpg",
            category: "playlist",
            songartist: "Rosé",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "987598495",
            name: ` HOW YOU LIKE THAT`,
            image: "https://th.bing.com/th/id/R.29b5df9442fe7d7ab67361bb6c354ebf?rik=hnHONhheHbyY9A&pid=ImgRaw&r=0",
            category: "playlist",
            songartist: "BlackPink",
            songname: " HOW YOU LIKE THAT",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jhfjh",
            name: `Flowers`,
            image: "https://th.bing.com/th/id/OIP.MfAV8J9NzWpF06S-jLvakQHaLH?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "jisoo",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "kdjfkdj",
            name: `typaGirls`,
            image: "https://th.bing.com/th/id/OIP.9duyi1x-V3x4rdP1ax7DLQHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "jshdjshdjs",
            name: `Pink Venom`,
            image: "https://th.bing.com/th/id/OIP.h45FTfoat7cj5tmNKzffcgHaHa?rs=1&pid=ImgDetMain",
            category: "playlist",
            songartist: "BlackPink",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "859485948",
            name: `Hard To Love`,
            image: "https://i.ytimg.com/vi/TfaOe66vRpY/maxresdefault.jpg",
            category: "playlist",
            songartist: "Rosé",
            songname: "Flower",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
        {
            id: "987598495",
            name: ` HOW YOU LIKE THAT`,
            image: "https://th.bing.com/th/id/R.29b5df9442fe7d7ab67361bb6c354ebf?rik=hnHONhheHbyY9A&pid=ImgRaw&r=0",
            category: "playlist",
            songartist: "BlackPink",
            songname: " HOW YOU LIKE THAT",
            addedday: "11 thg 11, 2021",
            liked_state: false,
            songdata: "https://aac.saavncdn.com/533/a4d723b40272bd6bbcb4263c61af847a_320.mp4",
            total: "3:00",
            root_album: "Solo"
        },
    ];
    const UserInfo = ({ data }) => (
        <div className="info_card_ctn">
            <div className="avt_container">
                <img src={data.avt} alt="f" />
            </div>
            <div className="info_card">
                <div className="info_card_item">
                    <label>Tên: </label>
                    <p>{userdata.name}</p>
                </div>
                <div className="info_card_item">
                    <label>Email: </label>
                    <p>{userdata.email}</p>
                </div>
                <div className="info_card_item">
                    <label>Ngày Sinh: </label>
                    <p>{userdata.date}</p>
                </div>
            </div>
        </div>
    );
    const Myplaylist = ({ datas }) => (
        <section className="mylist_page">
            <div className="mylisttitle">Danh Sách Phát Của bạn</div>
            <div className="list_container">
                {datas.map((data) => (
                    <div className="myListcard">
                        <div className="list_img">
                            <img src={data.img} alt="f" />
                        </div>
                        <p className="playlist_name">{data.name}</p>
                    </div>

                ))}
            </div>
        </section>
    );
    const History = ({ data }) => (
        <div className="history_ctn">
            <Recommended datas={data} type={"Lịch Sử"} describe={'Đã Xem Gần Đây'} />
        </div>
    )

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        }
    });
    const Setting = () => (
        <div className="setting_ctn">
            <Flex bg="gray.100" align="center" justify="center" h="100vh">
                <Box bg="white" p={6} rounded="md">
                    <form onSubmit={formik.handleSubmit}>
                        <VStack spacing={4} align="flex-start">
                            <FormControl>
                                <FormLabel htmlFor="email">Email Address</FormLabel>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    variant="filled"
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel htmlFor="password">Password</FormLabel>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    variant="filled"
                                    onChange={formik.handleChange}
                                    value={formik.values.password}
                                />
                            </FormControl>
                            <Checkbox
                                id="rememberMe"
                                name="rememberMe"
                                onChange={formik.handleChange}
                                isChecked={formik.values.rememberMe}
                                colorScheme="purple"
                            >
                                Remember me?
                            </Checkbox>
                            <Button type="submit" colorScheme="purple" width="full">
                                Login
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </div>
    )



    return (
        <div className="profile_container">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav" className="profile_bar">
                        <Nav className="me-auto list_nav list_nav_pr">
                            <NavLink to="info" exact className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                                <span>Hồ Sơ Của Bạn</span>
                            </NavLink>
                            <NavLink to="myplaylist" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faTableList} />
                                </div>
                                <span>PlayList</span>
                            </NavLink>
                            <NavLink to="history" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faHistory} />
                                </div>
                                <span>Lịch Sử</span>
                            </NavLink>
                            <NavLink to="setting" className="nav-link list_nav_item  list_nav_item_pr">
                                <div className="icon_list_nav_item">
                                    <FontAwesomeIcon icon={faGear} />
                                </div>
                                <span>Cài Đặt</span>
                            </NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="profile_content">
                <Routes>
                    <Route path='/info' element={<UserInfo data={userdata} />} />
                    <Route path='/myplaylist' element={<Myplaylist datas={usserplaylist} />} />
                    <Route path='/history' element={<History data={Recommendeds} />} />
                    <Route path='/setting' element={<Setting />} />
                </Routes>
            </div>
        </div>
    );
}

export default Profile;




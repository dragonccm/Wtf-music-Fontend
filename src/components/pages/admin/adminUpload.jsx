import "../../../css/admin/adminUpload.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import WaveSurfer from 'wavesurfer.js';
import { useState, useRef, useEffect } from "react";
const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const milliseconds = Math.floor((seconds % 1) * 1000);
    
    return `${minutes}:${remainingSeconds}:${milliseconds}`;
}

const dataEx = {
    "_id": "6665c6e5d593ddc68c8a2cc5",
    "id": "Z7OAU7DO",
    "__v": 0,
    "alias": "Just-Say-Hello-Melo-D",
    "artists": [
        {
            "id": "IWZAI0FI",
            "name": "Melo-D",
            "link": "/nghe-si/Melo-D.IWZAI0FI",
            "spotlight": false,
            "alias": "Melo-D.IWZAI0FI",
            "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
            "thumbnailM": "https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/1/a/2/7/1a27769dccc5d485f84a9b68bd666be0.jpg",
            "isOA": false,
            "isOABrand": false,
            "playlistId": "SBF96B7C",
            "totalFollow": 15
        }
    ],
    "createdAt": "2024-06-09T15:14:44.981Z",
    "duration": 288,
    "genresid": [
        "IWZ9Z086"
    ],
    "like": 1362,
    "listen": 0,
    "lyric": [
        {
            "words": [
                {
                    "startTime": 12420,
                    "endTime": 12970,
                    "data": "It's",
                    "_id": "6665c84421089add36c1b4e6"
                },
                {
                    "startTime": 12970,
                    "endTime": 14040,
                    "data": "over",
                    "_id": "6665c84421089add36c1b4e7"
                },
                {
                    "startTime": 14040,
                    "endTime": 14560,
                    "data": "now",
                    "_id": "6665c84421089add36c1b4e8"
                }
            ],
            "_id": "6665c84421089add36c1b4e5"
        },
        {
            "words": [
                {
                    "startTime": 14560,
                    "endTime": 15610,
                    "data": "We",
                    "_id": "6665c84421089add36c1b4ea"
                },
                {
                    "startTime": 15610,
                    "endTime": 16150,
                    "data": "lost",
                    "_id": "6665c84421089add36c1b4eb"
                },
                {
                    "startTime": 16150,
                    "endTime": 16680,
                    "data": "our",
                    "_id": "6665c84421089add36c1b4ec"
                },
                {
                    "startTime": 16680,
                    "endTime": 16680,
                    "data": "way",
                    "_id": "6665c84421089add36c1b4ed"
                },
                {
                    "startTime": 16680,
                    "endTime": 17220,
                    "data": "in",
                    "_id": "6665c84421089add36c1b4ee"
                },
                {
                    "startTime": 17220,
                    "endTime": 17730,
                    "data": "the",
                    "_id": "6665c84421089add36c1b4ef"
                },
                {
                    "startTime": 17730,
                    "endTime": 18820,
                    "data": "dark",
                    "_id": "6665c84421089add36c1b4f0"
                }
            ],
            "_id": "6665c84421089add36c1b4e9"
        },
        {
            "words": [
                {
                    "startTime": 18820,
                    "endTime": 19320,
                    "data": "I",
                    "_id": "6665c84421089add36c1b4f2"
                },
                {
                    "startTime": 19320,
                    "endTime": 19870,
                    "data": "don't",
                    "_id": "6665c84421089add36c1b4f3"
                },
                {
                    "startTime": 19870,
                    "endTime": 20420,
                    "data": "know",
                    "_id": "6665c84421089add36c1b4f4"
                }
            ],
            "_id": "6665c84421089add36c1b4f1"
        },
        {
            "words": [
                {
                    "startTime": 20420,
                    "endTime": 20420,
                    "data": "Where",
                    "_id": "6665c84421089add36c1b4f6"
                },
                {
                    "startTime": 20420,
                    "endTime": 20940,
                    "data": "to",
                    "_id": "6665c84421089add36c1b4f7"
                },
                {
                    "startTime": 20940,
                    "endTime": 21470,
                    "data": "go",
                    "_id": "6665c84421089add36c1b4f8"
                },
                {
                    "startTime": 21470,
                    "endTime": 21990,
                    "data": "when",
                    "_id": "6665c84421089add36c1b4f9"
                },
                {
                    "startTime": 21990,
                    "endTime": 22510,
                    "data": "you're",
                    "_id": "6665c84421089add36c1b4fa"
                },
                {
                    "startTime": 22510,
                    "endTime": 25510,
                    "data": "gone",
                    "_id": "6665c84421089add36c1b4fb"
                }
            ],
            "_id": "6665c84421089add36c1b4f5"
        },
        {
            "words": [
                {
                    "startTime": 25720,
                    "endTime": 26250,
                    "data": "Too",
                    "_id": "6665c84421089add36c1b4fd"
                },
                {
                    "startTime": 26250,
                    "endTime": 26780,
                    "data": "late",
                    "_id": "6665c84421089add36c1b4fe"
                },
                {
                    "startTime": 26780,
                    "endTime": 27320,
                    "data": "to",
                    "_id": "6665c84421089add36c1b4ff"
                },
                {
                    "startTime": 27320,
                    "endTime": 28370,
                    "data": "tell",
                    "_id": "6665c84421089add36c1b500"
                },
                {
                    "startTime": 28370,
                    "endTime": 28920,
                    "data": "you",
                    "_id": "6665c84421089add36c1b501"
                }
            ],
            "_id": "6665c84421089add36c1b4fc"
        },
        {
            "words": [
                {
                    "startTime": 28920,
                    "endTime": 29960,
                    "data": "You're",
                    "_id": "6665c84421089add36c1b503"
                },
                {
                    "startTime": 29960,
                    "endTime": 30480,
                    "data": "where",
                    "_id": "6665c84421089add36c1b504"
                },
                {
                    "startTime": 30480,
                    "endTime": 31020,
                    "data": "I",
                    "_id": "6665c84421089add36c1b505"
                },
                {
                    "startTime": 31020,
                    "endTime": 32610,
                    "data": "belong",
                    "_id": "6665c84421089add36c1b506"
                }
            ],
            "_id": "6665c84421089add36c1b502"
        },
        {
            "words": [
                {
                    "startTime": 32610,
                    "endTime": 33700,
                    "data": "Still",
                    "_id": "6665c84421089add36c1b508"
                },
                {
                    "startTime": 33700,
                    "endTime": 34220,
                    "data": "trembling",
                    "_id": "6665c84421089add36c1b509"
                },
                {
                    "startTime": 34220,
                    "endTime": 34770,
                    "data": "now",
                    "_id": "6665c84421089add36c1b50a"
                }
            ],
            "_id": "6665c84421089add36c1b507"
        },
        {
            "words": [
                {
                    "startTime": 34770,
                    "endTime": 35300,
                    "data": "I'm",
                    "_id": "6665c84421089add36c1b50c"
                },
                {
                    "startTime": 35300,
                    "endTime": 35830,
                    "data": "scared",
                    "_id": "6665c84421089add36c1b50d"
                },
                {
                    "startTime": 35830,
                    "endTime": 35830,
                    "data": "to",
                    "_id": "6665c84421089add36c1b50e"
                },
                {
                    "startTime": 35830,
                    "endTime": 36870,
                    "data": "move",
                    "_id": "6665c84421089add36c1b50f"
                },
                {
                    "startTime": 36870,
                    "endTime": 38990,
                    "data": "on",
                    "_id": "6665c84421089add36c1b510"
                }
            ],
            "_id": "6665c84421089add36c1b50b"
        },
        {
            "words": [
                {
                    "startTime": 38990,
                    "endTime": 39540,
                    "data": "The",
                    "_id": "6665c84421089add36c1b512"
                },
                {
                    "startTime": 39540,
                    "endTime": 40060,
                    "data": "tears",
                    "_id": "6665c84421089add36c1b513"
                },
                {
                    "startTime": 40060,
                    "endTime": 40580,
                    "data": "I",
                    "_id": "6665c84421089add36c1b514"
                },
                {
                    "startTime": 40580,
                    "endTime": 41670,
                    "data": "cried",
                    "_id": "6665c84421089add36c1b515"
                }
            ],
            "_id": "6665c84421089add36c1b511"
        },
        {
            "words": [
                {
                    "startTime": 41670,
                    "endTime": 42200,
                    "data": "No",
                    "_id": "6665c84421089add36c1b517"
                },
                {
                    "startTime": 42200,
                    "endTime": 42700,
                    "data": "matter",
                    "_id": "6665c84421089add36c1b518"
                },
                {
                    "startTime": 42700,
                    "endTime": 43240,
                    "data": "how",
                    "_id": "6665c84421089add36c1b519"
                },
                {
                    "startTime": 43240,
                    "endTime": 43770,
                    "data": "hard",
                    "_id": "6665c84421089add36c1b51a"
                },
                {
                    "startTime": 43770,
                    "endTime": 44300,
                    "data": "I",
                    "_id": "6665c84421089add36c1b51b"
                },
                {
                    "startTime": 44300,
                    "endTime": 45370,
                    "data": "try",
                    "_id": "6665c84421089add36c1b51c"
                }
            ],
            "_id": "6665c84421089add36c1b516"
        },
        {
            "words": [
                {
                    "startTime": 45370,
                    "endTime": 45900,
                    "data": "Can't",
                    "_id": "6665c84421089add36c1b51e"
                },
                {
                    "startTime": 45900,
                    "endTime": 46430,
                    "data": "change",
                    "_id": "6665c84421089add36c1b51f"
                },
                {
                    "startTime": 46430,
                    "endTime": 46960,
                    "data": "that",
                    "_id": "6665c84421089add36c1b520"
                }
            ],
            "_id": "6665c84421089add36c1b51d"
        },
        {
            "words": [
                {
                    "startTime": 46960,
                    "endTime": 47510,
                    "data": "All",
                    "_id": "6665c84421089add36c1b522"
                },
                {
                    "startTime": 47510,
                    "endTime": 47510,
                    "data": "we",
                    "_id": "6665c84421089add36c1b523"
                },
                {
                    "startTime": 47510,
                    "endTime": 48050,
                    "data": "had",
                    "_id": "6665c84421089add36c1b524"
                },
                {
                    "startTime": 48050,
                    "endTime": 48550,
                    "data": "is",
                    "_id": "6665c84421089add36c1b525"
                },
                {
                    "startTime": 48550,
                    "endTime": 49080,
                    "data": "long",
                    "_id": "6665c84421089add36c1b526"
                },
                {
                    "startTime": 49080,
                    "endTime": 51750,
                    "data": "gone",
                    "_id": "6665c84421089add36c1b527"
                }
            ],
            "_id": "6665c84421089add36c1b521"
        },
        {
            "words": [
                {
                    "startTime": 51750,
                    "endTime": 52820,
                    "data": "Your",
                    "_id": "6665c84421089add36c1b529"
                },
                {
                    "startTime": 52820,
                    "endTime": 53350,
                    "data": "heart",
                    "_id": "6665c84421089add36c1b52a"
                },
                {
                    "startTime": 53350,
                    "endTime": 53880,
                    "data": "can",
                    "_id": "6665c84421089add36c1b52b"
                },
                {
                    "startTime": 53880,
                    "endTime": 54960,
                    "data": "see",
                    "_id": "6665c84421089add36c1b52c"
                }
            ],
            "_id": "6665c84421089add36c1b528"
        },
        {
            "words": [
                {
                    "startTime": 54960,
                    "endTime": 55460,
                    "data": "That",
                    "_id": "6665c84421089add36c1b52e"
                },
                {
                    "startTime": 55460,
                    "endTime": 56540,
                    "data": "this",
                    "_id": "6665c84421089add36c1b52f"
                },
                {
                    "startTime": 56540,
                    "endTime": 57060,
                    "data": "love",
                    "_id": "6665c84421089add36c1b530"
                },
                {
                    "startTime": 57060,
                    "endTime": 57580,
                    "data": "is",
                    "_id": "6665c84421089add36c1b531"
                },
                {
                    "startTime": 57580,
                    "endTime": 58650,
                    "data": "enough",
                    "_id": "6665c84421089add36c1b532"
                }
            ],
            "_id": "6665c84421089add36c1b52d"
        },
        {
            "words": [
                {
                    "startTime": 58650,
                    "endTime": 59730,
                    "data": "And",
                    "_id": "6665c84421089add36c1b534"
                },
                {
                    "startTime": 59730,
                    "endTime": 60250,
                    "data": "I'd",
                    "_id": "6665c84421089add36c1b535"
                },
                {
                    "startTime": 60250,
                    "endTime": 60770,
                    "data": "give",
                    "_id": "6665c84421089add36c1b536"
                },
                {
                    "startTime": 60770,
                    "endTime": 61290,
                    "data": "everything",
                    "_id": "6665c84421089add36c1b537"
                }
            ],
            "_id": "6665c84421089add36c1b533"
        },
        {
            "words": [
                {
                    "startTime": 61290,
                    "endTime": 61860,
                    "data": "For",
                    "_id": "6665c84421089add36c1b539"
                },
                {
                    "startTime": 61860,
                    "endTime": 62360,
                    "data": "one",
                    "_id": "6665c84421089add36c1b53a"
                },
                {
                    "startTime": 62360,
                    "endTime": 62890,
                    "data": "more",
                    "_id": "6665c84421089add36c1b53b"
                },
                {
                    "startTime": 62890,
                    "endTime": 65030,
                    "data": "try",
                    "_id": "6665c84421089add36c1b53c"
                }
            ],
            "_id": "6665c84421089add36c1b538"
        },
        {
            "words": [
                {
                    "startTime": 65030,
                    "endTime": 65560,
                    "data": "You",
                    "_id": "6665c84421089add36c1b53e"
                },
                {
                    "startTime": 65560,
                    "endTime": 66080,
                    "data": "know",
                    "_id": "6665c84421089add36c1b53f"
                },
                {
                    "startTime": 66080,
                    "endTime": 66630,
                    "data": "I",
                    "_id": "6665c84421089add36c1b540"
                },
                {
                    "startTime": 66630,
                    "endTime": 67160,
                    "data": "wanna",
                    "_id": "6665c84421089add36c1b541"
                },
                {
                    "startTime": 67160,
                    "endTime": 67680,
                    "data": "be",
                    "_id": "6665c84421089add36c1b542"
                },
                {
                    "startTime": 67680,
                    "endTime": 68740,
                    "data": "your",
                    "_id": "6665c84421089add36c1b543"
                },
                {
                    "startTime": 68740,
                    "endTime": 69290,
                    "data": "destiny",
                    "_id": "6665c84421089add36c1b544"
                }
            ],
            "_id": "6665c84421089add36c1b53d"
        },
        {
            "words": [
                {
                    "startTime": 69290,
                    "endTime": 69800,
                    "data": "So",
                    "_id": "6665c84421089add36c1b546"
                },
                {
                    "startTime": 69800,
                    "endTime": 70360,
                    "data": "please",
                    "_id": "6665c84421089add36c1b547"
                },
                {
                    "startTime": 70360,
                    "endTime": 70860,
                    "data": "just",
                    "_id": "6665c84421089add36c1b548"
                },
                {
                    "startTime": 70860,
                    "endTime": 71410,
                    "data": "say",
                    "_id": "6665c84421089add36c1b549"
                },
                {
                    "startTime": 71410,
                    "endTime": 71930,
                    "data": "hello",
                    "_id": "6665c84421089add36c1b54a"
                }
            ],
            "_id": "6665c84421089add36c1b545"
        },
        {
            "words": [
                {
                    "startTime": 71930,
                    "endTime": 72460,
                    "data": "This",
                    "_id": "6665c84421089add36c1b54c"
                },
                {
                    "startTime": 72460,
                    "endTime": 72980,
                    "data": "love",
                    "_id": "6665c84421089add36c1b54d"
                },
                {
                    "startTime": 72980,
                    "endTime": 73530,
                    "data": "is",
                    "_id": "6665c84421089add36c1b54e"
                },
                {
                    "startTime": 73530,
                    "endTime": 74060,
                    "data": "haunting",
                    "_id": "6665c84421089add36c1b54f"
                },
                {
                    "startTime": 74060,
                    "endTime": 74060,
                    "data": "me",
                    "_id": "6665c84421089add36c1b550"
                }
            ],
            "_id": "6665c84421089add36c1b54b"
        },
        {
            "words": [
                {
                    "startTime": 74060,
                    "endTime": 74570,
                    "data": "And",
                    "_id": "6665c84421089add36c1b552"
                },
                {
                    "startTime": 74570,
                    "endTime": 75120,
                    "data": "I",
                    "_id": "6665c84421089add36c1b553"
                },
                {
                    "startTime": 75120,
                    "endTime": 75670,
                    "data": "just",
                    "_id": "6665c84421089add36c1b554"
                },
                {
                    "startTime": 75670,
                    "endTime": 76170,
                    "data": "need",
                    "_id": "6665c84421089add36c1b555"
                },
                {
                    "startTime": 76170,
                    "endTime": 76720,
                    "data": "to",
                    "_id": "6665c84421089add36c1b556"
                },
                {
                    "startTime": 76720,
                    "endTime": 78310,
                    "data": "know",
                    "_id": "6665c84421089add36c1b557"
                }
            ],
            "_id": "6665c84421089add36c1b551"
        },
        {
            "words": [
                {
                    "startTime": 78310,
                    "endTime": 78830,
                    "data": "And",
                    "_id": "6665c84421089add36c1b559"
                },
                {
                    "startTime": 78830,
                    "endTime": 79360,
                    "data": "all",
                    "_id": "6665c84421089add36c1b55a"
                },
                {
                    "startTime": 79360,
                    "endTime": 79890,
                    "data": "the",
                    "_id": "6665c84421089add36c1b55b"
                },
                {
                    "startTime": 79890,
                    "endTime": 80950,
                    "data": "memories",
                    "_id": "6665c84421089add36c1b55c"
                }
            ],
            "_id": "6665c84421089add36c1b558"
        },
        {
            "words": [
                {
                    "startTime": 80950,
                    "endTime": 81490,
                    "data": "Are",
                    "_id": "6665c84421089add36c1b55e"
                },
                {
                    "startTime": 81490,
                    "endTime": 82020,
                    "data": "keeping",
                    "_id": "6665c84421089add36c1b55f"
                },
                {
                    "startTime": 82020,
                    "endTime": 82550,
                    "data": "me",
                    "_id": "6665c84421089add36c1b560"
                },
                {
                    "startTime": 82550,
                    "endTime": 83100,
                    "data": "awake",
                    "_id": "6665c84421089add36c1b561"
                },
                {
                    "startTime": 83100,
                    "endTime": 84140,
                    "data": "at",
                    "_id": "6665c84421089add36c1b562"
                },
                {
                    "startTime": 84140,
                    "endTime": 85210,
                    "data": "night",
                    "_id": "6665c84421089add36c1b563"
                }
            ],
            "_id": "6665c84421089add36c1b55d"
        },
        {
            "words": [
                {
                    "startTime": 85210,
                    "endTime": 85740,
                    "data": "I'm",
                    "_id": "6665c84421089add36c1b565"
                },
                {
                    "startTime": 85740,
                    "endTime": 86260,
                    "data": "still",
                    "_id": "6665c84421089add36c1b566"
                },
                {
                    "startTime": 86260,
                    "endTime": 86810,
                    "data": "not",
                    "_id": "6665c84421089add36c1b567"
                },
                {
                    "startTime": 86810,
                    "endTime": 87340,
                    "data": "over",
                    "_id": "6665c84421089add36c1b568"
                },
                {
                    "startTime": 87340,
                    "endTime": 87870,
                    "data": "you",
                    "_id": "6665c84421089add36c1b569"
                }
            ],
            "_id": "6665c84421089add36c1b564"
        },
        {
            "words": [
                {
                    "startTime": 87870,
                    "endTime": 88410,
                    "data": "There's",
                    "_id": "6665c84421089add36c1b56b"
                },
                {
                    "startTime": 88410,
                    "endTime": 88930,
                    "data": "nothing",
                    "_id": "6665c84421089add36c1b56c"
                },
                {
                    "startTime": 88930,
                    "endTime": 88930,
                    "data": "I",
                    "_id": "6665c84421089add36c1b56d"
                },
                {
                    "startTime": 88930,
                    "endTime": 90020,
                    "data": "could",
                    "_id": "6665c84421089add36c1b56e"
                },
                {
                    "startTime": 90020,
                    "endTime": 92120,
                    "data": "do",
                    "_id": "6665c84421089add36c1b56f"
                }
            ],
            "_id": "6665c84421089add36c1b56a"
        },
        {
            "words": [
                {
                    "startTime": 92120,
                    "endTime": 92640,
                    "data": "You",
                    "_id": "6665c84421089add36c1b571"
                },
                {
                    "startTime": 92640,
                    "endTime": 92640,
                    "data": "know",
                    "_id": "6665c84421089add36c1b572"
                },
                {
                    "startTime": 92640,
                    "endTime": 93170,
                    "data": "I",
                    "_id": "6665c84421089add36c1b573"
                },
                {
                    "startTime": 93170,
                    "endTime": 93710,
                    "data": "wanna",
                    "_id": "6665c84421089add36c1b574"
                },
                {
                    "startTime": 93710,
                    "endTime": 94770,
                    "data": "be",
                    "_id": "6665c84421089add36c1b575"
                },
                {
                    "startTime": 94770,
                    "endTime": 95320,
                    "data": "your",
                    "_id": "6665c84421089add36c1b576"
                },
                {
                    "startTime": 95320,
                    "endTime": 95840,
                    "data": "destiny",
                    "_id": "6665c84421089add36c1b577"
                }
            ],
            "_id": "6665c84421089add36c1b570"
        },
        {
            "words": [
                {
                    "startTime": 95840,
                    "endTime": 96370,
                    "data": "So",
                    "_id": "6665c84421089add36c1b579"
                },
                {
                    "startTime": 96370,
                    "endTime": 96920,
                    "data": "please",
                    "_id": "6665c84421089add36c1b57a"
                },
                {
                    "startTime": 96920,
                    "endTime": 96920,
                    "data": "just",
                    "_id": "6665c84421089add36c1b57b"
                },
                {
                    "startTime": 96920,
                    "endTime": 97990,
                    "data": "say",
                    "_id": "6665c84421089add36c1b57c"
                },
                {
                    "startTime": 97990,
                    "endTime": 98540,
                    "data": "hello",
                    "_id": "6665c84421089add36c1b57d"
                }
            ],
            "_id": "6665c84421089add36c1b578"
        },
        {
            "words": [
                {
                    "startTime": 98540,
                    "endTime": 99060,
                    "data": "This",
                    "_id": "6665c84421089add36c1b57f"
                },
                {
                    "startTime": 99060,
                    "endTime": 99580,
                    "data": "love",
                    "_id": "6665c84421089add36c1b580"
                },
                {
                    "startTime": 99580,
                    "endTime": 100110,
                    "data": "is",
                    "_id": "6665c84421089add36c1b581"
                },
                {
                    "startTime": 100110,
                    "endTime": 100650,
                    "data": "haunting",
                    "_id": "6665c84421089add36c1b582"
                },
                {
                    "startTime": 100650,
                    "endTime": 101190,
                    "data": "me",
                    "_id": "6665c84421089add36c1b583"
                }
            ],
            "_id": "6665c84421089add36c1b57e"
        },
        {
            "words": [
                {
                    "startTime": 101190,
                    "endTime": 101700,
                    "data": "And",
                    "_id": "6665c84421089add36c1b585"
                },
                {
                    "startTime": 101700,
                    "endTime": 101700,
                    "data": "I",
                    "_id": "6665c84421089add36c1b586"
                },
                {
                    "startTime": 101700,
                    "endTime": 102250,
                    "data": "just",
                    "_id": "6665c84421089add36c1b587"
                },
                {
                    "startTime": 102250,
                    "endTime": 102770,
                    "data": "need",
                    "_id": "6665c84421089add36c1b588"
                },
                {
                    "startTime": 102770,
                    "endTime": 103320,
                    "data": "to",
                    "_id": "6665c84421089add36c1b589"
                },
                {
                    "startTime": 103320,
                    "endTime": 104920,
                    "data": "know",
                    "_id": "6665c84421089add36c1b58a"
                }
            ],
            "_id": "6665c84421089add36c1b584"
        },
        {
            "words": [
                {
                    "startTime": 104920,
                    "endTime": 105440,
                    "data": "And",
                    "_id": "6665c84421089add36c1b58c"
                },
                {
                    "startTime": 105440,
                    "endTime": 105960,
                    "data": "all",
                    "_id": "6665c84421089add36c1b58d"
                },
                {
                    "startTime": 105960,
                    "endTime": 106480,
                    "data": "the",
                    "_id": "6665c84421089add36c1b58e"
                },
                {
                    "startTime": 106480,
                    "endTime": 107560,
                    "data": "memories",
                    "_id": "6665c84421089add36c1b58f"
                }
            ],
            "_id": "6665c84421089add36c1b58b"
        },
        {
            "words": [
                {
                    "startTime": 107560,
                    "endTime": 108080,
                    "data": "Are",
                    "_id": "6665c84421089add36c1b591"
                },
                {
                    "startTime": 108080,
                    "endTime": 108620,
                    "data": "keeping",
                    "_id": "6665c84421089add36c1b592"
                },
                {
                    "startTime": 108620,
                    "endTime": 109170,
                    "data": "me",
                    "_id": "6665c84421089add36c1b593"
                },
                {
                    "startTime": 109170,
                    "endTime": 109700,
                    "data": "awake",
                    "_id": "6665c84421089add36c1b594"
                },
                {
                    "startTime": 109700,
                    "endTime": 110750,
                    "data": "at",
                    "_id": "6665c84421089add36c1b595"
                },
                {
                    "startTime": 110750,
                    "endTime": 111790,
                    "data": "night",
                    "_id": "6665c84421089add36c1b596"
                }
            ],
            "_id": "6665c84421089add36c1b590"
        },
        {
            "words": [
                {
                    "startTime": 111790,
                    "endTime": 112340,
                    "data": "I'm",
                    "_id": "6665c84421089add36c1b598"
                },
                {
                    "startTime": 112340,
                    "endTime": 112870,
                    "data": "still",
                    "_id": "6665c84421089add36c1b599"
                },
                {
                    "startTime": 112870,
                    "endTime": 113390,
                    "data": "not",
                    "_id": "6665c84421089add36c1b59a"
                },
                {
                    "startTime": 113390,
                    "endTime": 113930,
                    "data": "over",
                    "_id": "6665c84421089add36c1b59b"
                },
                {
                    "startTime": 113930,
                    "endTime": 114460,
                    "data": "you",
                    "_id": "6665c84421089add36c1b59c"
                }
            ],
            "_id": "6665c84421089add36c1b597"
        },
        {
            "words": [
                {
                    "startTime": 114460,
                    "endTime": 114980,
                    "data": "There's",
                    "_id": "6665c84421089add36c1b59e"
                },
                {
                    "startTime": 114980,
                    "endTime": 115540,
                    "data": "nothing",
                    "_id": "6665c84421089add36c1b59f"
                },
                {
                    "startTime": 115540,
                    "endTime": 116060,
                    "data": "I",
                    "_id": "6665c84421089add36c1b5a0"
                },
                {
                    "startTime": 116060,
                    "endTime": 116580,
                    "data": "could",
                    "_id": "6665c84421089add36c1b5a1"
                },
                {
                    "startTime": 116580,
                    "endTime": 119580,
                    "data": "do",
                    "_id": "6665c84421089add36c1b5a2"
                }
            ],
            "_id": "6665c84421089add36c1b59d"
        },
        {
            "words": [
                {
                    "startTime": 133130,
                    "endTime": 133130,
                    "data": "The",
                    "_id": "6665c84421089add36c1b5a4"
                },
                {
                    "startTime": 133130,
                    "endTime": 133650,
                    "data": "tears",
                    "_id": "6665c84421089add36c1b5a5"
                },
                {
                    "startTime": 133650,
                    "endTime": 134180,
                    "data": "I",
                    "_id": "6665c84421089add36c1b5a6"
                },
                {
                    "startTime": 134180,
                    "endTime": 134720,
                    "data": "cried",
                    "_id": "6665c84421089add36c1b5a7"
                }
            ],
            "_id": "6665c84421089add36c1b5a3"
        },
        {
            "words": [
                {
                    "startTime": 134720,
                    "endTime": 135780,
                    "data": "No",
                    "_id": "6665c84421089add36c1b5a9"
                },
                {
                    "startTime": 135780,
                    "endTime": 136330,
                    "data": "matter",
                    "_id": "6665c84421089add36c1b5aa"
                },
                {
                    "startTime": 136330,
                    "endTime": 136860,
                    "data": "how",
                    "_id": "6665c84421089add36c1b5ab"
                },
                {
                    "startTime": 136860,
                    "endTime": 137380,
                    "data": "hard",
                    "_id": "6665c84421089add36c1b5ac"
                },
                {
                    "startTime": 137380,
                    "endTime": 137380,
                    "data": "I",
                    "_id": "6665c84421089add36c1b5ad"
                },
                {
                    "startTime": 137380,
                    "endTime": 138470,
                    "data": "try",
                    "_id": "6665c84421089add36c1b5ae"
                }
            ],
            "_id": "6665c84421089add36c1b5a8"
        },
        {
            "words": [
                {
                    "startTime": 138470,
                    "endTime": 138990,
                    "data": "Can't",
                    "_id": "6665c84421089add36c1b5b0"
                },
                {
                    "startTime": 138990,
                    "endTime": 139510,
                    "data": "change",
                    "_id": "6665c84421089add36c1b5b1"
                },
                {
                    "startTime": 139510,
                    "endTime": 140050,
                    "data": "that",
                    "_id": "6665c84421089add36c1b5b2"
                }
            ],
            "_id": "6665c84421089add36c1b5af"
        },
        {
            "words": [
                {
                    "startTime": 140050,
                    "endTime": 140590,
                    "data": "All",
                    "_id": "6665c84421089add36c1b5b4"
                },
                {
                    "startTime": 140590,
                    "endTime": 141120,
                    "data": "we",
                    "_id": "6665c84421089add36c1b5b5"
                },
                {
                    "startTime": 141120,
                    "endTime": 141650,
                    "data": "had",
                    "_id": "6665c84421089add36c1b5b6"
                },
                {
                    "startTime": 141650,
                    "endTime": 142200,
                    "data": "is",
                    "_id": "6665c84421089add36c1b5b7"
                },
                {
                    "startTime": 142200,
                    "endTime": 142710,
                    "data": "long",
                    "_id": "6665c84421089add36c1b5b8"
                },
                {
                    "startTime": 142710,
                    "endTime": 145400,
                    "data": "gone",
                    "_id": "6665c84421089add36c1b5b9"
                }
            ],
            "_id": "6665c84421089add36c1b5b3"
        },
        {
            "words": [
                {
                    "startTime": 145400,
                    "endTime": 145930,
                    "data": "Your",
                    "_id": "6665c84421089add36c1b5bb"
                },
                {
                    "startTime": 145930,
                    "endTime": 146420,
                    "data": "heart",
                    "_id": "6665c84421089add36c1b5bc"
                },
                {
                    "startTime": 146420,
                    "endTime": 147500,
                    "data": "can",
                    "_id": "6665c84421089add36c1b5bd"
                },
                {
                    "startTime": 147500,
                    "endTime": 148020,
                    "data": "see",
                    "_id": "6665c84421089add36c1b5be"
                }
            ],
            "_id": "6665c84421089add36c1b5ba"
        },
        {
            "words": [
                {
                    "startTime": 148020,
                    "endTime": 148570,
                    "data": "That",
                    "_id": "6665c84421089add36c1b5c0"
                },
                {
                    "startTime": 148570,
                    "endTime": 149620,
                    "data": "this",
                    "_id": "6665c84421089add36c1b5c1"
                },
                {
                    "startTime": 149620,
                    "endTime": 150180,
                    "data": "love",
                    "_id": "6665c84421089add36c1b5c2"
                },
                {
                    "startTime": 150180,
                    "endTime": 150710,
                    "data": "is",
                    "_id": "6665c84421089add36c1b5c3"
                },
                {
                    "startTime": 150710,
                    "endTime": 151760,
                    "data": "enough",
                    "_id": "6665c84421089add36c1b5c4"
                }
            ],
            "_id": "6665c84421089add36c1b5bf"
        },
        {
            "words": [
                {
                    "startTime": 151760,
                    "endTime": 152830,
                    "data": "And",
                    "_id": "6665c84421089add36c1b5c6"
                },
                {
                    "startTime": 152830,
                    "endTime": 153330,
                    "data": "I'd",
                    "_id": "6665c84421089add36c1b5c7"
                },
                {
                    "startTime": 153330,
                    "endTime": 153880,
                    "data": "give",
                    "_id": "6665c84421089add36c1b5c8"
                },
                {
                    "startTime": 153880,
                    "endTime": 154400,
                    "data": "everything",
                    "_id": "6665c84421089add36c1b5c9"
                },
                {
                    "startTime": 154400,
                    "endTime": 155470,
                    "data": "for",
                    "_id": "6665c84421089add36c1b5ca"
                },
                {
                    "startTime": 155470,
                    "endTime": 155990,
                    "data": "one",
                    "_id": "6665c84421089add36c1b5cb"
                },
                {
                    "startTime": 155990,
                    "endTime": 156530,
                    "data": "more",
                    "_id": "6665c84421089add36c1b5cc"
                },
                {
                    "startTime": 156530,
                    "endTime": 158130,
                    "data": "try",
                    "_id": "6665c84421089add36c1b5cd"
                }
            ],
            "_id": "6665c84421089add36c1b5c5"
        },
        {
            "words": [
                {
                    "startTime": 158130,
                    "endTime": 158680,
                    "data": "You",
                    "_id": "6665c84421089add36c1b5cf"
                },
                {
                    "startTime": 158680,
                    "endTime": 159210,
                    "data": "know",
                    "_id": "6665c84421089add36c1b5d0"
                },
                {
                    "startTime": 159210,
                    "endTime": 159740,
                    "data": "I",
                    "_id": "6665c84421089add36c1b5d1"
                },
                {
                    "startTime": 159740,
                    "endTime": 160260,
                    "data": "wanna",
                    "_id": "6665c84421089add36c1b5d2"
                },
                {
                    "startTime": 160260,
                    "endTime": 160780,
                    "data": "be",
                    "_id": "6665c84421089add36c1b5d3"
                },
                {
                    "startTime": 160780,
                    "endTime": 161850,
                    "data": "your",
                    "_id": "6665c84421089add36c1b5d4"
                },
                {
                    "startTime": 161850,
                    "endTime": 162380,
                    "data": "destiny",
                    "_id": "6665c84421089add36c1b5d5"
                }
            ],
            "_id": "6665c84421089add36c1b5ce"
        },
        {
            "words": [
                {
                    "startTime": 162380,
                    "endTime": 162900,
                    "data": "So",
                    "_id": "6665c84421089add36c1b5d7"
                },
                {
                    "startTime": 162900,
                    "endTime": 163450,
                    "data": "please",
                    "_id": "6665c84421089add36c1b5d8"
                },
                {
                    "startTime": 163450,
                    "endTime": 163990,
                    "data": "just",
                    "_id": "6665c84421089add36c1b5d9"
                },
                {
                    "startTime": 163990,
                    "endTime": 164510,
                    "data": "say",
                    "_id": "6665c84421089add36c1b5da"
                },
                {
                    "startTime": 164510,
                    "endTime": 165010,
                    "data": "hello",
                    "_id": "6665c84421089add36c1b5db"
                }
            ],
            "_id": "6665c84421089add36c1b5d6"
        },
        {
            "words": [
                {
                    "startTime": 165010,
                    "endTime": 165590,
                    "data": "This",
                    "_id": "6665c84421089add36c1b5dd"
                },
                {
                    "startTime": 165590,
                    "endTime": 166110,
                    "data": "love",
                    "_id": "6665c84421089add36c1b5de"
                },
                {
                    "startTime": 166110,
                    "endTime": 166610,
                    "data": "is",
                    "_id": "6665c84421089add36c1b5df"
                },
                {
                    "startTime": 166610,
                    "endTime": 167170,
                    "data": "haunting",
                    "_id": "6665c84421089add36c1b5e0"
                },
                {
                    "startTime": 167170,
                    "endTime": 167680,
                    "data": "me",
                    "_id": "6665c84421089add36c1b5e1"
                }
            ],
            "_id": "6665c84421089add36c1b5dc"
        },
        {
            "words": [
                {
                    "startTime": 167680,
                    "endTime": 167680,
                    "data": "And",
                    "_id": "6665c84421089add36c1b5e3"
                },
                {
                    "startTime": 167680,
                    "endTime": 168210,
                    "data": "I",
                    "_id": "6665c84421089add36c1b5e4"
                },
                {
                    "startTime": 168210,
                    "endTime": 168750,
                    "data": "just",
                    "_id": "6665c84421089add36c1b5e5"
                },
                {
                    "startTime": 168750,
                    "endTime": 169280,
                    "data": "need",
                    "_id": "6665c84421089add36c1b5e6"
                },
                {
                    "startTime": 169280,
                    "endTime": 169810,
                    "data": "to",
                    "_id": "6665c84421089add36c1b5e7"
                },
                {
                    "startTime": 169810,
                    "endTime": 171390,
                    "data": "know",
                    "_id": "6665c84421089add36c1b5e8"
                }
            ],
            "_id": "6665c84421089add36c1b5e2"
        },
        {
            "words": [
                {
                    "startTime": 171390,
                    "endTime": 171920,
                    "data": "And",
                    "_id": "6665c84421089add36c1b5ea"
                },
                {
                    "startTime": 171920,
                    "endTime": 172470,
                    "data": "all",
                    "_id": "6665c84421089add36c1b5eb"
                },
                {
                    "startTime": 172470,
                    "endTime": 172990,
                    "data": "the",
                    "_id": "6665c84421089add36c1b5ec"
                },
                {
                    "startTime": 172990,
                    "endTime": 174090,
                    "data": "memories",
                    "_id": "6665c84421089add36c1b5ed"
                }
            ],
            "_id": "6665c84421089add36c1b5e9"
        },
        {
            "words": [
                {
                    "startTime": 174090,
                    "endTime": 174090,
                    "data": "Are",
                    "_id": "6665c84421089add36c1b5ef"
                },
                {
                    "startTime": 174090,
                    "endTime": 175130,
                    "data": "keeping",
                    "_id": "6665c84421089add36c1b5f0"
                },
                {
                    "startTime": 175130,
                    "endTime": 175660,
                    "data": "me",
                    "_id": "6665c84421089add36c1b5f1"
                },
                {
                    "startTime": 175660,
                    "endTime": 176190,
                    "data": "awake",
                    "_id": "6665c84421089add36c1b5f2"
                },
                {
                    "startTime": 176190,
                    "endTime": 177260,
                    "data": "at",
                    "_id": "6665c84421089add36c1b5f3"
                },
                {
                    "startTime": 177260,
                    "endTime": 178310,
                    "data": "night",
                    "_id": "6665c84421089add36c1b5f4"
                }
            ],
            "_id": "6665c84421089add36c1b5ee"
        },
        {
            "words": [
                {
                    "startTime": 178310,
                    "endTime": 178840,
                    "data": "I'm",
                    "_id": "6665c84421089add36c1b5f6"
                },
                {
                    "startTime": 178840,
                    "endTime": 179390,
                    "data": "still",
                    "_id": "6665c84421089add36c1b5f7"
                },
                {
                    "startTime": 179390,
                    "endTime": 179890,
                    "data": "not",
                    "_id": "6665c84421089add36c1b5f8"
                },
                {
                    "startTime": 179890,
                    "endTime": 180440,
                    "data": "over",
                    "_id": "6665c84421089add36c1b5f9"
                },
                {
                    "startTime": 180440,
                    "endTime": 180960,
                    "data": "you",
                    "_id": "6665c84421089add36c1b5fa"
                }
            ],
            "_id": "6665c84421089add36c1b5f5"
        },
        {
            "words": [
                {
                    "startTime": 180960,
                    "endTime": 181490,
                    "data": "There's",
                    "_id": "6665c84421089add36c1b5fc"
                },
                {
                    "startTime": 181490,
                    "endTime": 182040,
                    "data": "nothing",
                    "_id": "6665c84421089add36c1b5fd"
                },
                {
                    "startTime": 182040,
                    "endTime": 182560,
                    "data": "I",
                    "_id": "6665c84421089add36c1b5fe"
                },
                {
                    "startTime": 182560,
                    "endTime": 183080,
                    "data": "could",
                    "_id": "6665c84421089add36c1b5ff"
                },
                {
                    "startTime": 183080,
                    "endTime": 185220,
                    "data": "do",
                    "_id": "6665c84421089add36c1b600"
                }
            ],
            "_id": "6665c84421089add36c1b5fb"
        },
        {
            "words": [
                {
                    "startTime": 185220,
                    "endTime": 185750,
                    "data": "You",
                    "_id": "6665c84421089add36c1b602"
                },
                {
                    "startTime": 185750,
                    "endTime": 186300,
                    "data": "know",
                    "_id": "6665c84421089add36c1b603"
                },
                {
                    "startTime": 186300,
                    "endTime": 186820,
                    "data": "I",
                    "_id": "6665c84421089add36c1b604"
                },
                {
                    "startTime": 186820,
                    "endTime": 187370,
                    "data": "wanna",
                    "_id": "6665c84421089add36c1b605"
                },
                {
                    "startTime": 187370,
                    "endTime": 187900,
                    "data": "be",
                    "_id": "6665c84421089add36c1b606"
                },
                {
                    "startTime": 187900,
                    "endTime": 188390,
                    "data": "your",
                    "_id": "6665c84421089add36c1b607"
                },
                {
                    "startTime": 188390,
                    "endTime": 188940,
                    "data": "destiny",
                    "_id": "6665c84421089add36c1b608"
                }
            ],
            "_id": "6665c84421089add36c1b601"
        },
        {
            "words": [
                {
                    "startTime": 188940,
                    "endTime": 189460,
                    "data": "So",
                    "_id": "6665c84421089add36c1b60a"
                },
                {
                    "startTime": 189460,
                    "endTime": 189990,
                    "data": "please",
                    "_id": "6665c84421089add36c1b60b"
                },
                {
                    "startTime": 189990,
                    "endTime": 190520,
                    "data": "just",
                    "_id": "6665c84421089add36c1b60c"
                },
                {
                    "startTime": 190520,
                    "endTime": 191590,
                    "data": "say",
                    "_id": "6665c84421089add36c1b60d"
                },
                {
                    "startTime": 191590,
                    "endTime": 192130,
                    "data": "hello",
                    "_id": "6665c84421089add36c1b60e"
                }
            ],
            "_id": "6665c84421089add36c1b609"
        },
        {
            "words": [
                {
                    "startTime": 192130,
                    "endTime": 192670,
                    "data": "This",
                    "_id": "6665c84421089add36c1b610"
                },
                {
                    "startTime": 192670,
                    "endTime": 192670,
                    "data": "love",
                    "_id": "6665c84421089add36c1b611"
                },
                {
                    "startTime": 192670,
                    "endTime": 193200,
                    "data": "is",
                    "_id": "6665c84421089add36c1b612"
                },
                {
                    "startTime": 193200,
                    "endTime": 193730,
                    "data": "haunting",
                    "_id": "6665c84421089add36c1b613"
                },
                {
                    "startTime": 193730,
                    "endTime": 194270,
                    "data": "me",
                    "_id": "6665c84421089add36c1b614"
                }
            ],
            "_id": "6665c84421089add36c1b60f"
        },
        {
            "words": [
                {
                    "startTime": 194270,
                    "endTime": 194800,
                    "data": "And",
                    "_id": "6665c84421089add36c1b616"
                },
                {
                    "startTime": 194800,
                    "endTime": 195290,
                    "data": "I",
                    "_id": "6665c84421089add36c1b617"
                },
                {
                    "startTime": 195290,
                    "endTime": 195840,
                    "data": "just",
                    "_id": "6665c84421089add36c1b618"
                },
                {
                    "startTime": 195840,
                    "endTime": 195840,
                    "data": "need",
                    "_id": "6665c84421089add36c1b619"
                },
                {
                    "startTime": 195840,
                    "endTime": 196370,
                    "data": "to",
                    "_id": "6665c84421089add36c1b61a"
                },
                {
                    "startTime": 196370,
                    "endTime": 197960,
                    "data": "know",
                    "_id": "6665c84421089add36c1b61b"
                }
            ],
            "_id": "6665c84421089add36c1b615"
        },
        {
            "words": [
                {
                    "startTime": 197960,
                    "endTime": 198490,
                    "data": "And",
                    "_id": "6665c84421089add36c1b61d"
                },
                {
                    "startTime": 198490,
                    "endTime": 199030,
                    "data": "all",
                    "_id": "6665c84421089add36c1b61e"
                },
                {
                    "startTime": 199030,
                    "endTime": 199550,
                    "data": "the",
                    "_id": "6665c84421089add36c1b61f"
                },
                {
                    "startTime": 199550,
                    "endTime": 200650,
                    "data": "memories",
                    "_id": "6665c84421089add36c1b620"
                }
            ],
            "_id": "6665c84421089add36c1b61c"
        },
        {
            "words": [
                {
                    "startTime": 200650,
                    "endTime": 201180,
                    "data": "Are",
                    "_id": "6665c84421089add36c1b622"
                },
                {
                    "startTime": 201180,
                    "endTime": 201710,
                    "data": "keeping",
                    "_id": "6665c84421089add36c1b623"
                },
                {
                    "startTime": 201710,
                    "endTime": 202200,
                    "data": "me",
                    "_id": "6665c84421089add36c1b624"
                },
                {
                    "startTime": 202200,
                    "endTime": 202750,
                    "data": "awake",
                    "_id": "6665c84421089add36c1b625"
                },
                {
                    "startTime": 202750,
                    "endTime": 203820,
                    "data": "at",
                    "_id": "6665c84421089add36c1b626"
                },
                {
                    "startTime": 203820,
                    "endTime": 204860,
                    "data": "night",
                    "_id": "6665c84421089add36c1b627"
                }
            ],
            "_id": "6665c84421089add36c1b621"
        },
        {
            "words": [
                {
                    "startTime": 204860,
                    "endTime": 205400,
                    "data": "I'm",
                    "_id": "6665c84421089add36c1b629"
                },
                {
                    "startTime": 205400,
                    "endTime": 205940,
                    "data": "still",
                    "_id": "6665c84421089add36c1b62a"
                },
                {
                    "startTime": 205940,
                    "endTime": 206480,
                    "data": "not",
                    "_id": "6665c84421089add36c1b62b"
                },
                {
                    "startTime": 206480,
                    "endTime": 207000,
                    "data": "over",
                    "_id": "6665c84421089add36c1b62c"
                },
                {
                    "startTime": 207000,
                    "endTime": 207530,
                    "data": "you",
                    "_id": "6665c84421089add36c1b62d"
                }
            ],
            "_id": "6665c84421089add36c1b628"
        },
        {
            "words": [
                {
                    "startTime": 207530,
                    "endTime": 208060,
                    "data": "There's",
                    "_id": "6665c84421089add36c1b62f"
                },
                {
                    "startTime": 208060,
                    "endTime": 208610,
                    "data": "nothing",
                    "_id": "6665c84421089add36c1b630"
                },
                {
                    "startTime": 208610,
                    "endTime": 209120,
                    "data": "I",
                    "_id": "6665c84421089add36c1b631"
                },
                {
                    "startTime": 209120,
                    "endTime": 209650,
                    "data": "could",
                    "_id": "6665c84421089add36c1b632"
                },
                {
                    "startTime": 209650,
                    "endTime": 211770,
                    "data": "do",
                    "_id": "6665c84421089add36c1b633"
                }
            ],
            "_id": "6665c84421089add36c1b62e"
        },
        {
            "words": [
                {
                    "startTime": 211770,
                    "endTime": 212330,
                    "data": "You",
                    "_id": "6665c84421089add36c1b635"
                },
                {
                    "startTime": 212330,
                    "endTime": 212860,
                    "data": "know",
                    "_id": "6665c84421089add36c1b636"
                },
                {
                    "startTime": 212860,
                    "endTime": 213360,
                    "data": "I",
                    "_id": "6665c84421089add36c1b637"
                },
                {
                    "startTime": 213360,
                    "endTime": 213910,
                    "data": "wanna",
                    "_id": "6665c84421089add36c1b638"
                },
                {
                    "startTime": 213910,
                    "endTime": 214440,
                    "data": "be",
                    "_id": "6665c84421089add36c1b639"
                },
                {
                    "startTime": 214440,
                    "endTime": 214960,
                    "data": "your",
                    "_id": "6665c84421089add36c1b63a"
                },
                {
                    "startTime": 214960,
                    "endTime": 215500,
                    "data": "destiny",
                    "_id": "6665c84421089add36c1b63b"
                }
            ],
            "_id": "6665c84421089add36c1b634"
        },
        {
            "words": [
                {
                    "startTime": 215500,
                    "endTime": 216040,
                    "data": "So",
                    "_id": "6665c84421089add36c1b63d"
                },
                {
                    "startTime": 216040,
                    "endTime": 216550,
                    "data": "please",
                    "_id": "6665c84421089add36c1b63e"
                },
                {
                    "startTime": 216550,
                    "endTime": 217080,
                    "data": "just",
                    "_id": "6665c84421089add36c1b63f"
                },
                {
                    "startTime": 217080,
                    "endTime": 217630,
                    "data": "say",
                    "_id": "6665c84421089add36c1b640"
                },
                {
                    "startTime": 217630,
                    "endTime": 218150,
                    "data": "hello",
                    "_id": "6665c84421089add36c1b641"
                }
            ],
            "_id": "6665c84421089add36c1b63c"
        },
        {
            "words": [
                {
                    "startTime": 218150,
                    "endTime": 218690,
                    "data": "This",
                    "_id": "6665c84421089add36c1b643"
                },
                {
                    "startTime": 218690,
                    "endTime": 219230,
                    "data": "love",
                    "_id": "6665c84421089add36c1b644"
                },
                {
                    "startTime": 219230,
                    "endTime": 219740,
                    "data": "is",
                    "_id": "6665c84421089add36c1b645"
                },
                {
                    "startTime": 219740,
                    "endTime": 220290,
                    "data": "haunting",
                    "_id": "6665c84421089add36c1b646"
                },
                {
                    "startTime": 220290,
                    "endTime": 220810,
                    "data": "me",
                    "_id": "6665c84421089add36c1b647"
                }
            ],
            "_id": "6665c84421089add36c1b642"
        },
        {
            "words": [
                {
                    "startTime": 220810,
                    "endTime": 221340,
                    "data": "And",
                    "_id": "6665c84421089add36c1b649"
                },
                {
                    "startTime": 221340,
                    "endTime": 221890,
                    "data": "I",
                    "_id": "6665c84421089add36c1b64a"
                },
                {
                    "startTime": 221890,
                    "endTime": 222410,
                    "data": "just",
                    "_id": "6665c84421089add36c1b64b"
                },
                {
                    "startTime": 222410,
                    "endTime": 222410,
                    "data": "need",
                    "_id": "6665c84421089add36c1b64c"
                },
                {
                    "startTime": 222410,
                    "endTime": 222940,
                    "data": "to",
                    "_id": "6665c84421089add36c1b64d"
                },
                {
                    "startTime": 222940,
                    "endTime": 224530,
                    "data": "know",
                    "_id": "6665c84421089add36c1b64e"
                }
            ],
            "_id": "6665c84421089add36c1b648"
        },
        {
            "words": [
                {
                    "startTime": 224530,
                    "endTime": 225060,
                    "data": "And",
                    "_id": "6665c84421089add36c1b650"
                },
                {
                    "startTime": 225060,
                    "endTime": 225610,
                    "data": "all",
                    "_id": "6665c84421089add36c1b651"
                },
                {
                    "startTime": 225610,
                    "endTime": 226120,
                    "data": "the",
                    "_id": "6665c84421089add36c1b652"
                },
                {
                    "startTime": 226120,
                    "endTime": 227180,
                    "data": "memories",
                    "_id": "6665c84421089add36c1b653"
                }
            ],
            "_id": "6665c84421089add36c1b64f"
        },
        {
            "words": [
                {
                    "startTime": 227180,
                    "endTime": 227730,
                    "data": "Are",
                    "_id": "6665c84421089add36c1b655"
                },
                {
                    "startTime": 227730,
                    "endTime": 228260,
                    "data": "keeping",
                    "_id": "6665c84421089add36c1b656"
                },
                {
                    "startTime": 228260,
                    "endTime": 228790,
                    "data": "me",
                    "_id": "6665c84421089add36c1b657"
                },
                {
                    "startTime": 228790,
                    "endTime": 229830,
                    "data": "awake",
                    "_id": "6665c84421089add36c1b658"
                },
                {
                    "startTime": 229830,
                    "endTime": 230380,
                    "data": "at",
                    "_id": "6665c84421089add36c1b659"
                },
                {
                    "startTime": 230380,
                    "endTime": 231430,
                    "data": "night",
                    "_id": "6665c84421089add36c1b65a"
                }
            ],
            "_id": "6665c84421089add36c1b654"
        },
        {
            "words": [
                {
                    "startTime": 231430,
                    "endTime": 232510,
                    "data": "I'm",
                    "_id": "6665c84421089add36c1b65c"
                },
                {
                    "startTime": 232510,
                    "endTime": 233030,
                    "data": "still",
                    "_id": "6665c84421089add36c1b65d"
                },
                {
                    "startTime": 233030,
                    "endTime": 233560,
                    "data": "not",
                    "_id": "6665c84421089add36c1b65e"
                },
                {
                    "startTime": 233560,
                    "endTime": 233560,
                    "data": "over",
                    "_id": "6665c84421089add36c1b65f"
                },
                {
                    "startTime": 233560,
                    "endTime": 234100,
                    "data": "you",
                    "_id": "6665c84421089add36c1b660"
                }
            ],
            "_id": "6665c84421089add36c1b65b"
        },
        {
            "words": [
                {
                    "startTime": 234100,
                    "endTime": 234620,
                    "data": "There's",
                    "_id": "6665c84421089add36c1b662"
                },
                {
                    "startTime": 234620,
                    "endTime": 235150,
                    "data": "nothing",
                    "_id": "6665c84421089add36c1b663"
                },
                {
                    "startTime": 235150,
                    "endTime": 235690,
                    "data": "I",
                    "_id": "6665c84421089add36c1b664"
                },
                {
                    "startTime": 235690,
                    "endTime": 236240,
                    "data": "could",
                    "_id": "6665c84421089add36c1b665"
                },
                {
                    "startTime": 236240,
                    "endTime": 238370,
                    "data": "do",
                    "_id": "6665c84421089add36c1b666"
                }
            ],
            "_id": "6665c84421089add36c1b661"
        },
        {
            "words": [
                {
                    "startTime": 238370,
                    "endTime": 238900,
                    "data": "You",
                    "_id": "6665c84421089add36c1b668"
                },
                {
                    "startTime": 238900,
                    "endTime": 239450,
                    "data": "know",
                    "_id": "6665c84421089add36c1b669"
                },
                {
                    "startTime": 239450,
                    "endTime": 239980,
                    "data": "I",
                    "_id": "6665c84421089add36c1b66a"
                },
                {
                    "startTime": 239980,
                    "endTime": 240510,
                    "data": "wanna",
                    "_id": "6665c84421089add36c1b66b"
                },
                {
                    "startTime": 240510,
                    "endTime": 241030,
                    "data": "be",
                    "_id": "6665c84421089add36c1b66c"
                },
                {
                    "startTime": 241030,
                    "endTime": 241580,
                    "data": "your",
                    "_id": "6665c84421089add36c1b66d"
                },
                {
                    "startTime": 241580,
                    "endTime": 242100,
                    "data": "destiny",
                    "_id": "6665c84421089add36c1b66e"
                }
            ],
            "_id": "6665c84421089add36c1b667"
        },
        {
            "words": [
                {
                    "startTime": 242100,
                    "endTime": 242610,
                    "data": "So",
                    "_id": "6665c84421089add36c1b670"
                },
                {
                    "startTime": 242610,
                    "endTime": 243160,
                    "data": "please",
                    "_id": "6665c84421089add36c1b671"
                },
                {
                    "startTime": 243160,
                    "endTime": 243680,
                    "data": "just",
                    "_id": "6665c84421089add36c1b672"
                },
                {
                    "startTime": 243680,
                    "endTime": 244210,
                    "data": "say",
                    "_id": "6665c84421089add36c1b673"
                },
                {
                    "startTime": 244210,
                    "endTime": 245270,
                    "data": "hello",
                    "_id": "6665c84421089add36c1b674"
                }
            ],
            "_id": "6665c84421089add36c1b66f"
        },
        {
            "words": [
                {
                    "startTime": 245270,
                    "endTime": 245270,
                    "data": "This",
                    "_id": "6665c84421089add36c1b676"
                },
                {
                    "startTime": 245270,
                    "endTime": 245810,
                    "data": "love",
                    "_id": "6665c84421089add36c1b677"
                },
                {
                    "startTime": 245810,
                    "endTime": 246360,
                    "data": "is",
                    "_id": "6665c84421089add36c1b678"
                },
                {
                    "startTime": 246360,
                    "endTime": 246880,
                    "data": "haunting",
                    "_id": "6665c84421089add36c1b679"
                },
                {
                    "startTime": 246880,
                    "endTime": 247390,
                    "data": "me",
                    "_id": "6665c84421089add36c1b67a"
                }
            ],
            "_id": "6665c84421089add36c1b675"
        },
        {
            "words": [
                {
                    "startTime": 247390,
                    "endTime": 247920,
                    "data": "And",
                    "_id": "6665c84421089add36c1b67c"
                },
                {
                    "startTime": 247920,
                    "endTime": 248480,
                    "data": "I",
                    "_id": "6665c84421089add36c1b67d"
                },
                {
                    "startTime": 248480,
                    "endTime": 249010,
                    "data": "just",
                    "_id": "6665c84421089add36c1b67e"
                },
                {
                    "startTime": 249010,
                    "endTime": 249010,
                    "data": "need",
                    "_id": "6665c84421089add36c1b67f"
                },
                {
                    "startTime": 249010,
                    "endTime": 249540,
                    "data": "to",
                    "_id": "6665c84421089add36c1b680"
                },
                {
                    "startTime": 249540,
                    "endTime": 251650,
                    "data": "know",
                    "_id": "6665c84421089add36c1b681"
                }
            ],
            "_id": "6665c84421089add36c1b67b"
        },
        {
            "words": [
                {
                    "startTime": 251650,
                    "endTime": 252180,
                    "data": "And",
                    "_id": "6665c84421089add36c1b683"
                },
                {
                    "startTime": 252180,
                    "endTime": 252700,
                    "data": "all",
                    "_id": "6665c84421089add36c1b684"
                },
                {
                    "startTime": 252700,
                    "endTime": 253260,
                    "data": "the",
                    "_id": "6665c84421089add36c1b685"
                },
                {
                    "startTime": 253260,
                    "endTime": 253780,
                    "data": "memories",
                    "_id": "6665c84421089add36c1b686"
                }
            ],
            "_id": "6665c84421089add36c1b682"
        },
        {
            "words": [
                {
                    "startTime": 253780,
                    "endTime": 254300,
                    "data": "Are",
                    "_id": "6665c84421089add36c1b688"
                },
                {
                    "startTime": 254300,
                    "endTime": 254860,
                    "data": "keeping",
                    "_id": "6665c84421089add36c1b689"
                },
                {
                    "startTime": 254860,
                    "endTime": 255380,
                    "data": "me",
                    "_id": "6665c84421089add36c1b68a"
                },
                {
                    "startTime": 255380,
                    "endTime": 255910,
                    "data": "awake",
                    "_id": "6665c84421089add36c1b68b"
                },
                {
                    "startTime": 255910,
                    "endTime": 256990,
                    "data": "at",
                    "_id": "6665c84421089add36c1b68c"
                },
                {
                    "startTime": 256990,
                    "endTime": 258560,
                    "data": "night",
                    "_id": "6665c84421089add36c1b68d"
                }
            ],
            "_id": "6665c84421089add36c1b687"
        },
        {
            "words": [
                {
                    "startTime": 258560,
                    "endTime": 259080,
                    "data": "I'm",
                    "_id": "6665c84421089add36c1b68f"
                },
                {
                    "startTime": 259080,
                    "endTime": 259640,
                    "data": "still",
                    "_id": "6665c84421089add36c1b690"
                },
                {
                    "startTime": 259640,
                    "endTime": 259640,
                    "data": "not",
                    "_id": "6665c84421089add36c1b691"
                },
                {
                    "startTime": 259640,
                    "endTime": 260160,
                    "data": "over",
                    "_id": "6665c84421089add36c1b692"
                },
                {
                    "startTime": 260160,
                    "endTime": 260670,
                    "data": "you",
                    "_id": "6665c84421089add36c1b693"
                }
            ],
            "_id": "6665c84421089add36c1b68e"
        },
        {
            "words": [
                {
                    "startTime": 260670,
                    "endTime": 261200,
                    "data": "There's",
                    "_id": "6665c84421089add36c1b695"
                },
                {
                    "startTime": 261200,
                    "endTime": 261760,
                    "data": "nothing",
                    "_id": "6665c84421089add36c1b696"
                },
                {
                    "startTime": 261760,
                    "endTime": 262280,
                    "data": "I",
                    "_id": "6665c84421089add36c1b697"
                },
                {
                    "startTime": 262280,
                    "endTime": 263340,
                    "data": "could",
                    "_id": "6665c84421089add36c1b698"
                },
                {
                    "startTime": 263340,
                    "endTime": 264340,
                    "data": "do",
                    "_id": "6665c84421089add36c1b699"
                }
            ],
            "_id": "6665c84421089add36c1b694"
        }
    ],
    "songLink": "https://a128-z3.zmdcdn.me/96def8368227f4490f4b3baf24e52be2?authen=exp=1718119067~acl=/96def8368227f4490f4b3baf24e52be2/*~hmac=9bdb76a4813264145f2204143808269f",
    "songname": "Just Say Hello",
    "state": 0,
    "thumbnail": "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/7/f/5/6/7f56c07c2ea1c9c2434348ecbd8719e8.jpg",
    "updatedAt": "2024-06-09T15:14:44.981Z"
}
const AdminUpload = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [editedWord, setEditedWord] = useState(null);
    const [data, setData] = useState(dataEx)
    const wavesurferRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            wavesurferRef.current = WaveSurfer.create({
                container: containerRef.current,
                waveColor: '#ddd',
                progressColor: '#ff5500',
                cursorColor: '#ff5500',
                barWidth: 2,
                barRadius: 3,
                responsive: true,
                height: 100,
                normalize: true,
                partialRender: true,
            });

            wavesurferRef.current.load('http://res.cloudinary.com/drupmc7qd/video/upload/v1724930339/tj8pd5vmawsaxnq0smnt.mp3');

            wavesurferRef.current.on('audioprocess', () => {
                setCurrentTime(wavesurferRef.current.getCurrentTime());
            });

            wavesurferRef.current.on('finish', () => {
                setIsPlaying(false);
                setCurrentTime(0);
            });
        }

        return () => {
            if (wavesurferRef.current) {
                wavesurferRef.current.destroy();
                wavesurferRef.current = null;
            }
        };
    }, []);

    const onPlayPause = () => {
        if (wavesurferRef.current) {
            if (isPlaying) {
                wavesurferRef.current.pause();
            } else {
                wavesurferRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };


    const handleInputChange = (e, word) => {
        const { name, value } = e.target;
        setEditedWord({
            ...word,
            [name]: name === 'data' ? value : parseFloat(value) * 1000,
        });
    };

    const handleSave = async (word) => {
        console.log(word);
        try {
            const response = await fetch('http://wtfmusic.vercel.app/api/updatelyric', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(word),
            });
            if (!response.ok) {
                throw new Error('Failed to update lyric');
            }
            alert('Lyric updated successfully');
        } catch (error) {
            console.error('Error updating lyric:', error);
            alert('Error updating lyric');
        }
    };

    const handleTimeAdjust = (word, type, direction) => {
        const adjustment = direction === 'left' ? -500 : 500;
        setEditedWord({
            ...word,
            [type]: word[type] + adjustment,
        });
    };

    return (
        <div className="edit">
            <h1 className="edit_title">
                Upload Nhạc
            </h1>
            <div className="player">
                <div ref={containerRef} />
                <p>Current time: {formatTime(currentTime)}</p>
                <div style={{ margin: '1em 0', display: 'flex', gap: '1em' }}>
                    <button onClick={onPlayPause} style={{ minWidth: '5em' }}>
                        {isPlaying ? 'Pause' : 'Play'}
                    </button>
                </div>
            </div>

            <div className="edit_body">
                <div className="edit_body_lyrics">
                    {data.lyric.map((line) => (
                        <div key={line._id}>
                            {line.words.map((word) => (
                                <span
                                    className={`ly_text ${currentTime >= word.startTime / 1000 && currentTime <= word.endTime / 1000 ? 'highlight' : ''}`}
                                    key={word._id}
                                >
                                    {word.data}
                                    <div className={`new_ly ${currentTime >= word.startTime / 1000 && currentTime <= word.endTime / 1000 ? 'highlight_new' : ''}`}>
                                        <button className="change_time" onClick={() => handleTimeAdjust(word.startTime, 'startTime', 'left',)}>
                                            <FontAwesomeIcon icon={faAnglesLeft} />
                                        </button>
                                        <span>
                                            {formatTime(word.startTime / 1000)}
                                        </span>
                                        <button className="change_time" onClick={() => handleTimeAdjust(word.startTime, 'startTime', 'right',)}>
                                            <FontAwesomeIcon icon={faAnglesRight} />
                                        </button>
                                        :
                                        <input
                                            type="text"
                                            className="new_ly_input"
                                            defaultValue={word.data}
                                            onChange={(e) => handleInputChange(e, word)}
                                        />
                                        :
                                        <button className="change_time" onClick={() => handleTimeAdjust(word.endTime, 'endTime', 'left',)}>
                                            <FontAwesomeIcon icon={faAnglesLeft} />
                                        </button>
                                        <span>
                                            {formatTime(word.endTime / 1000)}
                                        </span>
                                        <button className="change_time" onClick={() => handleTimeAdjust(word.endTime, 'endTime', 'right',)}>
                                            <FontAwesomeIcon icon={faAnglesRight} />
                                        </button>
                                        <button onClick={() => handleSave(editedWord || word)}>Save</button>
                                    </div>
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="edit_body_info">
                    <div className="edit_body_info_head">
                        <div className="edit_body_info_img">
                            <img src="https://static.thempho.com/candy/image/lAfQM5VoWtLqkUdqMwJ4BxBNS5J_kzF8dy7uRh_2024041609.webp?w=300&h=450" alt="song" />
                        </div>
                        <div className="edit_body_info_text">
                            <input className="edit_body_info_text_title" value={data.songname}/>      
                            <input className="edit_body_info_text_category" value ={data.genresid.map((category) => category).join(', ')} />                                
                            <input className="edit_body_info_text_singer" value ={data.artists.map((artist) => artist.name).join(', ')} />                              
                        </div>
                    </div>
                    <div className="edit_body_info_body">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminUpload;
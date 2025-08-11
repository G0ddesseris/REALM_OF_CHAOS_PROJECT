// Video data array containing all 85 videos in the specified order
const videoData = [
    {
        title: "Goon Time",
        embedCode: `<div class="sp-embed-player" data-id="cTjXl6n2nSb"><script src="https://go.screenpal.com/player/appearance/cTjXl6n2nSb"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTjXl6n2nSb?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Tongue Out",
        embedCode: `<div class="sp-embed-player" data-id="cTjXl6n2nSF"><script src="https://go.screenpal.com/player/appearance/cTjXl6n2nSF"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTjXl6n2nSF?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Loading your Addiction",
        embedCode: `<div class="sp-embed-player" data-id="cTjXl6n2nSq"><script src="https://go.screenpal.com/player/appearance/cTjXl6n2nSq"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTjXl6n2nSq?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Loading",
        embedCode: `<div class="sp-embed-player" data-id="cTjXl6n2nSY"><script src="https://go.screenpal.com/player/appearance/cTjXl6n2nSY"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTjXl6n2nSY?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Porn Star",
        embedCode: `<div class="sp-embed-player" data-id="cTjXl6n2nSr"><script src="https://go.screenpal.com/player/appearance/cTjXl6n2nSr"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTjXl6n2nSr?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Goon Tube",
        embedCode: `<div class="sp-embed-player" data-id="cTjXl6n2nS3"><script src="https://go.screenpal.com/player/appearance/cTjXl6n2nS3"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTjXl6n2nS3?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Beautiful",
        embedCode: `<div class="sp-embed-player" data-id="cTjXl6n2nS0"><script src="https://go.screenpal.com/player/appearance/cTjXl6n2nS0"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTjXl6n2nS0?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Temptation Desire",
        embedCode: `<div class="sp-embed-player" data-id="cTiUqinIUgA"><script src="https://go.screenpal.com/player/appearance/cTiUqinIUgA"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiUqinIUgA?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Your Future",
        embedCode: `<div class="sp-embed-player" data-id="cTiUqinIUgB"><script src="https://go.screenpal.com/player/appearance/cTiUqinIUgB"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiUqinIUgB?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Everyday",
        embedCode: `<div class="sp-embed-player" data-id="cTiUqinIUgz"><script src="https://go.screenpal.com/player/appearance/cTiUqinIUgz"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiUqinIUgz?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Give in",
        embedCode: `<div class="sp-embed-player" data-id="cTiUqinIUgg"><script src="https://go.screenpal.com/player/appearance/cTiUqinIUgg"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiUqinIUgg?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "The World of a Gooner",
        embedCode: `<div class="sp-embed-player" data-id="cTiTlRnIqDv"><script src="https://go.screenpal.com/player/appearance/cTiTlRnIqDv"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiTlRnIqDv?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Tempted Gloryhole Sissy Slut",
        embedCode: `<div class="sp-embed-player" data-id="cTiTVPnIbx7"><script src="https://go.screenpal.com/player/appearance/cTiTVPnIbx7"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiTVPnIbx7?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "WBS",
        embedCode: `<div class="sp-embed-player" data-id="cTiZclnIIGs"><script src="https://go.screenpal.com/player/appearance/cTiZclnIIGs"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiZclnIIGs?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Locked Slut Deserve Cock",
        embedCode: `<div class="sp-embed-player" data-id="cTi0lKnIlhO"><script src="https://go.screenpal.com/player/appearance/cTi0lKnIlhO"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi0lKnIlhO?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Breed 2",
        embedCode: `<div class="sp-embed-player" data-id="cTi0nznI6Yt"><script src="https://go.screenpal.com/player/appearance/cTi0nznI6Yt"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi0nznI6Yt?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Breed 1",
        embedCode: `<div class="sp-embed-player" data-id="cTi0nDnI6F6"><script src="https://go.screenpal.com/player/appearance/cTi0nDnI6F6"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi0nDnI6F6?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Goon Slut Stroke Forever",
        embedCode: `<div class="sp-embed-player" data-id="cTi3blnIQZP"><script src="https://go.screenpal.com/player/appearance/cTi3blnIQZP"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi3blnIQZP?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Loading into new Reality",
        embedCode: `<div class="sp-embed-player" data-id="cTi3IDnIjCf"><script src="https://go.screenpal.com/player/appearance/cTi3IDnIjCf"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi3IDnIjCf?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Become Her 1",
        embedCode: `<div class="sp-embed-player" data-id="cTi3c5nI1uZ"><script src="https://go.screenpal.com/player/appearance/cTi3c5nI1uZ"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi3c5nI1uZ?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Someone Son",
        embedCode: `<div class="sp-embed-player" data-id="cTi3c5nI1uT"><script src="https://go.screenpal.com/player/appearance/cTi3c5nI1uT"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi3c5nI1uT?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Worship Cock Clean",
        embedCode: `<div class="sp-embed-player" data-id="cTirqknIhRy"><script src="https://go.screenpal.com/player/appearance/cTirqknIhRy"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTirqknIhRy?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Cuck Dream 1",
        embedCode: `<div class="sp-embed-player" data-id="cTirqknIhR4"><script src="https://go.screenpal.com/player/appearance/cTirqknIhR4"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTirqknIhR4?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "BNWO Green Match Cut",
        embedCode: `<div class="sp-embed-player" data-id="cTirqknIhRx"><script src="https://go.screenpal.com/player/appearance/cTirqknIhRx"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTirqknIhRx?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Give in Surrender Goon Slut",
        embedCode: `<div class="sp-embed-player" data-id="cTiYqknInTa"><script src="https://go.screenpal.com/player/appearance/cTiYqknInTa"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiYqknInTa?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Blacked Lina",
        embedCode: `<div class="sp-embed-player" data-id="cTiXrTnlpKf"><script src="https://go.screenpal.com/player/appearance/cTiXrTnlpKf"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTiXrTnlpKf?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Welcome Back Pornosexual",
        embedCode: `<div class="sp-embed-player" data-id="cTi1Dsnl0UB"><script src="https://go.screenpal.com/player/appearance/cTi1Dsnl0UB"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cTi1Dsnl0UB?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Blacked Take Over",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjgn6S93"><script src="https://go.screenpal.com/player/appearance/cT1hjgn6S93"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjgn6S93?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Girlcock 1",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjgn6S90"><script src="https://go.screenpal.com/player/appearance/cT1hjgn6S90"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjgn6S90?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Surrender Your Soul Become",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjgn6S9Z"><script src="https://go.screenpal.com/player/appearance/cT1hjgn6S9Z"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjgn6S9Z?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Time to Shake It",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjZn6SNg"><script src="https://go.screenpal.com/player/appearance/cT1hjZn6SNg"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjZn6SNg?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Time to!",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjZn6SNA"><script src="https://go.screenpal.com/player/appearance/cT1hjZn6SNA"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjZn6SNA?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Take Cum",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjZn6SNz"><script src="https://go.screenpal.com/player/appearance/cT1hjZn6SNz"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjZn6SNz?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Goon to the Max",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjZn6SN4"><script src="https://go.screenpal.com/player/appearance/cT1hjZn6SN4"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjZn6SN4?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Black Shemale",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjZn6SNv"><script src="https://go.screenpal.com/player/appearance/cT1hjZn6SNv"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjZn6SNv?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Time to Goon 1",
        embedCode: `<div class="sp-embed-player" data-id="cT1hjZn6SNB"><script src="https://go.screenpal.com/player/appearance/cT1hjZn6SNB"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cT1hjZn6SNB?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Let's Celebrate Pride",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECt"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECt"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECt?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Modern White Girl BBC Confessions",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECv"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECv"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECv?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "No Don't Think About Cock",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECx"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECx"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECx?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Happy Pride Month Gooner",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECT"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECT"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECT?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Futa - Male - Female Fuck Train",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6EC0"><script src="https://go.screenpal.com/player/appearance/cThvXcn6EC0"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6EC0?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "The Great Reset - Acceptance",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6EC4"><script src="https://go.screenpal.com/player/appearance/cThvXcn6EC4"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6EC4?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Eat Sleep Goon Repeat",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6EC3"><script src="https://go.screenpal.com/player/appearance/cThvXcn6EC3"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6EC3?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Don't Think About It",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECr"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECr"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECr?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Choose Your Sexual Preference",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECb"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECb"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECb?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Nasty Piss Sluts",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECw"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECw"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECw?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "And That's How You Became Your Jerk Off Buddy's Sissy Slut",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECo"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECo"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECo?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "BBC At The Gloryhole",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECD"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECD"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECD?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Welcome To Paradise",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECa"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECa"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECa?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Goddess Queenie Rewards Caged Sissy",
        embedCode: `<div class="sp-embed-player" data-id="cThvXcn6ECZ"><script src="https://go.screenpal.com/player/appearance/cThvXcn6ECZ"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThvXcn6ECZ?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Let Desire Consume You",
        embedCode: `<div class="sp-embed-player" data-id="cThUqxn6C4O"><script src="https://go.screenpal.com/player/appearance/cThUqxn6C4O"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThUqxn6C4O?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Cock Calls",
        embedCode: `<div class="sp-embed-player" data-id="cThUqxn6C4m"><script src="https://go.screenpal.com/player/appearance/cThUqxn6C4m"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThUqxn6C4m?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Embrace Feminity",
        embedCode: `<div class="sp-embed-player" data-id="cThUqxn6C4Y"><script src="https://go.screenpal.com/player/appearance/cThUqxn6C4Y"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThUqxn6C4Y?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    },
    {
        title: "Become My Cock Slave 2",
        embedCode: `<div class="sp-embed-player" data-id="cThUqxn6C4y"><script src="https://go.screenpal.com/player/appearance/cThUqxn6C4y"></script><iframe width="100%" height="100%" style="border:0;" scrolling="no" src="https://go.screenpal.com/player/cThUqxn6C4y?width=100%&height=100%&ff=1&title=0" allowfullscreen="true"></iframe></div>`
    }
];

// Pagination settings
const videosPerPage = 20;
let currentPage = 1;

// DOM elements
let videoGrid;
let topPagination = {
    prevBtn: null,
    nextBtn: null,
    pageInfo: null
};
let bottomPagination = {
    prevBtn: null,
    nextBtn: null,
    pageInfo: null
};

// Initialize the gallery
function initGallery() {
    // Get DOM elements
    videoGrid = document.getElementById('videoGrid');
    
    // Top pagination elements
    topPagination.prevBtn = document.querySelector('.page-header #prevPage');
    topPagination.nextBtn = document.querySelector('.page-header #nextPage');
    topPagination.pageInfo = document.querySelector('.page-header #pageInfo');
    
    // Bottom pagination elements
    bottomPagination.prevBtn = document.querySelector('main > .pagination #prevPage');
    bottomPagination.nextBtn = document.querySelector('main > .pagination #nextPage');
    bottomPagination.pageInfo = document.querySelector('main > .pagination #pageInfo');
    
    if (!videoGrid || !topPagination.prevBtn || !topPagination.nextBtn || !topPagination.pageInfo || 
        !bottomPagination.prevBtn || !bottomPagination.nextBtn || !bottomPagination.pageInfo) {
        console.error('Required elements not found in the DOM');
        return;
    }
    
    // Set up event listeners
    setupPagination();
    
    // Initial display
    displayVideos();
    updatePageInfo();
}

// Display videos for the current page
function displayVideos() {
    if (!videoGrid) return;

    // Clear existing videos
    videoGrid.innerHTML = '';

    // Calculate start and end indices for current page
    const startIndex = (currentPage - 1) * videosPerPage;
    const endIndex = Math.min(startIndex + videosPerPage, videoData.length);

    // Add videos for current page
    for (let i = startIndex; i < endIndex; i++) {
        const video = videoData[i];
        if (!video) continue;
        
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <h3 class="video-title">${video.title}</h3>
            <div class="video-container">
                ${video.embedCode}
            </div>
        `;
        videoGrid.appendChild(videoCard);
    }
}

// Update page information and button states
function updatePageInfo() {
    const totalPages = Math.ceil(videoData.length / videosPerPage);
    const pageInfoText = `Page ${currentPage} of ${totalPages}`;
    
    // Update top pagination
    if (topPagination.pageInfo) {
        topPagination.pageInfo.textContent = pageInfoText;
    }
    
    // Update bottom pagination
    if (bottomPagination.pageInfo) {
        bottomPagination.pageInfo.textContent = pageInfoText;
    }
    
    // Update button states for both pagination controls
    [topPagination, bottomPagination].forEach(pagination => {
        if (!pagination.prevBtn || !pagination.nextBtn) return;
        
        // Update disabled state
        pagination.prevBtn.disabled = currentPage <= 1;
        pagination.nextBtn.disabled = currentPage >= totalPages;
        
        // Update classes for styling
        pagination.prevBtn.classList.toggle('disabled', currentPage <= 1);
        pagination.nextBtn.classList.toggle('disabled', currentPage >= totalPages);
    });
}

// Setup pagination controls
function setupPagination() {
    // Function to handle previous page click
    const handlePrevPage = () => {
        if (currentPage > 1) {
            currentPage--;
            displayVideos();
            updatePageInfo();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    // Function to handle next page click
    const handleNextPage = () => {
        const totalPages = Math.ceil(videoData.length / videosPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayVideos();
            updatePageInfo();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };
    
    // Add event listeners to top pagination
    if (topPagination.prevBtn && topPagination.nextBtn) {
        topPagination.prevBtn.addEventListener('click', handlePrevPage);
        topPagination.nextBtn.addEventListener('click', handleNextPage);
    }
    
    // Add event listeners to bottom pagination
    if (bottomPagination.prevBtn && bottomPagination.nextBtn) {
        bottomPagination.prevBtn.addEventListener('click', handlePrevPage);
        bottomPagination.nextBtn.addEventListener('click', handleNextPage);
    }
}

// Initialize the gallery when the page loads
document.addEventListener('DOMContentLoaded', initGallery);

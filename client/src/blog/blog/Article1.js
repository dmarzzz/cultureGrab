import React from 'react'
import Header from './Header';
import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';
import post1 from './blog-post.1.md';
import Main from './Main';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
//to use later
const sections = [
    // { title: 'Technology', url: '#' },
];

const useStyles = makeStyles((theme) => ({
    mainGrid: {
      marginTop: theme.spacing(3),
    },
}));

export default function Article() {
    const classes = useStyles();

    return (
        <div style={{ backgroundColor: "#FFFFEF", height: "100%" }}>
            <Container maxWidth="lg" >
                <Header title="Music" sections={sections} href="/blog" />
                <Grid container spacing={5} className={classes.mainGrid}>
                    <Main title={postTitle} posts={posts} />
                </Grid>
            </Container>
        </div>
    )
}


const postTitle = 'Suspiria Review'

const articleContents = `Luca Guadagnino’s highly anticipated follow-up to Call Me By Your Name (2017) is finally available in the form of Suspiria (2018), an adaptation of fellow Italian filmmaker Dario Argento’s vibrant horror spectacle of the same name. The original 1977 cult hit follows ballerina Suzy Bannion as she arrives in Germany to advance her studies under the imperious Madame Blanc. A petrifying score by the band Goblin accompanies Suzy and her peers as they navigate the ominous hallways of Tanz Dance Academy in an attempt to understand the disappearance of a student named Patricia. The film is notorious for campy death scenes drenched in bright red blood, ultimately playing as a gory carnival ride. 
The modern version of Suspiria takes plenty of freedoms with the original story in order to distinguish itself. In the original film, Argento only hints at the evils lurking behind the academy walls, utilizing uncertainty to accentuate suspense. Conversely, Guadagnino immediately exposes the dark intentions of Madame Blanc and her underlings to establish a history and methodology behind their ritualistic behavior. The audience is allowed snippets of Blanc’s internal monologue and a peek into Patricia’s journal entries describing the exact structure of the ancient coven she eventually falls victim to. 
In addition to the development of the narrative premise, 2018’s Suspiria adds piles of limbs to pools of blood in order to heighten the essentially grotesque nature of the original. The first death scene is as excruciating as it is entrancing, and will surely embed itself in horror history. All in all, Guadagnino achieves in expanding Suspirian lore while maintaining its harrowing style.
Lovers of Guadagnino’s Call Me By Your Name should prepare for a sharp departure from the immersive long takes that characteristically guide his linear, character-focused narratives. Instead, Suspiria pulsates with jarringly juxtaposed imagery tied together into a plotline crossing multiple spatial and temporal planes. Despite differences in visual expression, there still remain substantive conceptual connections between last year’s romantic daydream and this year’s psychedelic nightmare. Both films exalt the human form; Call Me By Your Name sanctifies its beauty in carefully constructed snap shots while Suspiria sacrifices it in hectic yet spellbinding dance sequences. Another creative continuity is found in the physical unity emphasized between the dancers at Tanz Dance Academy. Their circumstantial relation is subtly concretized by glances, hugs and kisses, reminding a Guadagnino fan of the muted interactions that build Elio and Oliver’s spiritual proximity.
Ultimately, Guadagnino’s Suspiria exists as a portal to an otherworldly experience. Thom Yorke anchors the chaos onscreen with an ethereal soundtrack that never overwhelms the viewer, but offers the film a distinct sonic heartbeat. Each character portrayal is convincing, though none are particularly outstanding. Much like its predecessor, the film operates primarily as an aesthetic masterpiece. Those expecting a satisfying thematic resolution may be disappointed by the culminating sequences, but a cryptic conclusion seems appropriate for such anxiety-inducing cinema. 
`

const posts = [articleContents];
    
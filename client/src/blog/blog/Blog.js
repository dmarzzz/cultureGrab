import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import SpotifyPlayer from 'react-spotify-player';

// size may also be a plain string using the presets 'large' or 'compact'
const size = {
  width: '100%',
  height: 200,
};
const view = 'coverart'; // or 'list'
const theme = 'black'; // or 'white'

const sections = [
  // { title: 'Technology', url: '#' },
  // { title: 'Design', url: '#' },
  // { title: 'Culture', url: '#' },
  // { title: 'Business', url: '#' },
  // { title: 'Politics', url: '#' },
  // { title: 'Opinion', url: '#' },
  // { title: 'Science', url: '#' },
  // { title: 'Health', url: '#' },
  // { title: 'Style', url: '#' },
  // { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Suspiria',
  description:
    "Luca Guadagnino’s highly anticipated follow-up to Call Me By Your Name (2017) is finally available in the form of Suspiria (2018)",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


const featuredPosts1 = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];


export default function Blog() {

  return (
    <div style={{ backgroundColor: "#FFFFEF", height: "auto" }}>

      <Container maxWidth="lg" >
        <Header title="Music" sections={sections} />
        {/* <main> */}
          <MainFeaturedPost post={mainFeaturedPost} onClick={() => { console.log('test') }} />
          <br />
          <br />
          <Grid container spacing={10}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} onClick={() => { console.log('test') }} />
            ))}
          </Grid>
        {/* </main> */}
        <br />
        <br />
        <br />
        <Grid container spacing={10}>
          {featuredPosts1.map((post) => (
            <FeaturedPost key={post.title} post={post} onClick={() => { console.log('test') }} />
          ))}

          <div style={{ paddingLeft: '45px', paddingTop: '35px', marginRight: '0' }}>
            <SpotifyPlayer
              uri="spotify:playlist:6g1kaPgmyPpAXCCItCpxjS"
              size={size}
              view={view}
              theme={theme}
            />
          </div>
        </Grid>




      </Container>




      {/* <div style={{ paddingLeft:'320px' , paddingTop:'50px' }}>
      <SpotifyPlayer
        uri="spotify:playlist:6g1kaPgmyPpAXCCItCpxjS" 
        size={size}
        view={view}
        theme={theme}
      />
      </div> */}
    </div>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Container from "@material-ui/core/Container";
import Nav from "./Nav";
import Link from "next/link";
import Image from 'next/image'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 500,
    // height: 450,
  },
  icon: {
    color: "rgba(60, 179, 113)",
  },
  ourBlog: {
    color: "rgba(60, 179, 113)",
  },
}));

export default function BlogList({ posts }) {
  const classes = useStyles();

  return (
    <>
      <Nav />
      <Container maxWidth="lg">
        <div className={classes.root}>
          <GridList cellHeight={180} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">
                  We work hard to update our blog everyday. Please do check out our posts!
              </ListSubheader>
            </GridListTile>
            {posts.map((post) => (
              <GridListTile key={post.sys.id}>
                  <Image
                  src={'https:'+ post.fields.thumbnail.fields.file.url}
                  width={post.fields.thumbnail.fields.file.details.image.width}
                  height={post.fields.thumbnail.fields.file.details.image.height}
                  />
                <GridListTileBar
                  title={post.fields.title}
                  subtitle={<span>by: {post.fields.author}</span>}
                  actionIcon={
                    <>
                      {/* <Link href={article.url} passHref={true}> */}
                        <IconButton
                          aria-label={`info about ${post.fields.title}`}
                          className={classes.icon}
                        >
                          <InfoIcon />
                        </IconButton>
                      {/* </Link> */}
                    </>
                  }
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </Container>
    </>
  );
}

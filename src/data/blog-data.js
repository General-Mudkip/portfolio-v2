import { gql } from "graphql-request";
import { getClient } from "../lib/graphQLClient";

export const getAllPosts = async () => {
  const client = getClient();

  const allPosts = await client.request(gql`
    query allPosts {
      publication(host: "blog.mudkip.live") {
        title
        posts(first: 20) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              author {
                name
                profilePicture
              }
              title
              subtitle
              brief
              slug
              coverImage {
                url
              }
              tags {
                name
                slug
              }
              publishedAt
              readTimeInMinutes
            }
          }
        }
      }
    }
  `);

  return allPosts;
};

export const getPost = async (slug) => {
  const client = getClient();

  const data = await client.request(
    gql`
      query postDetails($slug: String!) {
        publication(host: "blog.mudkip.live") {
          post(slug: $slug) {
            author {
              name
              profilePicture
            }
            publishedAt
            title
            subtitle
            readTimeInMinutes
            content {
              html
            }
            tags {
              name
              slug
            }
            coverImage {
              url
            }
          }
        }
      }
    `,
    { slug: slug },
  );

  return data.publication.post;
};


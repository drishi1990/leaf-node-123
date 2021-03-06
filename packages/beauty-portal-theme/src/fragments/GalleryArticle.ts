import { graphql } from 'gatsby';

export const query1 = graphql`
  fragment GalleryFieldsFull on SanityGalleryArticle {
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    _createdAt(formatString: "MMMM D, YYYY")
    _updatedAt(formatString: "MMMM D, YYYY")
    subheading
    path
    slug {
      current
    }
    id
    author {
      name
      slug {
        current
      }
      image {
        alt
        asset {
          fluid(maxWidth: 50, maxHeight: 50) {
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcSetWebp
            srcWebp
          }
        }
      }
    }
    _type
    _rawBody(resolveReferences: { maxDepth: 10 })
    _rawHeroImage(resolveReferences: { maxDepth: 10 })
    _rawImageGallery(resolveReferences: { maxDepth: 10 })
    heroImage {
      asset {
        url
        metadata {
          dimensions {
            height
            width
          }
        }
      }
    }
    tags {
      name
      id
      tagCategory {
        name
        id
      }
    }
    seo {
      metaDescription
      metaKeywords
      metaTitle
    }
    readnext {
      ... on SanityGalleryArticle {
        headline
        path
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 350, maxHeight: 212) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityFeatureArticle {
        headline
        path
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 350, maxHeight: 212) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
      ... on SanityHowToArticle {
        headline
        path
        slug {
          current
        }
        _type
        heroImage {
          alt
          asset {
            fluid(maxWidth: 350, maxHeight: 212) {
              aspectRatio
              base64
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;

export const query2 = graphql`
  fragment GalleryFieldsTile on SanityGalleryArticle {
    headline
    publishedAt(formatString: "MMMM D, YYYY")
    subheading
    path
    slug {
      current
    }
    id
    _rawHeroImage(resolveReferences: { maxDepth: 10 })
    heroImage {
      alt
      asset {
        label
        title
        url
        fluid(maxWidth: 175, maxHeight: 175) {
          aspectRatio
          base64
          sizes
          src
          srcSet
          srcSetWebp
          srcWebp
        }
      }
    }
    _type
  }
`;

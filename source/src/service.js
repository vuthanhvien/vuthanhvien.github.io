
import gql from 'graphql-tag';
import ApolloClient from 'apollo-boost'


const apolloClient = new ApolloClient({
  uri: 'https://us-central1-vienvu-7e64f.cloudfunctions.net/api/graphql'
})

// const apolloProvider = new VueApollo({
//   defaultClient: apolloClient,
// })



export const getPosts = async (page = 1) => {
    console.log(page);
    let posts = [];
    await apolloClient.query({
        query: gql`
            {
                data:posts{
                    list{
                        id
                        name
                        content
                        background
                        author{
                            id
                            name
                        }
                        createdAt
                        updatedAt
                        color
                        tags
                        width
                    }
                }
            }
        `,
        fetchPolicy: 'network-only'
    }).then(re=>{
        posts = JSON.parse(JSON.stringify(re.data.data.list))
    })
    return posts;
}

export const getPost = async (id) => {
    let post = {}
    await apolloClient.query({
        query: gql`
            query getPost($id: String!){
                data:post(id: $id){
                    id
                    name
                    content
                    background
                    author{
                        id
                        name
                    }
                    createdAt
                    updatedAt
                    color
                    tags
                    width
                }
            }
        `,
        variables: {id},
        fetchPolicy: 'network-only'
    }).then(re=>{
        post = JSON.parse(JSON.stringify(re.data.data))
    })
    return post;
}

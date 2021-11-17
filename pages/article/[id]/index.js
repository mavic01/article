// import {useRouter} from "next/router"
import {server} from "../../../config"
import Link from "next/link"
import Meta from "../../../components/Meta"

const article = ({article}) => {
    // const router = useRouter()
    // const {id} = router.query
    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/"><a className="title">Go back jare</a></Link>
            <style jsx>
                {`
                    .title{
                        color: white;
                        background-color: blue;
                        padding: 10px;
                        border-radius: 20px;
                    }
                    .title:hover{
                         background-color: teal;
                    }
                `}
            </style>
        </>
    )
}

export const getStaticProps = async (context) => { //this is fster cos u'll be fetching at build time COZ ya using it with getStaticPaths below
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
} 

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const article = await res.json()

    const ids = article.map(a => a.id)
    const paths = ids.map(id => ({params: {id:id.toString()}}))
    return {
        paths,
        fallback: false //returns 404 if invalid params is added
    }
}

// export const getStaticProps = async (context) => { //this is fster cos u'll be fetching at build time COZ ya using it with getStaticPaths below
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// } 

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
//     const article = await res.json()

//     const ids = article.map(a => a.id)
//     const paths = ids.map(id => ({params: {id:id.toString()}}))
//     return {
//         paths,
//         fallback: false //returns 404 if invalid params is added
//     }
// }

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// } 

export default article

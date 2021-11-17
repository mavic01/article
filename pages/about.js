import Meta from "../components/Meta"

const about = () => {
    return (
        <div>
            <Meta title="About"/>
            <h1>About</h1>
            <p>We provide cool content on web development</p>
                <style jsx>
                {`
                    .title{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                `}
            </style>
        </div>
    )
}

export default about

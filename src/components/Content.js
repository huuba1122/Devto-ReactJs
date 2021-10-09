import React , { useState, useEffect } from 'react';
import ArticleComponent from './ArticleComponent';
import ArticleSkeleton from './ArticleSkeleton';

const Content = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout( async() => {
            try {
                
            const res = await fetch('https://dev.to/api/articles');
            const data = await res.json();
            
            setArticles(data);
            } catch (error) {
                console.log(error);
            }
        }, 2000)
    }, [])

    useEffect(() => {
        const fetchAgain = async () => {
            try {
                const res = await fetch('https://dev.to/api/articles');
                const data = await res.json();
                setArticles([...articles, ...data]);
                
            } catch (error) {
                console.log(error);
            }
        }

        const handleScroll = () => {
            const html = document.documentElement;
            const body = document.body;

            const windowHeight = window.innerHeight || html.offsetHeight;

            const docHeight = Math.max(
                body.scrollHeight,
                body.offsetHeight,
                html.clientHeight,
                html.scrollHeight,
                html.offsetHeight
            );

            const windowBottom = windowHeight + window.pageYOffset;

            if(windowBottom >= docHeight){
                console.log(windowBottom);
                fetchAgain();
            }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [articles]);

    return (
        <main className="main-content">
            <header>
                <h1>Post</h1>
                <nav>
                    <a href="/#" className="active">Feed</a>
                    <a href="/#">Week</a>
                    <a href="/#">Mount</a>
                    <a href="/#">Infinity</a>
                    <a href="/#">Latest</a>
                </nav>

                <select className="dropdown" id="dropdown-select" >
                    <option value="Feed" defaultValue>Feed</option>
                    <option value="Week">Week</option>
                    <option value="Mount">Mount</option>
                    <option value="Infinity">Infinity</option>
                    <option value="Latest">Latest</option>
                </select>
            </header>

            <div className="articles">
                {
                    articles && 
                    articles.map( (article, id) => {
                        return <ArticleComponent key={id} data={article} />
                    })
                }

                {
                    !articles &&
                    ([1,2,3,4,5].map( a => <ArticleSkeleton key={a} />))
                }
            </div>
        </main>
    )
}

export default Content

import datos from '../data/articles.json';

const articles = datos;

export function Aside() {
    return (
        <aside className='w-2/3  bg-very-dark-blue text-off-white px-10 py-12 2xl:px-12'>
            <h1 className='font-bold text-5xl mb-8 text-soft-orange'>New</h1>
            <section>
                {articles.map((article, index) => (
                    <div key={article.number}>
                        <article className='flex flex-col gap-4'>
                            <h2 className='text-2xl font-bold hover:text-soft-orange cursor-pointer'>{article.title}</h2>
                            <p className='text-grayish-blue font-normal text-lg'>{article.description}</p>
                        </article>
                        {index < arguments.length && <hr className='my-8 2xl:my-12 border-t border-dark-grayish-blue opacity-70' />}
                    </div>
                ))}
            </section>
        </aside>
    );
}
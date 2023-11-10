export function Content({ title, text }) {

    return (
        <section>
            <img src="/image-web-3-desktop.jpg" alt="web 3" />
            <article>
                <h1>{title}</h1>
                <p>{text}</p>
            </article>
            <button className="bg-red-500 px-6 py-3">
                <strong className="text-white">Read more</strong>
            </button>
        </section>
    );
}